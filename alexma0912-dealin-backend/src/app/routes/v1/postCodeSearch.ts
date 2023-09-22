import { Router } from 'express';
import { postCodeSearchController } from '../../controllers/postCodeSearchController';
import express from 'express';

const postCodeSearchRouter = Router();
postCodeSearchRouter.use(express.json());
postCodeSearchRouter.get('/postcode-search', postCodeSearchController);

export default postCodeSearchRouter;
