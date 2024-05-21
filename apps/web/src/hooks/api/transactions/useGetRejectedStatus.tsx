"use client";
import { axiosInstance } from "@/lib/axios";
import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { ApiResponse } from "@/components/table/TableAdmin";

interface IGetStatusQuery {
  page: number;
  take: number;
  userId: number;
}

const useGetRejectedStatus = (query: IGetStatusQuery) => {
  const [data, setData] = useState<ApiResponse[]>([]);
  const [meta, setMeta] = useState<{
    page: number;
    take: number;
    total: number;
  } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getStatus = async () => {
    try {
      const response = await axiosInstance.get(
        `/transactions/status/rejected/${4}`,
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
    getStatus();
  }, [query]);

  return { data, meta, isLoading, getStatus };
};

export default useGetRejectedStatus;
