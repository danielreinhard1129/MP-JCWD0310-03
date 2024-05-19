import prisma from '@/prisma';

export const getTransactionsService = async (id: number) => {
  try {
    const event = await prisma.transaction.findMany({
      where: {
        event: {
          userId: id,
        },
      },
      include: {
        user: true,
        event: true,
      },
    });
    return event;
  } catch (error) {
    throw error;
  }
};
