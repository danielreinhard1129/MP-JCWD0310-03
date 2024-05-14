import { getUserPointService } from '@/services/auth/get-user-point.service';
import { keepLoginService } from '@/services/auth/keep-login.service';
import { loginService } from '@/services/auth/login.service';
import { registerService } from '@/services/auth/register.service';
import { NextFunction, Request, Response } from 'express';

export class AuthController {
  async registerController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await registerService(req.body);

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getUserPointController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await getUserPointService();

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async loginController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await loginService(req.body);

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async keepLoginController(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.body.user.id);

      const result = await keepLoginService(userId);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
