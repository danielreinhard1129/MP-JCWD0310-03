import { acceptTransactionService } from '@/services/transaction/accept-transaction.service';
import { createTransactionService } from '@/services/transaction/create-transaction.service';
import { getTransactionByIdService } from '@/services/transaction/get-transaction-byId.service';
import { getTransactionsService } from '@/services/transaction/get-transactions.service';
import { updateStatusApprovedService } from '@/services/transaction/update-status-approved.service';
import { updateStatusRejectedService } from '@/services/transaction/update-status-rejected.service';
import { TransType } from '@/types/trans.type';
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

  async getAcceptController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await acceptTransactionService(req.body);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getTransactionssController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const query = {
        id: parseInt(req.query.id as string),
        take: parseInt(req.query.take as string) || 8,
        page: parseInt(req.query.page as string) || 1,
        sortBy: parseInt(req.query.sortBy as string) || 'createdAt',
        sortOrder: parseInt(req.query.sortOrder as string) || 'desc',
        search: req.query.search as string,
        status: req.query.status as TransType,
      };
      const result = await getTransactionsService(Number(query));

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
