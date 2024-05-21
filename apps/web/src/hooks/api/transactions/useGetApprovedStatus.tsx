"use client";
import { axiosInstance } from "@/lib/axios";
import { useState, useEffect } from "react";
import { Transaction } from "@/types/transaction.type";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { ApiResponse } from "@/components/table/TableAdmin";

interface IGetApprovedStatusQuery {
  page: number;
  take: number;
  userId: number;
}

const useGetApprovedStatus = (query: IGetApprovedStatusQuery) => {
  const [data, setData] = useState<ApiResponse[]>([]);
  const [meta, setMeta] = useState<{
    page: number;
    take: number;
    total: number;
  } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getApprovedStatus = async () => {
    try {
      const response = await axiosInstance.get(
        `/transactions/status/approved/${query.userId}`,
        {
          params: query,
        },
      );
      setData(response.data.data);
      setMeta(response.data.meta);
      setIsLoading(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getApprovedStatus();
  }, [query]);

  return { data, meta, isLoading, getApprovedStatus };
};

export default useGetApprovedStatus;
