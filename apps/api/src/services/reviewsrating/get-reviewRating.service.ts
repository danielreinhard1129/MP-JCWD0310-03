import prisma from '@/prisma';
import { Review } from '@prisma/client';

interface GetReviewRatingBody extends Omit<Review, 'id' | 'updatedAt'> {}

export const getReviewRatingService = async (body: GetReviewRatingBody) => {
  try {
    const { review, rating, createdAt, userId } = body;
    const user = await prisma.user.findFirst({
      where: { id: Number(userId) },
    });

    if (!userId) {
      throw new Error('user not found');
    }
    return await prisma.review.create({
      data: {
        ...body,
        rating: Number(rating),
        userId: Number(userId),
        createdAt: String(createdAt),
      },
    });
  } catch (error) {
    throw error
  }
};
