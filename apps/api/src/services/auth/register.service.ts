import { hashPassword } from '@/lib/bcrypt';
import prisma from '@/prisma';
import { User } from '@prisma/client';

export const registerService = async (
  body: Pick<User, 'username' | 'email' | 'password' | 'role'>,
) => {
  try {
    const { email, password } = body;

    const existingUser = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (existingUser) throw new Error('Email or user has already exist!');

    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
      data: { ...body, password: hashedPassword },
    });

    return {
      message: 'Register success!',
      data: newUser,
    };
  } catch (error) {
    throw error;
  }
};
