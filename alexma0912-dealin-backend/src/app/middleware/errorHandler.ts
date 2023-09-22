import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log({ error: err.message });
  res.status(400).json({ error: err.message });
  next();
};
