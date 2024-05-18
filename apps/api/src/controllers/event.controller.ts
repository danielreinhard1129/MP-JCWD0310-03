import { createEventService } from '@/services/events/create-event.service';
import { getEventByCategoryService } from '@/services/events/get-eventByCategory';
import { getEventsService } from '@/services/events/get-events.service';
import { NextFunction, Request, Response } from 'express';
import { getEventByLocationService } from '@/services/events/get-eventByLocation';
import { updateEventService } from '@/services/events/update-event.service';
//import { deleteEventService } from '@/services/events/delete-event';


export class EventController {
  async createEventController(req: Request, res: Response, next: NextFunction) {
    try {
      const files = req.files as Express.Multer.File[];

      if (!files?.length) {
        throw new Error('no file uploaded');
      }

      const result = await createEventService(req.body, files[0]);

      return res.status(201).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getEventsController(req: Request, res: Response, next: NextFunction) {
    try {
      const query = {
        take: parseInt(req.query.take as string) || 10,
        page: parseInt(req.query.page as string) || 1,
        sortBy: (req.query.sortBy as string) || 'createdAt',
        sortOrder: (req.query.sortOrder as string) || 'desc',
        search: (req.query.search as string) || '',
      };
      const result = await getEventsService(query);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getEventByCategoryController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { category } = req.query;
      const result = await getEventByCategoryService(String(category));
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getEventByLocationController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { location } = req.query;
      const result = await getEventByLocationService(String(location));
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async updateEventService(req: Request, res: Response, next: NextFunction) {
    try {
      const files = req.files as Express.Multer.File[];
      const result = await updateEventService(
        Number(req.params.id),
        req.body,
        files[0],
      );
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  // async deleteEventService(req: Request, res: Response, next: NextFunction){
  //   try {
  //     const id = Number(req.params.id);
  //     const result = await deleteEventService(Number(req.params.id))
  //     res.status(200).send(result)
  //   } catch (error) {
  //     next(error)
  //   }
  //   }

  
}
