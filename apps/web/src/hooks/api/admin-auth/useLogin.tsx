"use client";
import { axiosInstance } from "@/lib/axios";
import { loginAction } from "@/redux/slices/userSlice";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export interface User {
  id: number;
  username: string;
  email: string;
  refferal: string;
  role: string;
}

interface LoginArgs
  extends Omit<User, "id" | "username" | "refferal" | "role"> {
  password: string;
}

interface LoginResponse {
  message: string;
  data: User;
  token: string;
}

const useLogin = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const login = async (payload: LoginArgs) => {
    try {
      const { data } = await axiosInstance.post<LoginResponse>(
        "/auth/admin/login",
        payload,
      );
      toast.success("login as admin success");
      dispatch(loginAction(data.data));
      localStorage.setItem("token", data.token);
      router.replace("/admin/dashboard");
    } catch (error) {
      if (error instanceof AxiosError) {
        // alert(error?.response?.data); // alert bisa diganti toast
        toast.error("login as admin error");
      }
    }
  };
  return { login };
};

export default useLogin;
