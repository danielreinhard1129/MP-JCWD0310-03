import prisma from '@/prisma';
import { PaginationQueryParams } from '@/types/pagination.type';

interface GetAttendeeListQuery extends PaginationQueryParams {
  userId: number;
}

export const getAttendeeListService = async (query: GetAttendeeListQuery) => {
  try {
    const { page, sortBy, sortOrder, take, userId } = query;

    const whereClause = {
      userId: userId,
    };

    const attendeeLists = await prisma.eventParticipant.findMany({
      where: whereClause,
      skip: (page - 1) * take,
      take: take,
      orderBy: {
        [sortBy]: sortOrder,
      },
      select: {
        user: true,
        event: true,
        transactions: {
          where: {
            status: 'APPROVED',
          },
          select: {
            status: true,
            total_price: true,
          },
        },
      },
    });

    const count = await prisma.eventParticipant.count({ where: whereClause });

    return {
      data: attendeeLists,
      meta: { page, take, total: count },
    };
  } catch (error) {
    throw error;
  }
};
