import { getUserPoint } from '@/services/point/get-user-point.service';
import { rejectTxStatusService } from '@/services/txx/reject-tx-status';
import { updateTxStatusService } from '@/services/txx/update-tx-status';
import { NextFunction, Request, Response } from 'express';

export class TxController {
  async updateTransactionStatus(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const id = req.params.id;
      const result = await updateTxStatusService(Number(id), req.body);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async rejectTransactionStatus(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const id = req.params.id;
      const result = await rejectTxStatusService(Number(id), req.body);
    } catch (error) {
      throw error;
    }
  }
}
