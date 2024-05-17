import prisma from '@/prisma';

export const getEventsByOrgService = async (id: number) => {
  try {
    const events = await prisma.event.findMany({
      where: {
        userId: id,
      },
      include: {
        user: true,
      },
    });
    return {
      message: 'get events success',
      events,
    };
  } catch (error) {
    throw error;
  }
};
