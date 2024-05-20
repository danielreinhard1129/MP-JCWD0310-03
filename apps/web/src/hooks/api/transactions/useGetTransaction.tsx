// "use client";

// import { ApiResponse } from "@/components/table/TableAdmin";
// import { axiosInstance } from "@/lib/axios";
// import { AxiosError } from "axios";
// import { useEffect, useState } from "react";

// const useGetTransaction = (id: number) => {
//   const [data, setData] = useState<ApiResponse | null>(null);
//   const [loading, setLoading] = useState(true);

//   const getTransactions = async () => {
//     try {
//       const { data } = await axiosInstance.get<ApiResponse>(
//         `/transactions/organizer/${id}`,
//       );
//       setData(data);
//       console.log(data);
//     } catch (error) {
//       if (error instanceof AxiosError) {
//         // TODO : replace console.log with toast
//         console.log(error);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     getTransactions();
//   }, []);

//   return { transaction: data, refetch: getTransactions, loading };
// };

// export default useGetTransaction;
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { axiosInstance } from "@/lib/axios";
import { IPaginationMeta, IPaginationQueries } from "@/types/pagination.type";
// import { Transaction, TransactionStatus } from '@/types/transaction.type';
import { ApiResponse } from "@/components/table/TableAdmin";

import { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface IGetTransactionsQuery extends IPaginationQueries {
  id: number;
  search?: string;
  status?: ApiResponse;
}

const useGetTransactionsByOrganizer = (queries: IGetTransactionsQuery) => {
  const [data, setData] = useState<ApiResponse[]>([]);
  const [meta, setMeta] = useState<IPaginationMeta | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getTransactions = async () => {
    try {
      const { data } = await axiosInstance.get("/transactions/organizer", {
        params: queries,
      });

      setData(data.data);
      setMeta(data.meta);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTransactions();
  }, [queries?.page, queries?.search, queries.id]);

  return { data, isLoading, meta, refetch: getTransactions };
};

export default useGetTransactionsByOrganizer;
