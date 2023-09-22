import UserModel from '../models/user';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

export const getUserByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const user = await UserModel.findOne({ email }).exec();
    if (!user) {
      return res.status(404).send({
        message: 'email not found',
      });
    }
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return;
  }
};

export const questionVerification = async (req: Request, res: Response) => {
  try {
    const { email, security_answer } = req.body;

    const user = await UserModel.findOne({ email }).exec();
    if (!user || user.personal_answer.toLowerCase() !== security_answer.toLowerCase()) {
      return res.status(401).send({
        message: 'Answer was incorrect',
      });
    }

    return res.status(201).send({
      message: 'Correct answer',
    });
  } catch (error) {
    console.log(error);
  }
};

export const createNewPwd = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const newPassword = req.body.password;
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await UserModel.findOneAndUpdate({ email }, { password: hashedPassword }, { new: true }).exec();
    res.status(201).json({ message: 'Password updated' });
  } catch (error) {
    res.status(404).json({ error: 'Failed to update password' });
    return;
  }
};

export const updateCredentials = async (req: Request, res: Response) => {
  const email = req.body.email;
  const data = {
    password: req.body.password,
    security_question: req.body.security_question,
    security_answer: req.body.security_answer,
  };
  const user = { username: req.body.username, password: req.body.password, phone_number: req.body.phone_number };
  try {
    await UserModel.findOneAndUpdate({ email }, user, { new: true }).exec();
    res.status(201).json({ message: 'Successfully updated' });
  } catch (error) {
    res.status(404).json({ error: 'Failed to update credentials' });
  }
};
