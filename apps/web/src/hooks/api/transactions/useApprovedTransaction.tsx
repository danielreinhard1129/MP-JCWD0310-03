"use client";

// import { toast } from "@/components/ui/use-toast";
import { axiosInstance } from "@/lib/axios";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

interface AcceptTransactionArgs {
  id?: number;
}

const useAcceptTransaction = () => {
  const router = useRouter();
  const accepting = async (payload: AcceptTransactionArgs) => {
    try {
      await axiosInstance.patch("/transactions/accepting", payload);
      router.refresh();
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  };
  return { accepting };
};

export default useAcceptTransaction;
