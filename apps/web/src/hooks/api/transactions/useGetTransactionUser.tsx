"use client";

import { axiosInstance } from "@/lib/axios";
import { Transaction } from "@/types/transaction.type";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

const useGetTransactionUser = (id: number) => {
  const [data, setData] = useState<Transaction | null>(null);
  const [loading, setLoading] = useState(true);

  const getTransaction = async () => {
    try {
      const { data } = await axiosInstance.get<Transaction>(`/transactions/${id}`);
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
    getTransaction();
  }, []);

  return { event: data, refetch: getTransaction, loading };
};

export default useGetTransactionUser;
