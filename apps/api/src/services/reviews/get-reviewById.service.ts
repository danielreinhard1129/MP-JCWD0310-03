import prisma from '@/prisma';

export const getReviewRatingByIdService = async (id: number) => {
  try {
    const reviewRating = await prisma.review.findFirst({
      where: { eventId: id },
      include: { event: true },
    });
    if (!reviewRating) {
      throw new Error('review rating not found');
    }
  } catch (error) {
    throw error;
  }
};
