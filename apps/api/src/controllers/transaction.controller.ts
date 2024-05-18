import { createTransactionService } from "@/services/transaction/create-transaction.service";
import { NextFunction, Request, Response } from "express";

export class TransactionController {
    async createTransaction(req: Request, res: Response, next: NextFunction) {
        try {
            // const files = req.files as Express.Multer.File[];
            const result = await createTransactionService(req.body);
            res.status(200).send(result)
        } catch (error) {
            next (error)
        }
    }

}