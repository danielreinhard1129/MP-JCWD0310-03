import React from 'react';
import Marquee from 'react-fast-marquee';
import EventCard from './EventCard';
import TestiCard from './TestiCard';
import { Card } from './ui/card';
import Image from 'next/image';
import { CalendarDays, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarImage } from './ui/avatar';

const Testi = () => {
  return (
    <div className="p-4 h-[450px] bg-[#18181A] flex items-center mt-3 w-[390px]">
      <div className="">
        <h1 className="text-[#8A8A8A] text-[20px]">Latest events</h1>
        <p className="text-[#8A8A8A] text-[11px] mb-2">
          "Explore diverse event categories, catering to every interest and
          occasion, ensuring something for everyone."
        </p>
        <Marquee speed={50} className="flex gap-3 max-w-[350px]">
          <EventCard />
        </Marquee>
      </div>
    </div>
  );
};

export default Testi;

{
  /* <Card className="max-w-[500px] h-[330px] mx-auto border border-black ">
  <Image
    src="/foodevent.jpg"
    alt="food"
    width={330}
    height={50}
    className="mx-auto p-3 rounded-lg"
  />
  <div className="flex justify-between p-1">
    <h1 className="font-bold text-[15px]">Jakarta Music Event</h1>
    <h1 className="font-bold text-[15px]">Music</h1>
  </div>
  <div className="flex gap-2 p-3">
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
    </Avatar>
    <h1>Javanaction event planner</h1>
  </div>
  <div className="flex gap-2 p-1">
    <CalendarDays size={15} />
    <h3 className="font-bold text-[10px]">04 Sept 2024</h3>
  </div>
  <div className="flex gap-2 p-1">
    <MapPin size={15} />
    <h3 className="font-bold text-[10px]">Jakarta, Indonesia</h3>
  </div>
</Card> */
}
