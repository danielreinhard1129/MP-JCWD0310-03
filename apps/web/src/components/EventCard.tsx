import React from 'react';
import { Card, CardHeader } from './ui/card';
import Image from 'next/image';
import { CalendarDays, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const EventCard = () => {
  return (
    <Card className="max-w-[500px] h-[360px] mx-auto border border-black p-2 gap-y-2">
      <Image
        src="/foodevent.jpg"
        alt="food"
        width={330}
        height={50}
        className="mx-auto p-3 rounded-lg"
      />
      <div className="flex justify-between">
        <h1 className="font-semibold">Jakarta Music Event</h1>
        <h1 className="font-medium text-sm bg-blue-600 p-[5px] rounded-xl text-white">
          Music
        </h1>
      </div>
      <div className="flex gap-3">
        <CalendarDays size={20} />
        <h3 className="font-semibold text-[15px]">04 Sept 2024</h3>
      </div>
      <div className="flex gap-3">
        <MapPin size={20} />
        <h3 className="font-bold text-[15px]">Jakarta, Indonesia</h3>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-[15px]">Rp. 150.000</h1>
        <Button>Buy tickets</Button>
      </div>
    </Card>
  );
};

export default EventCard;

{
  /* <div className="flex justify-between p-1">
  <h1 className="font-bold text-[20px]">Jakarta Music Event</h1>
  <h1 className="font-bold text-[10px]">Music</h1>
</div>
<div className="flex gap-2 p-1">
  <CalendarDays size={15} />
  <h3 className="font-bold text-[10px]">04 Sept 2024</h3>
</div>
<div className="flex gap-2 p-1">
  <MapPin size={15} />
  <h3 className="font-bold text-[10px]">Jakarta, Indonesia</h3>
</div>
<div className="flex justify-between items-center p-1">
  <h3 className="font-bold text-lg">RP. 150,000</h3>
  <Button className="bg-blue-600 w-[102px] h-[25px] text-[11px]">
    Buy ticket
  </Button>
</div> */
}
