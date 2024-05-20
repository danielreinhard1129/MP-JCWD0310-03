import { getReviewRatings } from '@/services/reviews/get-reviews.service';
import { createReviewService } from '@/services/reviews/create-review.service';
import { getReviewRatingByIdService } from '@/services/reviews/get-reviewById.service';
import { NextFunction, Request, Response } from 'express';

export class ReviewRatingController {
  async createReviewRatingController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await createReviewService(req.body);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getReviewRatingByIdController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const id = req.params.id;
      const result = await getReviewRatingByIdService(Number(id));
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getReviewRatingController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const id = req.params.id;
      const result = await getReviewRatings(Number(id));
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
