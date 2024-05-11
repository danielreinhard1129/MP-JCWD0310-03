import React from 'react';
import Marquee from 'react-fast-marquee';
import EventCard from '../card/EventCard';
import MarqueeCard from '../card/MarqueeCard';

const MarqueeEvent = () => {
  return (
    <div className="h-[450px] bg-[#2723E2] p-5 mt-3">
      <div className="mb-3">
        <h1 className="text-xl text-white font-semibold">Best seller!</h1>
        <p className="text-sm text-white">
          Our best seller events that you might like!
        </p>
      </div>
      <Marquee pauseOnHover>
        <MarqueeCard />
        <MarqueeCard />
        <MarqueeCard />
      </Marquee>
    </div>
  );
};

export default MarqueeEvent;
