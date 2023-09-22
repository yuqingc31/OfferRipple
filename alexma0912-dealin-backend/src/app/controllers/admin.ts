import { Request, Response } from 'express';
import AdminModel from '../models/admin';
import { validationResult } from 'express-validator';
import { generateToken } from '../utils/jwt';
import mongoose from 'mongoose';

export const index = async (req: Request, res: Response) => {
  const admin = await AdminModel.find().exec();
  res.json(admin);
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email) {
    res.status(401).json({ error: 'Invalid email' });
    return;
  }
  if (!password) {
    res.status(401).json({ error: 'Invalid password' });
    return;
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422).json({ errors: errors });
    return;
  }

  const admin = await AdminModel.findOne({ email }).select('+password').exec();

  if (!admin || !(await admin.validatePassword(password))) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  admin.password = undefined;

  const token = generateToken({ email: email, role: 'admin' });
  const id = admin._id;
  res.status(200).json({ id, token });
};

export const createNewAdmin = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const existingAdmin = await AdminModel.findOne({ email }).exec();
  if (existingAdmin) {
    return res.status(409).json({ error: 'email already exists' });
  }

  const newAdmin = new AdminModel({ name, email, password });

  await newAdmin.hashPassword();

  await newAdmin.save();

  const id = newAdmin._id;
  const token = generateToken({ id: newAdmin._id, email: newAdmin.email });
  res.status(201).json({ id, token });
};

export const getCurrentAdmin = async (req: Request, res: Response) => {
  const { _id }: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);
  const user = await AdminModel.findById(_id).exec();
  if (!user) {
    res.status(404).json({ message: 'Admin not found.' });
    return;
  }

  const { name } = user;

  res.status(201).json(name);
};
