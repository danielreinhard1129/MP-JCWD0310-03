import { createTransactionService } from '@/services/transaction/create-transaction.service';
import { getTransactionByIdService } from '@/services/transaction/get-transaction-byId.service';
import { getTransactionsService } from '@/services/transaction/get-transactions.service';
import { updateStatusApprovedService } from '@/services/transaction/update-status-approved.service';
import { updateStatusRejectedService } from '@/services/transaction/update-status-rejected.service';
import { NextFunction, Request, Response } from 'express';

export class TransactionController {
  async createTransactionController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await createTransactionService(req.body);

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getTransactionsController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = req.params;
      const result = await getTransactionsService(Number(id));

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getTranscationByIdController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = req.params;
      const result = await getTransactionByIdService(Number(id));

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async updateStatusRejectedController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = req.params;

      const result = await updateStatusRejectedService(Number(id));

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async updateStatusApprovedController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = req.params;

      const result = await updateStatusApprovedService(Number(id));

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
