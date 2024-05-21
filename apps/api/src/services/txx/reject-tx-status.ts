import prisma from '@/prisma';
import { Transaction } from '@prisma/client';

export const rejectTxStatusService = async (
  id: number,
  body: Pick<Transaction, 'status'>,
) => {
  try {
    const { status } = body;
    const tx = await prisma.transaction.findFirst({
      where: { id },
      include: { event: true, user: true },
    });

    if (!tx) throw new Error('tx not found!');

    const update = prisma.transaction.update({
      where: { id },
      data: { status },
    });

    if (Number(tx?.point_used > 0)) {
      const point = await prisma.point.updateMany({
        where: {
          userId: tx.userId,
        },
        data: {
          total: {
            increment: tx.point_used,
          },
        },
      });
      return point;
    }
    return update;
  } catch (error) {
    throw error;
  }
};
