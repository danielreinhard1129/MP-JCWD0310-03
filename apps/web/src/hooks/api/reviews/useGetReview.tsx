"use client";

import { axiosInstance } from "@/lib/axios";
import { IReview } from "@/types/review.type"
import { AxiosError } from "axios";
import { useEffect, useState } from "react"


const useGetReview = (id: number) => {
    const [data, setData] = useState<IReview | null>(null);
    const [loading, setLoading] = useState(true);

    const getReview = async () => {
        try {
          const { data } = await axiosInstance.get<IReview>(`/review/${id}`);
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
        getReview();
      }, []);
    
      return { event: data, refetch: getReview, loading };
    };


export default useGetReview