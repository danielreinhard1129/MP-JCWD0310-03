import { NextFunction, Request, Response } from 'express';
import prisma from '@/prisma';
import { createEventsService } from '@/services/events/createEvent.service';

export class SampleController {
  async getSampleData(req: Request, res: Response) {
    const sampleData = await prisma.sample.findMany();

    return res.status(200).send(sampleData);
  }

  async getSampleDataById(req: Request, res: Response) {
    const { id } = req.params;

    const sample = await prisma.sample.findUnique({
      where: { id: Number(id) },
    });

    if (!sample) {
      return res.send(404);
    }

    return res.status(200).send(sample);
  }

  async createSampleEvent(req: Request, res: Response, next:NextFunction) {
    try {
     const result = await createEventsService(req.body)

    return res.status(201).send(result);
    } catch (error) {
      next(error)
    }
    
  }
}
