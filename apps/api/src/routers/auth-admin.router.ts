import { AuthAdminController } from '@/controllers/auth-admin.controller';
import { AuthController } from '@/controllers/auth.controller';
import { verifyToken } from '@/lib/jwt';
import { Router } from 'express';

export class AuthAdminRouter {
  private router: Router;
  private authAdminController: AuthAdminController;

  constructor() {
    this.authAdminController = new AuthAdminController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '/register',
      this.authAdminController.registerAdminController,
    );
    this.router.post('/login', this.authAdminController.loginAdminController);
    // this.router.get(
    //   '/keep-login',
    //   verifyToken,
    //   this.authController.keepLoginController,
    // );
  }

  getRouter(): Router {
    return this.router;
  }
}
