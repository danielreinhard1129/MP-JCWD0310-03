import { CalendarDays, MapPin } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

interface CardBody{
    
        title: string;
        thumbnail?: string;
        start_event?: Date;
        location: string;
        price: number;
        
      
}

const CardEvent: React.FC<CardBody> = ({}) => {
  return (
    <div className="card card-compact mx-auto h-[350px] w-[350px] rounded-lg bg-base-100 shadow-xl md:h-[280px] md:w-[250px]">
      <figure>
        <img src="/evt.jpg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[15px] font-bold">
          Jakarta Tech Conference
        </h2>
        <div className="flex items-center gap-2">
          <CalendarDays color="blue" size={20} />
          <p className="font-sm text-[11px] text-sm text-gray-500">
            10 Mar 2024 - 31 May 2024
          </p>
        </div>
        <div className="flex items-center gap-2">
          <MapPin color="blue" size={20} />
          <p className="font-sm text-[11px] text-sm text-gray-500">
            Stone Valley by Haho
          </p>
        </div>
        <div className="card-actions justify-start"></div>
        <div className="flex items-center justify-between">
          <h1 className="justidy-start text-sm font-bold text-orange-600">
            Rp 20.000
          </h1>
          <button className="btn justify-end rounded-md bg-[#1F1F95] text-white md:btn-sm">
            Buy ticket
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default CardEvent;