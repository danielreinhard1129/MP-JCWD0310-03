"use client";

import { axiosInstance } from "@/lib/axios";
import { IEvent } from "@/types/event.type";
import { IPaginationMeta, IPaginationQueries } from "@/types/pagination.type";
import { useEffect, useState } from "react";

interface IGetEventQuery extends IPaginationQueries {
  search?: string;
}

const useGetEventsPagination = (queries: IGetEventQuery) => {
  const [data, setData] = useState<IEvent[]>([]);
  const [meta, setMeta] = useState<IPaginationMeta | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getEvents = async () => {
    try {
      const { data } = await axiosInstance.get("/events/page", {
        params: queries,
      });

      console.log(data);

      setData(data.data);
      setMeta(data.meta);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getEvents();
  }, [queries?.page, queries?.search]);

  return { data, meta, isLoading };
};

export default useGetEventsPagination;
