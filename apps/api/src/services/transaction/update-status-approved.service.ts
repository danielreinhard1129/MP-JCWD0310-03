import prisma from '@/prisma';

export const updateStatusApprovedService = async (id: number) => {
  try {
    const approvedStatus = await prisma.transaction.update({
      where: {
        id,
      },
      data: {
        status: 'APPROVED',
      },
    });
    return approvedStatus;
  } catch (error) {
    throw error;
  }
};
