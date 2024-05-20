import prisma from '@/prisma';

export const getEventService = async (id: number) => {
  try {
    const event = await prisma.event.findFirst({
      where: {
        id: id,
      },
      include: {
        user: true,
        reviews: true,
      },
    });
    if (!event) throw new Error(`Event with id ${id} not found`);
    return event;
  } catch (error) {
    throw error;
  }
};
