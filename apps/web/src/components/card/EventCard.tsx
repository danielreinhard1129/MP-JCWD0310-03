import { CalendarDays, MapPin } from 'lucide-react';
import React from 'react';

const EventCard = () => {
  const name = "firza"
  return (
    <div className="card card-compact w-[350px] h-[320px] bg-base-100 shadow-xl mx-auto rounded-lg">
      <figure>
        <img src="/evt.jpg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-extrabold">Jakarta Tech Conference</h2>
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
        <div className="flex justify-between items-center">
          <h1 className="text-orange-600 text-lg font-bold justidy-start">
            Rp 20.000
          </h1>
          <button className="btn rounded-md bg-[#1F1F95] text-white justify-end">
            Buy ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
