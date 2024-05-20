import prisma from '@/prisma';

export const getUserPoint = async (id: number) => {
  try {
    const userPoint = await prisma.point.findMany({
      where: {
        userId: id,
      },
    });
    if (!userPoint) throw new Error('User has no point!');

    return userPoint;
  } catch (error) {
    throw error;
  }
};
