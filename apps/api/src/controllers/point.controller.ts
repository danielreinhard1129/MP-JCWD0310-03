import { getUserPoint } from '@/services/point/get-user-point.service';
import { NextFunction, Request, Response } from 'express';

export class PointController {
  async getPointUserController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const id = req.params.id;
      const result = await getUserPoint(Number(id));
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
