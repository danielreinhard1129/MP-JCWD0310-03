import { axiosInstance } from "@/lib/axios";
import { IFormTransaction } from "@/types/transaction.type";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

const useCreateTransaction = () => {
  const router = useRouter();
  const createTransaction = async (payload: IFormTransaction) => {
    try {
      const {
        userId,
        total_price,
        status,
        qty,
        eventId,
        point_used,
        approval_image,
      } = payload;
      const createFormTransaction = new FormData();
      createFormTransaction.append("userId", String(userId));
      createFormTransaction.append("eventId", String(eventId));
      createFormTransaction.append("qty", String(qty));
      createFormTransaction.append("status", status);
      createFormTransaction.append("total_price", String(total_price));
      createFormTransaction.append("point_used", String(point_used));
      createFormTransaction.append("approval_image", approval_image);

      await axiosInstance.post<IFormTransaction>(
        "/transactions",
        createFormTransaction,
      );

      alert("success create transaction");
      router.push("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        //TODO: put toast here
        console.log(error);
      }
    }
  };

  return {
    createTransaction,
  };
};

export default useCreateTransaction;
