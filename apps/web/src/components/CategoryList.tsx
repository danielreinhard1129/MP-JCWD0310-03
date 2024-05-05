'use client';

import Image from 'next/image';
import React from 'react';

const CategoryList = () => {
  return (
    <div className="grid grid-cols-3 max-w-[500px] mx-auto gap-y-3 justify-items-center mt-3">
      <div>
        <div className="border border-gray-700 rounded-full w-[60px] h-[60px] flex justify-center items-center">
          <Image src="/guitar.png" width={40} height={40} alt="music" />
        </div>
        <h3 className="text-center">Music</h3>
      </div>

      <div>
        <div className="border border-gray-700 rounded-full w-[60px] h-[60px]  flex justify-center items-center">
          <Image src="/sports.png" width={40} height={40} alt="music" />
        </div>
        <h3 className="text-center">Sports</h3>
      </div>

      <div>
        <div className="border border-gray-700 rounded-full w-[60px] h-[60px] flex justify-center items-center">
          <Image src="/healthcare.png" width={40} height={40} alt="music" />
        </div>
        <h3 className="text-center">Healthcare</h3>
      </div>

      <div>
        <div className="border border-gray-700 rounded-full w-[60px] h-[60px] flex justify-center items-center">
          <Image src="/fast-food.png" width={40} height={40} alt="music" />
        </div>
        <h3 className="text-center">Culinary</h3>
      </div>

      <div>
        <div className="border border-gray-700 rounded-full w-[60px] h-[60px] flex justify-center items-center">
          <Image src="/inspiration.png" width={40} height={40} alt="music" />
        </div>
        <h3 className="text-center">Arts</h3>
      </div>

      <div>
        <div className="border border-gray-700 rounded-full w-[60px] h-[60px] flex justify-center items-center">
          <Image src="/conference.png" width={40} height={40} alt="music" />
        </div>
        <h3 className="text-center">Conference</h3>
      </div>
    </div>
  );
};

export default CategoryList;
