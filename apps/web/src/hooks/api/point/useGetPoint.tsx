import { axiosInstance } from "@/lib/axios";
import React, { useEffect, useState } from "react";

interface IPoint {
  id: number;
  total: number;
  userId: number;
  expiredAt: string;
}

const useGetPoint = () => {
  const [data, setData] = useState<IPoint[]>([]);
  const getUserPoint = async () => {
    try {
      const { data } = await axiosInstance.get(`/points/${4}`);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserPoint();
  }, []);

  return {
    getUserPoint,
    data,
  };
};

export default useGetPoint;
