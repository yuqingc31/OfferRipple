import { Router } from 'express';
import { authGuard } from '../../middleware/authGuard';
import { approve, decline, getAllNotification } from '../../controllers/notifications';
import express from 'express';

const notificationRouter = Router();
notificationRouter.use(express.json());
notificationRouter.put('/users/:id/approve', authGuard, approve);
notificationRouter.put('/users/:id/decline', authGuard, decline);
notificationRouter.get('/notifications', authGuard, getAllNotification);

export default notificationRouter;
