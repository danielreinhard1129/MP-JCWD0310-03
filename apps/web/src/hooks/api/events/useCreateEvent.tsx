"use client";

import { axiosInstance } from "@/lib/axios";
import { IEvent, IFromCreateEvent } from "@/types/event.type";
import { AxiosError } from "axios";
import { log } from "console";
import { useRouter } from "next/navigation";
import { FileWithPath } from "react-dropzone";

const useCreateEvent = () => {
  const createEvent = async (payload: IFromCreateEvent) => {
    try {
      const router = useRouter()
      const {category, description, end_event, limit, location, price, start_event, thumbnail, title, userId} = payload;

      const createEventForm = new FormData();

      createEventForm.append("category", category);
      createEventForm.append("description", description);
      createEventForm.append("end_event", end_event.toString());
      createEventForm.append("limit", limit.toString());
      createEventForm.append("location", location);
      createEventForm.append("price", price.toString());
      createEventForm.append("start_event", start_event.toString());
      createEventForm.append("title", title);
      createEventForm.append("user", userId.toString());

      thumbnail.forEach((file: FileWithPath) => {
        createEventForm.append("thumbnail", file)
      })

        await axiosInstance.post<IEvent>("/events", payload)
        alert("suksesss")
        router.push("/")
    } catch (error) {
        if (error instanceof AxiosError) {
          alert(error)
        }else{
          console.log(error);
        }
    }
  }
  return {createEvent}
}

export default useCreateEvent