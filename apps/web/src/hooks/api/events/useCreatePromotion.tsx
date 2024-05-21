import { axiosInstance } from "@/lib/axios";
import { IFormCreatePromotion, IPromotion } from '@/types/promotion.type';
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

const useCreatePromotion = () => {
    const router = useRouter();
    const createPromotion = async (payload: IFormCreatePromotion) => {
      try {
        const {eventId, userId, total, expiredAt, limit} = payload;
  
        const createPromotionForm = new FormData();

        createPromotionForm.append("eventId", String(eventId))
        createPromotionForm.append("userId", String(userId))
        createPromotionForm.append("total", String(total))
        createPromotionForm.append("expiredAt", expiredAt)
        createPromotionForm.append("limit", String(limit))
  
        console.log(createPromotionForm);
  
        await axiosInstance.post<IPromotion>("/promotion", createPromotionForm);
        // toast success here
        alert("success create promotion");
        //router.push("/admin/dashboard/events");
      } catch (error) {
        if (error instanceof AxiosError) {
          //TODO: put toast here
          console.log(error);
        }
      }
    };
    return { createPromotion };
  };

export default useCreatePromotion