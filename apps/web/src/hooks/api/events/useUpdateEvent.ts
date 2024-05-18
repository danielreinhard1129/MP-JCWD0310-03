"use client";

import { axiosInstance } from "@/lib/axios";
import { IFormCreateEvent } from "@/types/event.type";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { FileWithPath } from "react-dropzone";
import { useAppSelector } from "@/redux/hooks";
import { useState } from "react";


const useUpdateEvent = (eventId : number) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const updateEvent = async (payload: IFormCreateEvent) => {
        setIsLoading(true);
      try {
        const {
          title,
          category,
          location,
          description,
          thumbnail,
          userId,
          end_event,
          start_event,
          limit,
          price,
        } = payload;
  
        const updateEventForm = new FormData();
  
        updateEventForm.append("title", title);
        updateEventForm.append("category", category);
        updateEventForm.append("location", location);
        updateEventForm.append("description", description);
        updateEventForm.append("userId", String(userId));
        updateEventForm.append(
          "start_event",
          new Date(start_event).toISOString(),
        );
        updateEventForm.append("end_event", new Date(end_event).toISOString());
       updateEventForm.append("limit", String(limit));
        updateEventForm.append("price", String(price));
  
        thumbnail.forEach((file: FileWithPath) => {
          updateEventForm.append("thumbnail", file);
        });
  
        await axiosInstance.patch(`/events/${eventId}`, updateEventForm )
        // toast success here
        router.push("/");
      } catch (error) {
          console.log(error);
        } finally {
            setIsLoading(false)
        }
      }
      return { updateEvent, isLoading };
    };
    

  
  export default useUpdateEvent;
  