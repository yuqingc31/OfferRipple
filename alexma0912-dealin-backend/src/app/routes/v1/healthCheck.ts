import { Router } from 'express';
import { healthCheck } from '../../controllers/healthCheck';
import express from 'express';

const healthCheckRouter = Router();
healthCheckRouter.use(express.json());
healthCheckRouter.get('/health_check', healthCheck);

export default healthCheckRouter;
