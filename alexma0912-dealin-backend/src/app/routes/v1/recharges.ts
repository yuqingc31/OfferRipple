import express, { Router } from 'express';
import { index, setMaxRechargeAmount, calculateChargeAmount } from '../../controllers/recharges';
import { authGuard } from '../../middleware/authGuard';

const rechargesRouter = Router();
rechargesRouter.use(express.json());

// set the max recharge amount
rechargesRouter.get('/maxRecharge', express.json(), setMaxRechargeAmount);
// calculate the dcoin amount based on the payment amount
rechargesRouter.post('/calculateChargeAmount', express.json(), calculateChargeAmount);
//get all recharges
rechargesRouter.get('/recharges', authGuard, index);
// createRecharge is fired by stripe webhook

export default rechargesRouter;
