import { createEventService } from '@/services/events/create-event.service';
import { createReviewService } from '@/services/reviews/create-review.service';
import { NextFunction, Request, Response } from 'express';

export class ReviewController {
  async createReviewController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await createReviewService(req.body);

      return res.status(201).send(result);
    } catch (error) {
      next(error);
    }
  }
}
