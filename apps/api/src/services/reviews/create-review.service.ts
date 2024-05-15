import prisma from '@/prisma';
import { Review } from '@prisma/client';

interface ReviewBody extends Omit<Review, 'id' | 'createdAt' | 'updatedAt'> {}

export const createReviewService = async (body: ReviewBody) => {
  try {
    const { eventId, rating, review, userId } = body;
    const reviewUser = await prisma.review.create({
      data: {
        rating: Number(rating),
        eventId: Number(eventId),
        userId: Number(userId),
        review,
      },
    });
    return reviewUser;
  } catch (error) {
    throw error;
  }
};
