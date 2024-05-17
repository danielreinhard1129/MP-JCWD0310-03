import React from "react";
import Marquee from "react-fast-marquee";
import EventCard from "../card/EventCard";
import MarqueeCard from "../card/MarqueeCard";

const MarqueeEvent = () => {
  return (
    <div className="mt-1 h-[400px] bg-[##f5f5f5] p-5">
      <div className="mb-3">
        <h1 className="text-xl font-semibold text-[#393e41]">Best seller!</h1>
        <p className="text-sm text-[#393e41]">
          Our best seller events that you might like!
        </p>
      </div>
      <Marquee pauseOnHover>
        <div className="my-2 flex gap-5">
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
