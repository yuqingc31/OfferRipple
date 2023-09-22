import { Request, Response } from 'express';
import UserModel from '../models/user';
import Notification from '../models/notification';
import Admin from '../models/admin';
import mongoose from 'mongoose';
import { validationResult } from 'express-validator';
import { generateToken } from '../utils/jwt';
import bcrypt from 'bcrypt';

export const index = async (req: Request, res: Response) => {
  const users = await UserModel.find().exec();
  const sortedUsers = users.reverse();
  if (users.length === 0) {
    res.status(404);
    res.json({ message: "Couldn't get all user details." });
    return;
  }
  if (Object.keys(req.query).length === 0) {
    res.json(sortedUsers);
    res.status(200);
    return;
  }
  if (req.query && req.query.search === '') {
    const totalPages = Math.ceil(sortedUsers.length / 10);
    const pageNumber = Number(req.query.page);
    const pageStatIndex = pageNumber * 10 - 10;
    const pageEndIndex = pageNumber * 10;
    const slicedUsers = sortedUsers.slice(pageStatIndex, pageEndIndex);
    res.status(201).json({ slicedUsers, totalPages });
    return;
  }
  if (req.query && req.query.search !== '') {
    const searchKey = req.query.search as string;
    const escapedSearchKey = searchKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedSearchKey, 'i');
    const searchUsers = await UserModel.find({ email: regex }).exec();
    const sortedSearchUsers = searchUsers.reverse();
    const totalPages = Math.ceil(sortedSearchUsers.length / 10);
    const pageNumber = Number(req.query.page);
    const pageStatIndex = pageNumber * 10 - 10;
    const pageEndIndex = pageNumber * 10;
    const slicedUsers = sortedSearchUsers.slice(pageStatIndex, pageEndIndex);
    res.status(201).json({ slicedUsers: slicedUsers, totalPages: totalPages });
    return;
  }
};

export const getUser = async (req: Request, res: Response) => {
  const { _id }: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);
  const users = await UserModel.findById(_id).exec();
  if (!users) {
    res.status(404);
    res.json({ message: "Couldn't get user details." });
    return;
  }
  const user = {
    id: users._id,
    avatar: users.avatar,
    username: users.username,
    email: users.email,
    phone_number: users.phone_number,
    password: users.password,
    following: users.following,
    posts: users.posts,
    personal_question: users.personal_question,
    personal_answer: users.personal_answer,
    is_deactivate: users.is_deactivate,
  };
  res.json(user);
  res.status(200);
};

export const deactivate = async (req: Request, res: Response) => {
  const _id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);
  const user = await UserModel.findByIdAndUpdate(_id, { is_deactivate: true }, { new: true }).exec();
  if (!user) {
    res.status(404).json({ message: 'User not found.' });
    return;
  }
  res.json(user).status(200);
};

export const activate = async (req: Request, res: Response) => {
  const _id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);
  const user = await UserModel.findByIdAndUpdate(_id, { is_deactivate: false }, { new: true }).exec();
  if (!user) {
    res.status(404).json({ message: 'User not found.' });
    return;
  }
  res.json(user).status(200);
};

export const signup = async (req: Request, res: Response) => {
  const { email, password, personal_question, personal_answer } = req.body;

  const existingUser = await UserModel.findOne({ email }).exec();
  if (existingUser) {
    return res.status(409).json({ error: 'email already exists' });
  }

  const user = new UserModel({
    email,
    password,
    personal_question,
    personal_answer,
  });

  await user.hashPassword();
  await user.save();
  const id = user._id;
  const token = generateToken({ id: user._id, email: user.email });
  res.status(201).json({ id, token });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const user = await UserModel.findOne({ email }).select('+password').exec();

  if (user && user.is_deactivate) {
    return res.status(401).json({ error: 'This account has been banned' });
  }

  if (!user || !(await user.validatePassword(password))) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  user.password = undefined;
  const token = generateToken({ email: email });
  const id = user._id;
  res.status(200).json({ id, token });
};

export const thirdPartyLogin = async (req: Request, res: Response) => {
  const { email, password, personal_question, personal_answer } = req.body;
  let user = await UserModel.findOne({ email }).exec();

  if (user && user.is_deactivate) {
    return res.status(401).json({ error: 'This account has been banned' });
  }

  if (!user) {
    user = new UserModel({
      email,
      password,
      personal_question,
      personal_answer,
    });

    await user.hashPassword();
    await user.save();
  }

  const id = user._id;
  const token = generateToken({ id: user._id, email: user.email });
  return res.status(201).json({ id, token });
};

export const subscribe = async (req: Request, res: Response) => {
  const { userid, businessid } = req.params;
  if (!userid || !businessid) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  try {
    const [user, targetUser] = await Promise.all([
      UserModel.findById(userid).exec(),
      UserModel.findById(businessid).exec(),
    ]);

    if (!user || !targetUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    targetUser.follower.addToSet(userid);
    user.following.addToSet(businessid);

    await Promise.all([targetUser.save(), user.save()]);

    return res.status(201).json({ message: 'Subscription successful' });
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred' });
  }
};

export const unsubscribe = async (req: Request, res: Response) => {
  const { userid, businessid } = req.params;

  if (!userid || !businessid) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  try {
    const [user, targetUser] = await Promise.all([
      UserModel.findById(userid).exec(),
      UserModel.findById(businessid).exec(),
    ]);

    if (!user || !targetUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    await Promise.all([
      UserModel.findByIdAndUpdate(userid, {
        $pull: { following: businessid },
      }),
      UserModel.findByIdAndUpdate(businessid, {
        $pull: { follower: userid },
      }),
    ]);

    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred' });
  }
};

export const uploadABN = async (req: Request, res: Response) => {
  const { _id }: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);
  const { abn } = req.body;
  const user = await UserModel.findByIdAndUpdate({ _id }, { abn }, { new: true }).exec();

  if (!user) {
    res.status(404).json({ message: 'User not found.' });
    return;
  }
  if (abn.length !== 11) {
    res.status(422).json({ message: 'ABN format error' });
    return;
  }

  const admins = ['647b79c7f844fa6f3b688ed1', '647b79f0f844fa6f3b688ed2'];
  const newNotification = new Notification({
    send_by: user._id,
    send_to: admins,
    category: 'other',
    title: 'ABN uploaded',
  });
  const ABNNotification = await newNotification.save();
  user.message.push(ABNNotification._id);
  await user.save();

  const adminUsers = await Admin.find({ _id: { $in: admins } }).exec();
  for (const adminUser of adminUsers) {
    adminUser.message.push(ABNNotification._id as mongoose.Types.ObjectId);
    await adminUser.save();
  }

  res.status(201).json({ message: 'ABN updated' });
};

export const updateInformation = async (req: Request, res: Response) => {
  const { _id, avatar, username, phone_number, password, personal_question, personal_answer } = req.body;

  let updateData = {};
  if (password !== '') {
    const hashedPassword = await bcrypt.hash(password, 10);
    updateData = {
      avatar: avatar,
      username: username,
      phone_number: phone_number,
      password: hashedPassword,
      personal_question: personal_question,
      personal_answer: personal_answer,
    };
  } else {
    updateData = {
      avatar: avatar,
      username: username,
      phone_number: phone_number,
      personal_question: personal_question,
      personal_answer: personal_answer,
    };
  }

  const user = await UserModel.findByIdAndUpdate({ _id }, updateData, { new: true }).exec();
  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }

  res.status(201).json({ message: 'Information updated' });
};

export const getCurrentUser = async (req: Request, res: Response) => {
  const { _id }: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);
  const user = await UserModel.findById(_id).exec();
  if (!user) {
    res.status(404).json({ message: 'User not found.' });
    return;
  }

  res.status(201).json(user);
};

export const getSubscriptionStatus = async (req: Request, res: Response) => {
  const { userid, businessid } = req.params;

  try {
    const [user, targetUser] = await Promise.all([
      UserModel.findById(userid).exec(),
      UserModel.findById(businessid).exec(),
    ]);

    if (!user || !targetUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isSubscribed = targetUser.follower.includes(userid);

    return res.status(200).json({ subscribed: isSubscribed });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An error occurred' });
  }
};
