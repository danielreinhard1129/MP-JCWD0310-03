"use client";

import { axiosInstance } from "@/lib/axios";
import { IFormCreateReview, IReview } from "@/types/review.type";
import { AxiosError } from "axios";


const useCreateReviews = () => {
  const createReview = async (payload: IFormCreateReview) => {
    try {
      const { review, rating, userId, eventId } = payload;
      const createReviewForm = new FormData();

      createReviewForm.append("review", review);
      createReviewForm.append("rating", rating);
      createReviewForm.append("userId", String(userId));
      createReviewForm.append("eventId", String(eventId));

      console.log(createReviewForm);

      await axiosInstance.post<IReview>("/review", createReviewForm)
      // toast success here
      alert("success create review");

      
    } catch (error) {
        if (error instanceof AxiosError) {
            //TODO: put toast here
            console.log(error);
          }
        }
    }
    return {createReview};
  };

export default useCreateReviews;
