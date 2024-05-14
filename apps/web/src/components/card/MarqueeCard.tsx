import { CalendarDays, MapPin } from "lucide-react";
import React from "react";

const MarqueeCard = () => {
  return (
    <div className="card card-compact mx-auto h-[280px] w-[250px] rounded-lg bg-base-100 shadow-xl">
      <figure>
        <img src="/evt.jpg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title  text-[15px] font-bold">
          Jakarta Tech Conference
        </h2>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-7 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <h1 className="my-2 text-sm font-semibold">Maria Marzuki</h1>
        </div>
        <div className="my-2 flex items-center gap-2">
          <CalendarDays color="blue" size={20} />
          <p className="font-sm text-[11px] text-sm text-gray-500 ">
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
      </div>
    </div>
  );
};

export default MarqueeCard;
