import { PointController } from '@/controllers/point.controller';
import { Router } from 'express';

export class PointRouter {
  private router: Router;
  private pointController: PointController;

  constructor() {
    this.pointController = new PointController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/:id', this.pointController.getPointUserController);
  }

  getRouter(): Router {
    return this.router;
  }
}
