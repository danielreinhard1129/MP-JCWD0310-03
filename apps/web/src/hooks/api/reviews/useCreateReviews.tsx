'use client';

import { axiosInstance } from "@/lib/axios";
import { IFormCreateReview, IReview } from '@/types/reviews.type';
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";


const useCreateReviews = () => {
    const router = useRouter();
  const createReview = async (payload: IFormCreateReview) => {
    try {
        const { review, rating, userId, eventId } = payload
        const createReviewForm = new FormData()
        createReviewForm.append("review", review)
        createReviewForm.append("rating", String(rating))
        createReviewForm.append("userId", String(userId))
        createReviewForm.append("eventId", String(eventId))
        
        await axiosInstance.post<IReview>("/reviews", createReviewForm);
        // toast success here
        alert("success create review");
        location.reload();
      } catch (error) {
        if (error instanceof AxiosError) {
          //TODO: put toast here
          console.log(error);
        }
      }
    };
    return { createReview };
  };
  

export default useCreateReviews