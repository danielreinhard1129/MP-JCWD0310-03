"use client";

import Image from "next/image";
import React from "react";

const CityList = () => {
  return (
    <div className="mx-auto mb-3 mt-3 grid max-w-[500px] grid-cols-3 justify-items-center gap-y-3 md:max-w-[1100px] md:grid-cols-6">
      <div>
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-gray-700 md:h-[80px] md:w-[80px]">
          <Image src="/bali.png" width={40} height={40} alt="music" />
        </div>
        <h3 className="text-center">Bali</h3>
      </div>

      <div>
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-gray-700 md:h-[80px] md:w-[80px]">
          <Image src="/smg.png" width={40} height={40} alt="music" />
        </div>
        <h3 className="text-center">Semarang</h3>
      </div>

      <div>
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-gray-700 md:h-[80px] md:w-[80px]">
          <Image src="/monas.png" width={40} height={40} alt="music" />
        </div>
        <h3 className="text-center">Jakarta</h3>
      </div>

      <div>
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-gray-700 md:h-[80px] md:w-[80px]">
          <Image src="/temple.png" width={40} height={40} alt="music" />
        </div>
        <h3 className="text-center">Yogya</h3>
      </div>

      <div>
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-gray-700 md:h-[80px] md:w-[80px]">
          <Image src="/monument.png" width={40} height={40} alt="music" />
        </div>
        <h3 className="text-center">Surabaya</h3>
      </div>

      <div>
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-gray-700 md:h-[80px] md:w-[80px]">
          <Image src="/construction.png" width={40} height={40} alt="music" />
        </div>
        <h3 className="text-center">Bandung</h3>
      </div>
    </div>
  );
};

export default CityList;
