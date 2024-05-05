'use client';

import React from 'react';
import EventCard from './EventCard';
import { Button } from './ui/button';

const ListEvent = () => {
  return (
    <div className="my-3">
      <h1 className="px-8 font-semibold text-lg">More events</h1>
      <div className="grid grid-cols-1 gap-3">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      <div className="flex justify-center p-2">
        <Button className="bg-blue-600 w-[80px]">More</Button>
      </div>
    </div>
  );
};

export default ListEvent;
