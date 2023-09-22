import { Router } from 'express';
import geoLocation from '../../controllers/geoLocation';
import express from 'express';

const geoLocationRouter = Router();
geoLocationRouter.use(express.json());
geoLocationRouter.get('/geoLocation', geoLocation);

export default geoLocationRouter;
