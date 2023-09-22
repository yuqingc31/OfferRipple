import jwt, { JwtPayload } from 'jsonwebtoken';

const JWT_KEY = process.env.JWT_KEY || 'dealin';

export const generateToken = (payload: object) => {
  return jwt.sign(payload, JWT_KEY, { expiresIn: '1d' });
};

export const validateToken = (token: string) => {
  return jwt.verify(token, JWT_KEY);
};

export const validateTokenRole = (token: string) => {
  jwt.verify(token, JWT_KEY, (err, decoded) => {
    if (err) {
      console.log('Token verification failed:', err.message);
      return false;
    } else {
      console.log('Decoded token payload:', decoded);
      console.log(decoded);
      if ((decoded as any).role !== undefined && (decoded as any).role === 'admin') {
        return true;
      }
      return false;
    }
  });
};
