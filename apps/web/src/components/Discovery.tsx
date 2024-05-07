import React from "react";
import EventCard from "./EventCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

const Discovery = () => {
  return (
    <div className="py-3">
      <Carousel className="relative mx-auto max-w-[600px] md:max-w-[1100px]">
        <div className="flex items-center gap-3">
          <CarouselPrevious className="absolute left-0 z-10" />
          <CarouselItem className="rounded-md">
            <CarouselContent className="max-w-[600px] md:max-w-[1000px] md:gap-1">
              {/* <Image src="/msc.jpg" alt="yes" width={250} height={400} />
              <Image src="/msc.jpg" alt="yes" width={250} height={400} />
              <Image src="/msc.jpg" alt="yes" width={250} height={400} /> */}
              <EventCard />
              <EventCard />
              {/* <EventCard />
              <EventCard />
              <EventCard />
              {/* <EventCard /> */}
              {/* <EventCard />
              <EventCard />
              <EventCard />
              <EventCard /> */}
              {/* <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard /> */}
            </CarouselContent>
          </CarouselItem>
          <CarouselNext className="absolute right-0 z-10" />
        </div>
      </Carousel>
    </div>
  );
};

export default Discovery;
