import prisma from '@/prisma';
import { Transaction } from '@prisma/client';

interface CreateTransactionBody
  extends Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'> {}

export const createTransactionService = async (body: CreateTransactionBody) => {
  try {
    const { qty, total_price, eventId, userId, point_used, approval_image } =
      body;
    const transaction = await prisma.$transaction(async (tx) => {
      const event = await tx.event.findFirst({
        where: {
          id: Number(eventId),
        },
      });
      console.log('event: ', event);
    });
    console.log('trans: ', transaction);
  } catch (error) {
    throw error;
  }
};
