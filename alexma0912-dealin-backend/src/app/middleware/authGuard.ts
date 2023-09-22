import { NextFunction, Request, Response } from 'express';
import { validateToken, validateTokenRole } from '../utils/jwt';

export const authGuard = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.header('Authorization');
  if (!authorization) {
    return res.status(401).json({ error: 'missing authorization header' });
  }
  const tokenArray = authorization.split(' ');
  if (tokenArray.length !== 2 || tokenArray[0] !== 'Bearer') {
    return res.status(401).json({ error: 'invalid authorization header format' });
  }
  req.user = validateToken(tokenArray[1]);
  next();
};

export const adminAuthGuard = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.header('Authorization');
  if (!authorization) {
    return res.status(401).json({ error: 'missing authorization header' });
  }
  const tokenArray = authorization.split(' ');
  if (tokenArray.length !== 2 || tokenArray[0] !== 'Bearer') {
    return res.status(401).json({ error: 'invalid authorization header format' });
  }
  req.user = validateTokenRole(tokenArray[1]);
  next();
};
