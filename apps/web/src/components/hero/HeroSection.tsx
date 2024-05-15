"use client";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="carousel carousel-center mx-auto mt-5 flex w-full max-w-[100%] gap-3 rounded-box md:mx-auto md:flex md:w-full md:max-w-[95%] md:justify-center md:gap-3">
      <div className="carousel-item relative h-[150px] md:h-[350px] md:w-full md:max-w-[100%]">
        <Image
          fill
          src="/evt.jpg"
          alt="thumbnail image"
          className="rounded-lg bg-slate-200 object-cover"
        />
      </div>
      <div className="carousel-item relative h-[150px] w-full max-w-[100%] md:h-[350px]">
        <Image
          fill
          src="/evt.jpg"
          alt="thumbnail image"
          className="rounded-lg bg-slate-200 object-cover"
        />
      </div>
      <div className="carousel-item relative h-[150px] w-full max-w-[100%] md:h-[350px]">
        <Image
          fill
          src="/evt.jpg"
          alt="thumbnail image"
          className="rounded-lg bg-slate-200 object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
