import React from "react";
import EventCard from "../card/EventCard";

const ListEvent = () => {
  return (
    <div>
      <h1 className="p-6 text-xl font-bold md:mx-[50px]">List Events</h1>
      <div className="md:mx-auto md:w-full">
        <div className="mt-3 grid grid-cols-1 gap-3 md:mx-auto md:max-w-[100%] md:grid-cols-4 md:gap-3">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
      <div className="mt-3 flex w-full justify-center md:mt-3 md:flex md:justify-center">
        <button className="btn btn-outline mx-auto w-[150px] rounded-lg hover:bg-[#1F1F95] ">
          Explore events
        </button>
      </div>
    </div>
  );
};

export default ListEvent;
