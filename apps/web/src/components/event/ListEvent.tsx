import React from 'react';
import EventCard from '../card/EventCard';

const ListEvent = () => {
  return (
    <div>
      <h1 className="p-6 md:mx-6 text-xl font-bold">List Events</h1>
      <div className="grid grid-cols-1 gap-3 mt-3 md:grid-cols-3 md:max-w-[95%] md:mx-auto">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      <div className="w-full flex justify-center mt-3 md:flex md:justify-center md:mt-3">
        <button className="btn btn-outline  rounded-lg w-[150px] mx-auto hover:bg-[#1F1F95] ">
          Explore events
        </button>
      </div>
    </div>
  );
};

export default ListEvent;
