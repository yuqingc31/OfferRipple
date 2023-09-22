import express, { Request, Response, NextFunction } from 'express';
// middleware for stripe webhook
export const stripeWebhookMiddleware = (req: Request, res: Response, next: NextFunction) => {
  express.raw({ type: 'application/json' })(req, res, (err) => {
    if (err) {
      return next(err);
    }
    express.json()(req, res, next);
  });
};
