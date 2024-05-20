import { axiosInstance } from "@/lib/axios";
import React from "react";

const useGetPoint = () => {
  const getUserPoint = async () => {
    try {
      const {} = await axiosInstance.get("/");
    } catch (error) {}
  };
  return <div>useGetPoint</div>;
};

export default useGetPoint;
