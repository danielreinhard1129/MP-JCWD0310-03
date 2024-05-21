import prisma from '@/prisma';
import { Transaction } from '@prisma/client';

export const acceptTransactionService = async (
  body: Pick<Transaction, 'id'>,
): Promise<Transaction> => {
  try {
    const { id } = body;

    //add referred
    // const existingTrasaction = await prisma.transaction.findFirst({
    //   where: { id: Number(id) },
    //   select: { status: true },
    // });

    return await prisma.transaction.update({
      where: { id: Number(id) },
      data: { status: 'APPROVED' },
    });
  } catch (error) {
    throw error;
  }
};
