import prisma from "@/prisma";
import { Review } from "@prisma/client";

interface CreateReviewRatingBody extends
 Omit<Review, 'id' | 'createdAt' | 'updatedAt'> {}

export const createReviewRatingService = async (
    body: CreateReviewRatingBody
) => {
   try {
    const { review, rating, userId, eventId } = body;

      const event = await prisma.event.findFirst({
        where: {id: Number(eventId)}, 
        include: {user: true}
      });

      if (!event) { 
        throw new Error("event not found");
      }

    return await prisma.review.create({
        data: {
            ...body,
            rating: Number(rating),
            userId: Number(userId),
            eventId: Number(eventId)
        }
    })
   } catch (error) {
    throw new Error
   }
}