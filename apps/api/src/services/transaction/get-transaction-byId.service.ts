import prisma from '@/prisma';

export const getTransactionByIdService = async (id: number) => {
  try {
    const event = await prisma.transaction.findUnique({
      where: {
        id: id,
      },
    });
    return event;
  } catch (error) {
    throw error;
  }
};
