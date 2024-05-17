import React from "react";
import EventCard from "../card/EventCard";
import CardEvent from "../card/CardEvent";

const ListEvent = () => {
  return (
    <div>
      <div className="container px-4 py-4">
        <h1 className="mx-[23px] text-xl font-bold text-[#393e41]">
          List Event
        </h1>

        {/* <div className="mt-3 grid grid-cols-1 gap-3 md:mx-auto md:max-w-[100%] md:grid-cols-4 md:gap-3"> */}
        <div className="mt-5 flex grid h-[550px]  items-center gap-4 md:grid-cols-4">
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <CardEvent />
        </div>
      </div>
      <div className="mt-3 flex w-full justify-center md:my-5 md:mb-3 md:flex md:justify-center">
        <button className="btn btn-outline mx-auto w-[150px] rounded-lg hover:bg-[#e94f37] ">
          Explore events
        </button>
      </div>
    </div>
  );
};

export default ListEvent;
