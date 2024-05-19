import prisma from '@/prisma';
import { Transaction } from '@prisma/client';

interface CreateTransactionBody
  extends Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'> {}

export const createTransactionService = async (body: CreateTransactionBody) => {
  const { eventId, userId, qty, status, point_used, approval_image } = body;
  try {
    const transaction = await prisma.$transaction(async (tx) => {
      const user = await tx.user.findFirst({
        where: {
          id: userId,
        },
      });

      if (!user) throw new Error('User not found!');

      console.log('userlog: ', user);

      const event = await tx.event.findFirst({
        where: {
          id: eventId,
        },
      });

      if (!event) throw new Error('Event not found!');

      console.log('eventlog:', event);

      let eventPrice = Number(event?.price) * qty;

      console.log('eventpricelog: ', eventPrice);

      let disc = 0;

      // point business
      if (point_used > 0) {
        const point = await tx.point.findFirst({
          where: {
            userId: userId,
            expiredAt: {
              gte: new Date(),
            },
          },
        });

        if (!point) throw new Error('Point not found!');

        if (point_used > point.total)
          throw new Error('Your point is not enough.');

        disc += point_used;

        await tx.point.update({
          where: {
            id: point.id,
          },
          data: {
            total: {
              decrement: point_used,
            },
          },
        });
      }
      // end point business
      const reward = await tx.reward.findFirst({
        where: {
          userId,
          isUsed: false,
          expiredAt: {
            gte: new Date(),
          },
        },
      });

      if (reward) {
        const rewardPoint = (eventPrice - disc) * Number(reward.discount_rate);
        console.log('REWARD', rewardPoint);
        disc += rewardPoint;
        await tx.reward.update({
          where: {
            id: reward.id,
          },
          data: {
            isUsed: true,
          },
        });
      }

      const final = eventPrice - disc;
      console.log('finalpricelog: ', final);

      const newTransaction = await tx.transaction.create({
        data: {
          eventId,
          userId,
          point_used,
          approval_image,
          status: 'PENDING',
          qty,
          total_price: final,
        },
      });

      await tx.event.update({
        where: {
          id: eventId,
        },
        data: {
          booked: {
            increment: qty,
          },
          limit: {
            decrement: qty,
          },
        },
      });
      console.log('booked', event.booked);

      await tx.eventParticipant.create({
        data: {
          eventId,
          userId,
        },
      });
      return newTransaction;
    });
    console.log(transaction);
  } catch (error) {
    throw error;
  }
};

// const { qty, total_price, eventId, userId, point_used, approval_image } =
//   body;
// const transaction = await prisma.$transaction(async (tx) => {
//   const event = await tx.event.findFirst({
//     where: {
//       id: Number(eventId),
//     },
//   });
//   console.log('event: ', event);

//   let price = Number(event?.price) * qty;
//   console.log('price: ', price);

//   if (point_used) {
//     const point = await tx.point.findFirst({
//       where: {
//         userId,
//       },
//       include: {
//         user: true,
//       },
//     });
//     console.log('point', point);
//   }

//   return event;
// });
// return transaction;
// console.log('trans: ', transaction);
// const transaction = await prisma.transaction.create({
//   data: {
//     ...body,
//     status: 'PENDING',
//   },
// });
