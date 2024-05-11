import { CalendarDays, MapPin } from 'lucide-react';
import React from 'react';

const MarqueeCard = () => {
  return (
    <div className="card card-compact w-[350px] h-[330px] bg-base-100 shadow-xl mx-auto rounded-lg ">
      <figure>
        <img src="/evt.jpg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-extrabold">Jakarta Tech Conference</h2>
        <div className="flex gap-5 items-center">
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <h1 className="font-semibold text-sm">Maria Marzuki</h1>
        </div>
        <div className="flex gap-2 items-center">
          <CalendarDays color="blue" />
          <p className="text-sm font-sm text-gray-500">
            10 Mar 2024 - 31 May 2024
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <MapPin color="blue" />
          <p className="text-sm font-sm text-gray-500">Stone Valley by Haho</p>
        </div>
        <div className="justify-start card-actions"></div>
      </div>
    </div>
  );
};

export default MarqueeCard;
