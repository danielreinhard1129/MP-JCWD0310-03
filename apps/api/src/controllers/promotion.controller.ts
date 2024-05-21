import { createPromotionService } from '@/services/events/create-promotion.service';
import { NextFunction, Request, Response } from 'express';

export class PromotionController{
    async createPromotionController(
        req: Request,
        res: Response,
        next: NextFunction,
      ) {
        try {
      
          const result = await createPromotionService(req.body);
    
          return res.status(200).send(result);
        } catch (error) {
          next(error);
        }
      }
}