"use client";

import React from "react";
import EventCard from "./EventCard";
import { Button } from "./ui/button";

const ListEvent = () => {
  return (
    <div className="mx-auto my-3 md:max-w-[1100px]">
      <h1 className="px-8 text-lg font-semibold">More events</h1>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      <div className="flex justify-center p-2">
        <Button className="my-3 w-[80px] bg-blue-600 md:w-[100px]">More</Button>
      </div>
    </div>
  );
};

export default ListEvent;
