import { Request, Response } from 'express';
import RechargeModel from '../models/recharge';

const MAX_RECHARGE_AMOUNT = 20000;
export const setMaxRechargeAmount = async (req: Request, res: Response) => {
  res.status(200).json({ max_recharge_amount: MAX_RECHARGE_AMOUNT });
};

export const calculateChargeAmount = async (req: Request, res: Response) => {
  const { coin_amount } = req.body;
  const payment_amount = coin_amount * 1;
  res.status(200).json({ payment_amount: payment_amount });
};

export const index = async (req: Request, res: Response) => {
  const recharges = await RechargeModel.find().populate('buyer').exec();
  const sortedRecharges = recharges.reverse();
  if (recharges.length === 0) {
    res.status(404).json({ error: 'No recharges records' });
    return;
  }
  if (Object.keys(req.query).length === 0) {
    res.json(sortedRecharges);
    res.status(200);
    return;
  }
  if (req.query && req.query.search === '') {
    const totalPages = Math.ceil(sortedRecharges.length / 10);
    const pageNumber = Number(req.query.page);
    const pageStatIndex = pageNumber * 10 - 10;
    const pageEndIndex = pageNumber * 10;
    const slicedRecharges = sortedRecharges.slice(pageStatIndex, pageEndIndex);
    res.status(201).json({ slicedRecharges, totalPages });
    return;
  }
  if (req.query && req.query.search !== '') {
    const searchKey = req.query.search as string;
    const escapedSearchKey = searchKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedSearchKey, 'i');
    const searchRecharges = await RechargeModel.find()
      .populate({ path: 'buyer', match: { email: regex } })
      .exec();
    const sortedSearchRecharges = searchRecharges.reverse();
    const filteredRecharges = sortedSearchRecharges.filter((recharge) => recharge.buyer !== null);
    const totalPages = Math.ceil(filteredRecharges.length / 10);
    const pageNumber = Number(req.query.page);
    const pageStatIndex = pageNumber * 10 - 10;
    const pageEndIndex = pageNumber * 10;
    const slicedRecharges = filteredRecharges.slice(pageStatIndex, pageEndIndex);
    res.status(201).json({ slicedRecharges: slicedRecharges, totalPages: totalPages });
    return;
  }
};
