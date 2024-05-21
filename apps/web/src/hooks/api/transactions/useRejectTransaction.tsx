import { axiosInstance } from "@/lib/axios";
import { AxiosError } from "axios";
import React from "react";

const useRejectTransaction = () => {
  const rejectTransaction = async (payload: any) => {
    try {
      await axiosInstance.post("/transactions/rejecting", payload);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  };
  return { rejectTransaction };
};

export default useRejectTransaction;
