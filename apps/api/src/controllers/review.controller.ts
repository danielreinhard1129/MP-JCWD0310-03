import { createReviewRatingService } from '@/services/review/create-review.service';
import { getReviewRatings } from '@/services/review/get-reviews.service';
import { getReviewRatingById } from '@/services/review/get-reviewById.service';
import { NextFunction, Request, Response } from 'express';


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

async getReviewRatingController(
  req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await getReviewRatings();
      return res.status(200).send(result)
    } catch (error) {
      next(error);
    }
  }

}