import { PointController } from '@/controllers/point.controller';
import { TxController } from '@/controllers/txx.controller';
import { Router } from 'express';

export class TxRouter {
  private router: Router;
  private txController: TxController;

  constructor() {
    this.txController = new TxController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.patch('/:id/status', this.txController.updateTransactionStatus);
  }

  getRouter(): Router {
    return this.router;
  }
}
