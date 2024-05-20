import prisma from '@/prisma';

export const getReviewRatings = async (id: number) => {
  try {
    const reviews = await prisma.review.findMany({
      where: {
        eventId: id,
      },
      include: {
        event: true,
        user: true,
      },
    });
    return reviews;
  } catch (error) {
    throw error;
  }
};
