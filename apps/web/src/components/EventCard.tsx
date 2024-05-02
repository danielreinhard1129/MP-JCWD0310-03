import React from 'react';
import { Card, CardHeader } from './ui/card';
import Image from 'next/image';

const EventCard = () => {
  return (
    <Card className="w-[170px] h-[170px] bg-[#215AD4] border-none">
      <Image
        src="/foodevent.jpg"
        alt="food"
        width={170}
        height={81}
        className="rounded-md"
      />
      <div className="flex justify-between p-2 text-white">
        <h1 className="text-[7px]">Jakarta culinary event</h1>
        <h1 className="text-[7px] font-bold">RP. 150K</h1>
      </div>
      <div className="flex justify-between p-2 text-white">
        <h1 className="text-[7px]">JIS</h1>
        <h1 className="text-[7px]">16.00 - 20.00</h1>
        <h1 className="text-[7px]">28 Nov, 2022</h1>
      </div>
    </Card>
  );
};

export default EventCard;
