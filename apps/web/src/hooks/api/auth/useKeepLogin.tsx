"use client";

import { axiosInstance } from "@/lib/axios";
import { loginAction } from "@/redux/slices/userSlice";
import { useDispatch } from "react-redux";

export interface User {
  id: number;
  username: string;
  email: string;
  refferal: string;
  role: string;
}

interface KeepLoginResponse {
  message: string;
  data: User;
}

const useKeepLogin = () => {
  const dispatch = useDispatch();
  const keepLogin = async () => {
    try {
      const { data } =
        await axiosInstance.get<KeepLoginResponse>("/auth/keep-login");
      dispatch(loginAction(data.data));
    } catch (error) {}
  };
  return { keepLogin };
};

export default useKeepLogin;
