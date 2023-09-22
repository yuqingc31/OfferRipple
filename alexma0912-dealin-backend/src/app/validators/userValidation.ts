import { body } from 'express-validator';

const userValidationLogin = [
  body('email').notEmpty().withMessage('email is required'),
  body('password').notEmpty().withMessage('password is required'),
];

export default userValidationLogin;
