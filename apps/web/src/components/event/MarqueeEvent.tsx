import React from "react";
import Marquee from "react-fast-marquee";
import EventCard from "../card/EventCard";
import MarqueeCard from "../card/MarqueeCard";

const MarqueeEvent = () => {
  return (
    <div className="mt-3 h-[400px] bg-[#2723E2] p-5">
      <div className="mb-3">
        <h1 className="text-xl font-semibold text-white">Best seller!</h1>
        <p className="text-sm text-white">
          Our best seller events that you might like!
        </p>
      </div>
      <Marquee pauseOnHover>
        <div className="flex gap-3">
          <MarqueeCard />
          <MarqueeCard />
          <MarqueeCard />
          <MarqueeCard />
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeEvent;
