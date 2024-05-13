import prisma from '@/prisma';

export const getUserPointService = async () => {
  try {
    const refferalCode = 'IOJ';
    const userPoint = await prisma.user.findFirst({
      where: {
        refferal: refferalCode,
      },
      include: {
        points: true,
      },
    });

    if (!userPoint) {
      console.log(`No user found with refferal code ${refferalCode}`);
      return { message: 'User not found', data: null };
    }

    console.log(`User found with referral code ${refferalCode}:`, userPoint);

    if (userPoint.points.length === 0) {
      console.log(`No points found for user with ID ${userPoint.id}`);
    } else {
      console.log(
        `Points found for user with ID ${userPoint.id}:`,
        userPoint.points,
      );
    }

    return {
      message: 'get user point success',
      data: userPoint,
    };
  } catch (error) {
    throw error;
  }
};
