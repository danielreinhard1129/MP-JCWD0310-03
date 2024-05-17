import { createEventService } from '@/services/events/create-event.service';
import { getEventsServicePagination } from '@/services/events/get-event-pagination.service';
import { getEventService } from '@/services/events/get-event.service';
import { getEventsByOrgService } from '@/services/events/get-events-byOrg.service';
import { getEventsService } from '@/services/events/get-events.service';
import { NextFunction, Request, Response } from 'express';

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
      const result = await getEventsService();
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getEventController(req: Request, res: Response, next: NextFunction) {
    try {
      const id: number = Number(req.params.id);

      const result = await getEventService(id);

      return res.status(201).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getEventsByOrgController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const id: number = Number(req.params.id);

      const result = await getEventsByOrgService(id);

      return res.status(201).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getEventsPaginationController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const query = {
        take: parseInt(req.query.take as string) || 10,
        page: parseInt(req.query.page as string) || 1,
        sortBy: (req.query.sortBy as string) || 'createdAt',
        sortOrder: (req.query.sortOrder as string) || 'desc',
        search: (req.query.search as string) || '',
      };
      const result = await getEventsServicePagination(query);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
