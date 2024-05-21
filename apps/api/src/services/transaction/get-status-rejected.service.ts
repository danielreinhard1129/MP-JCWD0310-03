import prisma from '@/prisma';
import { PaginationQueryParams } from '@/types/pagination.type';

interface GetStatusQuery extends PaginationQueryParams {
  userId: number;
}

export const getStatusRejectedService = async (query: GetStatusQuery) => {
  try {
    const { page, sortBy, sortOrder, take, userId } = query;

    const whereClause = {
      status: {
        in: ['REJECTED', 'WAITING'],
      },
      event: {
        userId: userId,
      },
    };

    const statusList = await prisma.transaction.findMany({
      where: whereClause,
      skip: (page - 1) * take,
      take: take,
      orderBy: {
        [sortBy]: sortOrder,
      },
      include: {
        user: true,
        event: true,
      },
    });

    const count = await prisma.transaction.count({ where: whereClause });

    return {
      data: statusList,
      meta: { page, take, total: count },
    };
  } catch (error) {
    throw error;
  }
};
