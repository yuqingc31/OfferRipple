import { Router } from 'express';
import { index, login, createNewAdmin, getCurrentAdmin } from '../../controllers/admin';
import adminValidationLogin from '../../validators/adminValidation';
import { adminAuthGuard } from '../../middleware/authGuard';
import express from 'express';

const adminRouter = Router();
adminRouter.use(express.json());
adminRouter.get('/admin', adminAuthGuard, index);
adminRouter.post('/admin/login', adminValidationLogin, login);
adminRouter.post('/admin/signup', adminValidationLogin, createNewAdmin);
adminRouter.get('/admin/:id', adminAuthGuard, getCurrentAdmin);

export default adminRouter;
