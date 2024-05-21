"use client";

import { axiosInstance } from "@/lib/axios";
import { IPaginationMeta, IPaginationQueries } from "@/types/pagination.type";
import { IEventParticipant } from "@/types/transaction.type";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface IGetAttendeeQuery extends IPaginationQueries {
  eventId?: number;
}

const useGetAttendeeList = (queries: IGetAttendeeQuery) => {
  const [data, setData] = useState<IEventParticipant[]>([]);
  const [meta, setMeta] = useState<IPaginationMeta | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getAttendeeLists = async () => {
    try {
      const { data } = await axiosInstance.get(
        `/transactions/event/attendees-list/${queries.eventId}`,
        {
          params: queries,
        },
      );
      console.log(data);
      setData(data.data);
      setMeta(data.meta);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    if (queries?.eventId !== undefined) {
      getAttendeeLists();
    }
  }, [queries?.eventId, queries?.page]);

  return { data, meta, isLoading };
};

export default useGetAttendeeList;
