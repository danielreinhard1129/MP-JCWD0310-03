import React from 'react';
import Marquee from 'react-fast-marquee';
import EventCard from './EventCard';
import TestiCard from './TestiCard';

const Testi = () => {
  return (
    <div className="p-3 h-[160px] bg-[#18181A]">
      <Marquee speed={20} className="flex gap-3">
        <TestiCard />
        <TestiCard />
        <TestiCard />
        <TestiCard />
      </Marquee>
    </div>
  );
};

export default Testi;
