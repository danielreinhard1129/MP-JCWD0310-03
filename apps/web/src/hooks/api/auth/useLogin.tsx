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
        "/auth/login",
        payload,
      );

      toast.success("Login success");
      dispatch(loginAction(data.data));
      localStorage.setItem("token", data.token);
      router.replace("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error("Login failed!");
        console.log(error?.response?.data); // alert bisa diganti toast
      }
    }
  };
  return { login };
};

export default useLogin;
