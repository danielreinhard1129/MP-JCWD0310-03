"use client";

import { axiosInstance } from "@/lib/axios";
import { IEvent } from "@/types/event.type";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

const useGetEvent = (id: number) => {
  const [data, setData] = useState<IEvent | null>(null);
  const [loading, setLoading] = useState(true);

  const getEvent = async () => {
    try {
      const { data } = await axiosInstance.get<IEvent>(`/events/${id}`);
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
    getEvent();
  }, []);

  return { event: data, refetch: getEvent, loading };
};

export default useGetEvent;
