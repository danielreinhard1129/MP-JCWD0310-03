"use client";
import { axiosInstance } from "@/lib/axios";
import { IUser } from "@/types/user.type";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface RegisterArgs extends Omit<IUser, "id"> {}

const useRegister = () => {
  const router = useRouter();

  const register = async (payload: RegisterArgs) => {
    try {
      await axiosInstance.post("/auth/register", payload);
      toast.success("Register success");
      router.push("/login");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error("Register failed!");
      }
    }
  };

  return { register };
};

export default useRegister;
