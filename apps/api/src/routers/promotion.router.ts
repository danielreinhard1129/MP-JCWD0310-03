import { PromotionController } from '@/controllers/promotion.controller';
import { Router } from 'express';

export class PromotionRouter {
  private router: Router;
  private promotionController: PromotionController;

  constructor() {
    this.promotionController = new PromotionController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {

    this.router.post('/', this.promotionController.createPromotionController);
  }

  getRouter(): Router {
    return this.router;
  }
}
