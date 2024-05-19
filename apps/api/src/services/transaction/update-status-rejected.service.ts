import prisma from '@/prisma';

export const updateStatusRejectedService = async (id: number) => {
  try {
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
