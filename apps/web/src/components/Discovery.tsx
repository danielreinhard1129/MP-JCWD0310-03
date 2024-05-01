import React from 'react';
import EventCard from './EventCard';

const Discovery = () => {
  return (
    <div className="bg-black p-3 text-center">
      <h1 className="text-white font-bold text-[20px]">Events, Meetups &</h1>
      <h1 className="text-white font-bold text-[20px]">Conforences</h1>
      <p className="text-[12px] text-[#9F9FA8]  font-bold">
        "Explore diverse event categories, catering to every
      </p>
      <p className="text-[12px] text-[#9F9FA8] font-bold">
        interest and occasion, ensuring something for everyone."
      </p>
      <div className="grid grid-cols-2 gap-3 pt-3">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default Discovery;
