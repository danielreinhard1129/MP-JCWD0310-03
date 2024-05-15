import { hashPassword } from '@/lib/bcrypt';
import { generateRefferalCode } from '@/lib/generateRefferalCode';
import prisma from '@/prisma';
import { IUser } from '@/types/user.type';

interface IRegister
  extends Pick<
    IUser,
    'username' | 'email' | 'password' | 'role' | 'refferal_code'
  > {
  reff?: string;
}

export const registerAdminService = async (body: IRegister) => {
  try {
    const { username, email, password, role } = body;

    if (!username || !email || !password) throw new Error('Fields required!');

    const userExist = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userExist) throw new Error('Email or user already exist!');

    const hashedPassword = await hashPassword(password);
    const { code } = generateRefferalCode();

    const newAdmin = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        refferal: code,
        role: 'ORGANIZER',
      },
    });

    return {
      message: 'register success',
      data: newAdmin,
    };
  } catch (error) {
    throw error;
  }
};
