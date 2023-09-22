import { Request, Response } from 'express';
import NotificationModel from '../models/notification';
import UserModel from '../models/user';
import AdminModel from '../models/admin';
import mongoose, { MongooseError, Document } from 'mongoose';

type userDocument = Document & {
  message: mongoose.Types.ObjectId[];
  is_business: boolean;
};

type adminDocument = Document & {
  message: mongoose.Types.ObjectId[];
};

const sendMessage = async (
  target: userDocument | adminDocument,
  send_by: mongoose.Types.ObjectId,
  send_to: mongoose.Types.ObjectId,
  title: string,
  category: string,
  is_user: boolean,
  session: mongoose.mongo.ClientSession,
) => {
  const notification = new NotificationModel({
    send_by: send_by,
    send_to: send_to,
    category: category,
    title: title,
  });
  const savedNotification = await notification.save({ session });
  target.message.push(savedNotification._id as mongoose.Types.ObjectId);
  if (is_user && category === 'approve') {
    (target as userDocument).is_business = true;
  } else if (is_user && category === 'reject') {
    (target as userDocument).is_business = false;
  }
  await target.save({ session });
};

export const approve = async (req: Request, res: Response) => {
  const uid: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);
  const aid: mongoose.Types.ObjectId = new mongoose.Types.ObjectId('647b79c7f844fa6f3b688ed1');
  const user = await UserModel.findById(uid).exec();
  const admin = await AdminModel.findById(aid).exec();
  let errorState = false;
  let errMsg = {};
  if (!user) {
    res.status(404).json({ message: 'User not found.' });
    return;
  }
  if (user.is_deactivate) {
    res.status(400).json({ message: 'This user is deactivated.' });
    return;
  }
  if (user.is_business) {
    res.status(400).json({ message: 'This account is alreay a bussiness account.' });
    return;
  }
  if (!admin) {
    res.status(404).json({ message: 'Admin not found.' });
    return;
  }

  const operationSession = await mongoose.startSession();
  operationSession.startTransaction();

  try {
    await sendMessage(
      user as userDocument,
      aid,
      uid,
      'Your application has been approved',
      'approve',
      true,
      operationSession,
    );
    await sendMessage(
      admin as adminDocument,
      aid,
      aid,
      `Application from ${user.username} has been approved`,
      'approve',
      false,
      operationSession,
    );
    await operationSession.commitTransaction();
  } catch (err) {
    errorState = true;
    await operationSession.abortTransaction();
    errMsg = { msg: (err as MongooseError).message };
  } finally {
    if (errorState) {
      operationSession.endSession();
      res.status(500).json(errMsg);
    }
    operationSession.endSession();
    res.json({ msg: 'success' }).status(200);
  }
};

export const decline = async (req: Request, res: Response) => {
  const uid: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);
  const aid = new mongoose.Types.ObjectId('647b79c7f844fa6f3b688ed1');
  const user = await UserModel.findById(uid).exec();
  const admin = await AdminModel.findById(aid).exec();
  let errorState = false;
  let errMsg = {};
  if (!user) {
    res.status(404).json({ message: 'User not found.' });
    return;
  }
  if (user.is_deactivate) {
    res.status(400).json({ message: 'This user is deactivated.' });
    return;
  }
  if (!admin) {
    res.status(404).json({ message: 'Admin not found.' });
    return;
  }

  const operationSession = await mongoose.startSession();
  operationSession.startTransaction();

  try {
    if (user.is_business) {
      await sendMessage(
        user as userDocument,
        aid,
        uid,
        'Your account is no longer a bussiness account',
        'reject',
        true,
        operationSession,
      );
      await sendMessage(
        admin as adminDocument,
        aid,
        aid,
        `The business status of account ${user.username} has been revoked`,
        'reject',
        false,
        operationSession,
      );
    } else {
      await sendMessage(
        user as userDocument,
        aid,
        uid,
        'Your application has been declined',
        'reject',
        true,
        operationSession,
      );
      await sendMessage(
        admin as adminDocument,
        aid,
        aid,
        `Application from ${user.username} has been declined`,
        'reject',
        false,
        operationSession,
      );
    }
    await operationSession.commitTransaction();
  } catch (err) {
    errorState = true;
    await operationSession.abortTransaction();
    errMsg = { msg: (err as MongooseError).message };
  } finally {
    if (errorState) {
      operationSession.endSession();
      res.status(500).json(errMsg);
    }
    operationSession.endSession();
    res.json({ msg: 'success' }).status(200);
  }
};

export const getAllNotification = async (req: Request, res: Response) => {
  try {
    const notifications = await NotificationModel.find().exec();
    res.status(201).json(notifications);
  } catch (error) {
    res.status(404).json({ error: 'fail to get all notifications' });
  }
};
