'use client';

import Image from 'next/image';
import React from 'react';

const CityList = () => {
  return (
    <div className="grid grid-cols-3 max-w-[500px] mx-auto gap-y-3 justify-items-center mt-3 mb-3">
      <div>
        <div className="border border-gray-700 rounded-full w-[60px] h-[60px] flex justify-center items-center">
          <Image src="/bali.png" width={40} height={40} alt="music" />
        </div>
        <h3 className="text-center">Bali</h3>
      </div>

      <div>
        <div className="border border-gray-700 rounded-full w-[60px] h-[60px] flex justify-center items-center">
          <Image src="/smg.png" width={40} height={40} alt="music" />
        </div>
        <h3 className="text-center">Semarang</h3>
      </div>

      <div>
        <div className="border border-gray-700 rounded-full w-[60px] h-[60px] flex justify-center items-center">
          <Image src="/monas.png" width={40} height={40} alt="music" />
        </div>
        <h3 className="text-center">Jakarta</h3>
      </div>

      <div>
        <div className="border border-gray-700 rounded-full w-[60px] h-[60px] flex justify-center items-center">
          <Image src="/temple.png" width={40} height={40} alt="music" />
        </div>
        <h3 className="text-center">Yogya</h3>
      </div>

      <div>
        <div className="border border-gray-700 rounded-full w-[60px] h-[60px] flex justify-center items-center">
          <Image src="/monument.png" width={40} height={40} alt="music" />
        </div>
        <h3 className="text-center">Surabaya</h3>
      </div>

      <div>
        <div className="border border-gray-700 rounded-full w-[60px] h-[60px] flex justify-center items-center">
          <Image src="/construction.png" width={40} height={40} alt="music" />
        </div>
        <h3 className="text-center">Bandung</h3>
      </div>
    </div>
  );
};

export default CityList;
