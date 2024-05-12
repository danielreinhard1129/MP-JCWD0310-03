'use client';

import { Event, IFormCreateEvent } from '@/types/event.type';
import { AxiosError } from 'axios';
import { axiosInstance } from '@/lib/axios';
import { FileWithPath } from 'react-dropzone';
import { useRouter } from 'next/navigation';

const useCreateEvent = () => {

    const router = useRouter()
  const createEvent = async (payload: IFormCreateEvent) => {
    try {
      const {
        title,
        slug,
        price,
        location,
        description,
        thumbnail,
        types,
        limit,
        booked,
        start_event,
        end_event,
        category,
        userId,
      } = payload;
      const createEventForm = new FormData();

      createEventForm.append('title', title);
      createEventForm.append("slug", slug);
      createEventForm.append("price", price.toString());
      createEventForm.append("location", location);
      createEventForm.append("description", description);
      createEventForm.append("types", types);
      createEventForm.append("limit", limit);
      createEventForm.append("booked", booked.toString());
      createEventForm.append("start_event", start_event);
      createEventForm.append("end_event", end_event);
      createEventForm.append("category", category);
      createEventForm.append("userId", userId.toString());

      thumbnail.forEach((file: FileWithPath) => {
        createEventForm.append("thumbnail", file)
      })

      await axiosInstance.post<Event>('/events', createEventForm);
      router.push("/")
    } catch (error) {
      if (error instanceof AxiosError) {
      }
    }
  };
  return {createEvent};
};

export default useCreateEvent;
