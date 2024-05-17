import prisma from '@/prisma';

export const getEventsService = async () => {
  try {
    const events = await prisma.event.findMany();
    return {
      message: 'get events success',
      events,
    };
  } catch (error) {
    throw error;
  }
};
