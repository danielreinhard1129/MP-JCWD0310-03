import { Role as PrismaRole, Role } from '@prisma/client';

export interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
  refferal_code: string;
  reff?: string;
  role?: Role;
}
