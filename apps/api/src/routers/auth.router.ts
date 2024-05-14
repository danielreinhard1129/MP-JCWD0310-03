import { AuthController } from '@/controllers/auth.controller';
import { verifyToken } from '@/lib/jwt';
import { Router } from 'express';

export class AuthRouter {
  private router: Router;
  private authController: AuthController;

  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/register', this.authController.registerController);
    this.router.post('/login', this.authController.loginController);
    this.router.get(
      '/keep-login',
      verifyToken,
      this.authController.keepLoginController,
    );
    this.router.get('/user-point', this.authController.getUserPointController);
  }

  getRouter(): Router {
    return this.router;
  }
}
