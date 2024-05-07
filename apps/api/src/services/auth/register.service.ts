import { hashPassword } from '@/lib/bcrypt';
import { generateRefferal } from '@/lib/generateRefferal';
import prisma from '@/prisma';
import { Role as PrismaRole } from '@prisma/client';

interface User {
  username: string;
  email: string;
  password: string;
  role: PrismaRole;
  reff?: string;
}

export const registerService = async (body: User) => {
  try {
    const { email, password, reff, username, role } = body;

    const existingUser = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (existingUser) throw new Error('Email or user has already exist!');

    const hashedPassword = await hashPassword(password);
    const { code } = generateRefferal();

    const newUser = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          ...body,
          password: hashedPassword,
          refferal_code: code,
          role: role,
        },
      });

      const refferalPoints = 10000;
      const defaultPoints = 0;

      if (reff) {
        const findRefferalOwner = await prisma.user.findFirst({
          where: {
            refferal_code: reff,
          },
        });
        console.log(findRefferalOwner);

        if (findRefferalOwner) {
          await tx.points.updateMany({
            where: {
              userId: findRefferalOwner.id,
            },
            data: {
              total: {
                increment: refferalPoints,
              },
            },
          });
        }
        const findPoints = await prisma.points.findFirst({
          where: {
            userId: findRefferalOwner?.id,
          },
        });
        console.log(findPoints);
      }

      await tx.points.create({
        data: {
          userId: user.id,
          total: defaultPoints,
          expiredAt: new Date(
            new Date().setFullYear(new Date().getFullYear() + 1),
          ),
        },
      });
    });

    return {
      message: 'Register success!',
      data: newUser,
    };
  } catch (error) {
    throw error;
  }
};
