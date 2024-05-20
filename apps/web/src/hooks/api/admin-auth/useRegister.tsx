"use client";
import { axiosInstance } from "@/lib/axios";
import { IUser } from "@/types/user.type";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

interface RegisterArgs extends Omit<IUser, "id"> {}

const useRegister = () => {
  const router = useRouter();
  const register = async (payload: RegisterArgs) => {
    try {
      await axiosInstance.post("/auth/admin/register", payload);
      router.push("/admin/login");
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.message);
      }
    }
  };

  return { register };
};

export default useRegister;
