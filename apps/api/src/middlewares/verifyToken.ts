import { NextFunction, Request, Response } from 'express';
// import { appConfig } from '../utils/config';
import { TokenExpiredError, verify } from 'jsonwebtoken';
import { IUser } from '@/types/user.type';
import { JWT_SECRET_KEY } from '@/config';

// const secretKey = appConfig.jwt!;
const secretKey = JWT_SECRET_KEY!;

interface PayloadToken extends Pick<IUser, 'id'> {}

declare global {
  namespace Express {
    interface Request {
      user: PayloadToken | null;
    }
  }
}

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send({ message: 'Token is missing' });
  verify(token, secretKey, (err, payload) => {
    if (err) {
      if (err instanceof TokenExpiredError) {
        return res.status(401).send({ message: 'token expired' });
      } else {
        return res.status(401).send({ message: 'invalid token' });
      }
    }
    req.user = payload as PayloadToken;
    next();
  });
};
