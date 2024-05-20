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
      await axiosInstance.post("/auth/admin/register", payload);
      toast.success("Register as admin success");
      router.push("/admin/login");
    } catch (error) {
      if (error instanceof AxiosError) {
        // alert(error.message);
        toast.error("Register as admin error");
      }
    }
  };

  return { register };
};

export default useRegister;
