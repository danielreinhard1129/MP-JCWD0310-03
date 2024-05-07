import { NextFunction, Request, Response } from 'express';
import prisma from '@/prisma';
import { createEventsService } from '@/services/events/createEvent.service';

export class EventController {
    async createEvent(req: Request, res: Response, next:NextFunction) {
        try {
         const result = await createEventsService(req.body)
    
        return res.status(201).send(result);
        } catch (error) {
          next(error)
        }
        
      }
}