"use client";

import { ApiResponse } from "@/components/table/TableAdmin";
import { axiosInstance } from "@/lib/axios";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

const useGetTransaction = (id: number) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const getTransactions = async () => {
    try {
      const { data } = await axiosInstance.get<ApiResponse>(
        `/transactions/organizer/${id}`,
      );
      setData(data);
      console.log(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        // TODO : replace console.log with toast
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getTransactions();
  }, []);

  return { transaction: data, refetch: getTransactions, loading };
};

export default useGetTransaction;
