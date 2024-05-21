import { ReviewRatingController } from '@/controllers/review.controller';
import { Router } from 'express';

export class ReviewRatingRouter {
  private router: Router;
  private reviewRatingController: ReviewRatingController;

  constructor() {
    this.reviewRatingController = new ReviewRatingController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '/',
      this.reviewRatingController.createReviewRatingController,
    );
    this.router.get(
      '/',
      this.reviewRatingController.getReviewRatingController,
    );
    this.router.get(
      '/:id',
      this.reviewRatingController.getReviewRatingByIdController,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
