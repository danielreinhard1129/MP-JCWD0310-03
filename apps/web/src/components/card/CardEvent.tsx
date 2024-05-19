import { CalendarDays, MapPin } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { event } from "cypress/types/jquery";

interface EventCardProps {
  title: string;
  thumbnail?: string;
  start_event?: Date;
  location: string;
  price: number;
  eventId: number;
  imageUrl: string;
}

const CardEvent: FC<EventCardProps> = ({
  location,
  price,
  start_event,
  title,
  eventId,
  imageUrl,
}) => {
  const formatRupiah = (price: any) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  return (
    <Link href={`/event/${eventId}`} className="cursor-pointer">
      <div className="card card-compact mx-auto h-[350px] w-[350px] rounded-lg bg-base-100 shadow-2xl md:h-[270px] md:w-[250px]">
        <div className="relative h-[270px] w-full overflow-hidden rounded-md">
          <Image src={imageUrl} alt="thumbnail" className="object-cover" fill />
        </div>
        <div className="card-body">
          <h2 className="card-title text-base font-bold text-[#393e41]">
            {title}
          </h2>
          <div className="flex items-center gap-2">
            <CalendarDays color="orange" size={15} />
            <p className="font-sm text-[12px] text-gray-500">
              {/* {start_event ? start_event.toLocaleDateString() : "Invalid date"} */}
              11 Mei 2024
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin color="orange" size={15} />
            <p className="font-sm text-[12px] text-gray-500">
              {location || "Unknown location"}
            </p>
          </div>
          <div className="card-actions justify-start"></div>
          <div className="flex items-center justify-between">
            <h1 className="justidy-start text-sm font-bold text-[#393e41]">
              {formatRupiah(price)}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardEvent;

{
  /* <Button className="rounded-md bg-[#e94f37] text-black">
            Buy ticket
          </Button> */
}
