'use client';
import { axiosInsance } from '@/lib/axios';
import { IUser } from '@/types/user.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

enum Role {
  CUSTOMER,
  ORGANIZER,
}

interface RegisterArgs extends Omit<IUser, 'id'> {
  password: string;
  role: string;
}

const useRegister = () => {
  const router = useRouter();
  const register = async (payload: RegisterArgs) => {
    try {
      await axiosInsance.post('/auth/register', payload);

      router.push('/login');
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(JSON.stringify(error.response));
      }
    }
  };
  return { register };
};

export default useRegister;
