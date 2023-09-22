import express, { Router } from 'express';
import { createCheckoutSession, handleStripeWebhook } from '../../controllers/stripe';
import { stripeWebhookMiddleware } from '../../middleware/stripeWebhook';

const stripeRouter = Router();

stripeRouter.post('/stripe/create-checkout-session', express.json(), createCheckoutSession);
stripeRouter.post('/stripe/webhook', stripeWebhookMiddleware, handleStripeWebhook);

export default stripeRouter;
