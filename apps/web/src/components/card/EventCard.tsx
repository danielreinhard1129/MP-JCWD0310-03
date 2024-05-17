import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface EventCardProps {
  title: string;
  thumbnail?: string;
  start_event?: Date;
  location: string;
  price: number;
  eventId: number;
  imageUrl: string;
}

const EventCard: React.FC<EventCardProps> = ({
  location,
  price,
  start_event,
  title,
  eventId,
  imageUrl,
}) => {
  console.log("EventCard props:", {
    location,
    price,
    start_event,
    title,
    eventId,
    imageUrl,
  }); // Log received props

  return (
    <Link href={`/event/${eventId}`} className="cursor-pointer">
      <div className="card card-compact mx-auto h-[350px] w-[350px] rounded-lg bg-base-100 shadow-xl md:h-[280px] md:w-[280px]">
        {/* <figure>
          <img src="/evt.jpg" alt="Event" />
        </figure> */}
        <div className="relative h-[220px] w-full overflow-hidden rounded-md">
          <Image src={imageUrl} alt="thumbnail" className="object-cover" fill />
        </div>
        <div className="card-body">
          <h2 className="card-title text-[15px] font-bold">{title}</h2>
          <div className="flex items-center gap-2">
            <CalendarDays color="blue" size={20} />
            <p className="font-sm text-[11px] text-gray-500">
              {start_event ? start_event.toLocaleDateString() : "Invalid date"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin color="blue" size={20} />
            <p className="font-sm text-[11px] text-gray-500">
              {location || "Unknown location"}
            </p>
          </div>
          <div className="card-actions justify-start"></div>
          <div className="flex items-center justify-between">
            <h1 className="text-sm font-bold text-orange-600">
              Rp {price || "0"}
            </h1>
            <button className="btn rounded-md bg-[#1F1F95] text-white md:btn-sm">
              Buy ticket
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
