import prisma from '@/prisma';
import { Prisma } from '@prisma/client';

export const updateStatusRejectedService = async (id: number) => {
  try {
    const whereClause: Prisma.TransactionWhereInput = {};
    const trans = await prisma.transaction.findFirst({
      where: {
        id,
      },
    });

    if (Number(trans?.point_used) > 0) {
      const point = await prisma.point.update({
        where: {
          id: trans?.userId,
        },
        data: {
          total: {
            increment: trans?.point_used,
          },
        },
      });
      return point;
    }

    const rejectStatus = await prisma.transaction.update({
      where: {
        id,
      },
      data: {
        status: 'REJECTED',
      },
    });
    return rejectStatus;
  } catch (error) {
    throw error;
  }
};
