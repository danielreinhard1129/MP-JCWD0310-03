import { TransactionController } from '@/controllers/transaction.controller';
import { Router } from 'express';

export class TransactionRouter {
  private router: Router;
  private transactionController: TransactionController;

  constructor() {
    this.transactionController = new TransactionController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '/',
      this.transactionController.createTransactionController,
    );
    this.router.put(
      '/reject/:id',
      this.transactionController.updateStatusRejectedController,
    );
    this.router.put(
      '/approve/:id',
      this.transactionController.updateStatusApprovedController,
    );
    this.router.get(
      '/organizer/:id',
      this.transactionController.getTransactionsController,
    );
    this.router.get(
      '/:id',
      this.transactionController.getTranscationByIdController,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
