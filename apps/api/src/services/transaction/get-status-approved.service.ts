// import prisma from '@/prisma';
// import { PaginationQueryParams } from '@/types/pagination.type';

// interface GetAttendeeListQuery extends PaginationQueryParams {
//   eventId: number;
// }

// export const getStatusApprovedService = async (id: number) => {
//   try {
//     const approvedStatus = await prisma.transaction.findMany({
//       where: {
//         status: 'APPROVED',
//         event: {
//           userId: id,
//         },
//       },
//       include: {
//         user: true,
//         event: true,
//       },
//     });
//     return approvedStatus;
//   } catch (error) {
//     throw error;
//   }
// };
import prisma from '@/prisma';
import { PaginationQueryParams } from '@/types/pagination.type';

interface GetStatusApprovedQuery extends PaginationQueryParams {
  userId: number;
}

export const getStatusApprovedService = async (
  query: GetStatusApprovedQuery,
) => {
  try {
    const { page, sortBy, sortOrder, take, userId } = query;

    const whereClause = {
      status: 'APPROVED',
      event: {
        userId: userId,
      },
    };

    const approvedStatus = await prisma.transaction.findMany({
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
      data: approvedStatus,
      meta: { page, take, total: count },
    };
  } catch (error) {
    throw error;
  }
};
