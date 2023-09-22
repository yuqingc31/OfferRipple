import { Request, Response } from 'express';
import mongoose from 'mongoose';
import RechargeModel from '../models/recharge';
import UserModel from '../models/user';
import NotificationModel from '../models/notification';

require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_KEY);
const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET;

export const createCheckoutSession = async (req: Request, res: Response) => {
  const customer = await stripe.customers.create({
    metadata: {
      userId: req.body.userId,
      subTotal: req.body.subTotal,
    },
  });

  const line_items = [
    {
      price_data: {
        currency: 'aud',
        product_data: {
          name: 'dcoin',
          description: 'dcoin recharge',
          metadata: {
            id: req.body.userId,
          },
        },
        unit_amount: 100,
      },
      quantity: req.body.subTotal * 1 || 0,
    },
  ];

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    mode: 'payment',
    customer: customer.id,
    success_url: `${process.env.CLIENT_URL}/payment_success`,
    cancel_url: `${process.env.CLIENT_URL}/recharge`,
    payment_intent_data: {
      setup_future_usage: 'off_session',
    },
  });

  res.json({ url: session.url });
};

const processRecharge = async (userId: string, paymentAmount: number) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  const dcoinAmount = paymentAmount * 1;

  try {
    const user = await UserModel.findById(userId).exec();

    if (!user) {
      throw new Error('User not found.');
    }

    const newRecharge = new RechargeModel({
      buyer: userId,
      dcoin_amount: dcoinAmount,
      payment_amount: paymentAmount,
    });

    const savedRecharge = await newRecharge.save({ session });

    user.dcoin += dcoinAmount;

    const newNotification = new NotificationModel({
      send_by: '647b79c7f844fa6f3b688ed1',
      send_to: user._id,
      category: 'post',
      title: 'Recharge succeed',
    });

    const savedNotification = await newNotification.save({ session });
    user.message.push(savedNotification._id);
    await user.save({ session });

    await session.commitTransaction();
    session.endSession();

    return savedRecharge;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

export const handleStripeWebhook = async (req: Request, res: Response) => {
  let event = req.body;
  if (endpointSecret) {
    const signature = req.headers['stripe-signature'];
    try {
      event = stripe.webhooks.constructEvent(req.body, signature, endpointSecret);
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed:  ${err}`);
      return res.sendStatus(400);
    }
  }

  if (event.type === 'checkout.session.completed') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    stripe.customers.retrieve(event.data.object.customer).then(async (customer: any) => {
      try {
        const userId = customer.metadata.userId;
        const dcoinAmount = parseFloat(customer.metadata.subTotal);
        processRecharge(userId, dcoinAmount);
      } catch (error) {
        console.log(typeof processRecharge);
        console.log(error);
      }
    });
  }

  res.status(200).end();
};
