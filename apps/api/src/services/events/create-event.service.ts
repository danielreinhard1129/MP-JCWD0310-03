import prisma from '@/prisma';
import { Event } from '@prisma/client';

interface CreateEventBody
  extends Omit<Event, 'id' | 'createdAt' | 'updatedAt'> {
  city: string;
}

export const createEventService = async (
  body: CreateEventBody,
  file: Express.Multer.File,
) => {
  try {
    const { title, userId, limit, booked } = body;

    const user = await prisma.user.findFirst({
      where: { id: Number(userId) },
    });

    if (!user) {
      throw new Error('user not found');
    }

    return await prisma.event.create({
      data: {
        ...body,
        thumbnail: `/images/${file.filename}`,
        limit: Number(limit),
        userId: Number(userId),
        booked: 0,
      },
    });
  } catch (error) {
    throw error;
  }
};
