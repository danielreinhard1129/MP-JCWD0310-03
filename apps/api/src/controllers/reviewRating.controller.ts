import { NextFunction, Request, Response } from 'express';
import { createReviewRatingService } from '@/services/reviewsrating/create-review-rating.service';
import { getReviewRatingService } from '@/services/reviewsrating/get-reviewRating.service';
import { getReviewRatingById } from '@/services/reviewsrating/get-reviewById.service';

export class ReviewRatingController {
  async createReviewRatingController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await createReviewRatingService(req.body);
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
      const result = await getReviewRatingService(req.body);
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
        const  id  = req.params.id
      const result = await getReviewRatingById(Number(id));
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

}
