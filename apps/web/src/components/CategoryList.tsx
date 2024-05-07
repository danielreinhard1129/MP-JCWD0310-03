"use client";

import Image from "next/image";
import React from "react";

const CategoryList = () => {
  return (
    <div className="mx-auto mt-3 grid max-w-[500px] grid-cols-3 justify-items-center gap-y-3 md:max-w-[1100px] md:grid-cols-6">
      <div>
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-gray-700 md:h-[80px] md:w-[80px]">
          <Image src="/guitar.png" width={40} height={40} alt="music" />
        </div>
        <h3 className="text-center">Music</h3>
      </div>

      <div>
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border  border-gray-700 md:h-[80px] md:w-[80px]">
          <Image src="/sports.png" width={40} height={40} alt="music" />
        </div>
        <h3 className="text-center">Sports</h3>
      </div>

      <div>
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-gray-700 md:h-[80px] md:w-[80px]">
          <Image src="/healthcare.png" width={40} height={40} alt="music" />
        </div>
        <h3 className="text-center">Healthcare</h3>
      </div>

      <div>
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-gray-700 md:h-[80px] md:w-[80px]">
          <Image src="/fast-food.png" width={40} height={40} alt="music" />
        </div>
        <h3 className="text-center">Culinary</h3>
      </div>

      <div>
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-gray-700 md:h-[80px] md:w-[80px]">
          <Image src="/inspiration.png" width={40} height={40} alt="music" />
        </div>
        <h3 className="text-center">Arts</h3>
      </div>

      <div>
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-gray-700 md:h-[80px] md:w-[80px]">
          <Image src="/conference.png" width={40} height={40} alt="music" />
        </div>
        <h3 className="text-center">Conference</h3>
      </div>
    </div>
  );
};

export default CategoryList;
