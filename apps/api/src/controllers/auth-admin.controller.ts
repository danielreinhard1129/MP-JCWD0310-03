import { loginAdminService } from '@/services/auth/admin/login-admin.service';
import { registerAdminService } from '@/services/auth/admin/register-admin.service';
import { getUserPointService } from '@/services/auth/get-user-point.service';
import { keepLoginService } from '@/services/auth/keep-login.service';
import { loginService } from '@/services/auth/login.service';
import { NextFunction, Request, Response } from 'express';

export class AuthAdminController {
  async registerAdminController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await registerAdminService(req.body);

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

  async loginAdminController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await loginAdminService(req.body);

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
