import React from "react";
import { Card, CardHeader } from "./ui/card";
import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const EventCard = () => {
  return (
    <Card className="mx-auto h-[360px] max-w-[500px] gap-y-2 border border-black p-2">
      <Image
        src="/foodevent.jpg"
        alt="food"
        width={330}
        height={50}
        className="mx-auto rounded-lg p-3"
      />
      <div className="flex justify-between">
        <h1 className="font-semibold">Jakarta Music Event</h1>
        <h1 className="rounded-xl bg-blue-600 p-[5px] text-sm font-medium text-white">
          Music
        </h1>
      </div>
      <div className="flex gap-3">
        <CalendarDays size={20} />
        <h3 className="text-[15px] font-semibold">04 Sept 2024</h3>
      </div>
      <div className="flex gap-3">
        <MapPin size={20} />
        <h3 className="text-[15px] font-bold">Jakarta, Indonesia</h3>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-[15px] font-bold">Rp. 150.000</h1>
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
