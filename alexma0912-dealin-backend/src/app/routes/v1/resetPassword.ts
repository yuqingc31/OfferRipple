import express from 'express';
import { getUserByEmail, questionVerification, createNewPwd, updateCredentials } from '../../controllers/resetPassword';

const resetPasswordRouter = express.Router();
resetPasswordRouter.use(express.json());

//search user by username
resetPasswordRouter.get('/users/reset/:email', getUserByEmail);

//verify user by security question
resetPasswordRouter.post('/users/reset/verification', questionVerification);

//update password
resetPasswordRouter.put('/users/update-pwd', createNewPwd);

// update all modifiable user info
resetPasswordRouter.put('/users/update-credential', updateCredentials);

export default resetPasswordRouter;
