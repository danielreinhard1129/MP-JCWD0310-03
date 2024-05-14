"use client";

import { useEffect, useState } from "react";
import {IEvent} from "@/types/event.type"
import { AxiosError } from "axios";
import { axiosInstance } from "@/lib/axios";

const useGetEvent = (id: Number) => {
    const [data, setData] = useState<IEvent | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const getEvent = async () => {
        try {
            const {data} = await axiosInstance.get(`/events/${id}`);
            setData(data);
        } catch (error) {
            if(error instanceof AxiosError){
                // TODO: replace console.log with toast
                console.log(error);
            }
        } finally{
            setIsLoading(false);
        }
    }
    useEffect(() => {
        getEvent();
    }, [])
  return {event: data, isLoading, refetch: getEvent};
}

export default useGetEvent;