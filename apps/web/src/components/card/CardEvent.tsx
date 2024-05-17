import { CalendarDays, MapPin } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

interface CardBody {
  title: string;
  thumbnail?: string;
  start_event?: Date;
  location: string;
  price: number;
}

const CardEvent = () => {
  return (
    <div className="card card-compact mx-auto h-[350px] w-[350px] rounded-lg bg-base-100 shadow-2xl md:h-[270px] md:w-[250px]">
      <div className="relative h-[270px] w-full overflow-hidden rounded-md">
        <Image src="/prt.jpg" alt="thumbnail" className="object-cover" fill />
      </div>
      <div className="card-body">
        <h2 className="card-title text-base font-bold text-[#393e41]">
          Jakarta Tech Conference
        </h2>
        <div className="flex items-center gap-2">
          <CalendarDays color="orange" size={15} />
          <p className="font-sm text-[12px] text-gray-500">
            10 Mar 2024 - 31 May 2024
          </p>
        </div>
        <div className="flex items-center gap-2">
          <MapPin color="orange" size={15} />
          <p className="font-sm text-[12px] text-gray-500">
            Stone Valley by Haho
          </p>
        </div>
        <div className="card-actions justify-start"></div>
        <div className="flex items-center justify-between">
          <h1 className="justidy-start text-sm font-bold text-[#393e41]">
            Rp 20.000
          </h1>
          {/* <Button className="rounded-md bg-[#e94f37] text-black">
            Buy ticket
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default CardEvent;
