'use client';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="carousel carousel-center rounded-box mt-5">
      <div className="carousel-item w-full">
        <img
          src="/conf.jpg"
          alt="conf"
          className="w-[320px] h-[150px] md:w-[95%] md:h-[350px] mx-auto rounded-xl"
        />
      </div>
      <div className="carousel-item w-full">
        <img
          src="/evt.jpg"
          alt="conf"
          className="w-[320px] h-[150px] mx-auto md:w-[95%] md:h-[350px] rounded-xl"
        />
      </div>
      <div className="carousel-item w-full">
        <img
          src="/conf.jpg"
          alt="conf"
          className="w-[320px] h-[150px] md:w-[95%] md:h-[350px] mx-auto rounded-xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
