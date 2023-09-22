import { Router } from 'express';
import {
  index,
  getUser,
  deactivate,
  activate,
  login,
  thirdPartyLogin,
  subscribe,
  unsubscribe,
  signup,
  uploadABN,
  updateInformation,
  getCurrentUser,
  getSubscriptionStatus,
} from '../../controllers/users';
import userValidationLogin from '../../validators/adminValidation';
import { authGuard } from '../../middleware/authGuard';
import express from 'express';

const userRouter = Router();
userRouter.use(express.json());
userRouter.get('/users', authGuard, index);
userRouter.get('/users/:id', getUser);
userRouter.put('/users/:id/abn', authGuard, uploadABN);
userRouter.put('/users/deactivate/:id', authGuard, deactivate);
userRouter.put('/users/activate/:id', authGuard, activate);
userRouter.put('/users/update', authGuard, updateInformation);
userRouter.post('/users/login', userValidationLogin, login);
userRouter.post('/users/login/third-party', thirdPartyLogin);
userRouter.post('/users', userValidationLogin, signup);
userRouter.post('/users/:userid/subscribe/:businessid', authGuard, subscribe);
userRouter.delete('/users/:userid/unsubscribe/:businessid', unsubscribe);
userRouter.get('/users/:userid/getSubscriptionStatus/:businessid', getSubscriptionStatus);
userRouter.get('/users/me/:id', authGuard, getCurrentUser); //get single user

export default userRouter;
