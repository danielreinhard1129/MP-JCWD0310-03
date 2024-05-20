import prisma from '@/prisma';
import { Review } from '@prisma/client';

interface CreateReviewRatingBody extends Omit<Review, 'id' | 'updatedAt'> {}

export const createReviewService = async (body: CreateReviewRatingBody) => {
  try {
    const { review, rating, userId, eventId } = body;

    return await prisma.review.create({
      data: {
        ...body,
        rating: Number(rating),
        userId: Number(userId),
        eventId: Number(eventId),
      },
    });
  } catch (error) {
    throw error;
  }
};