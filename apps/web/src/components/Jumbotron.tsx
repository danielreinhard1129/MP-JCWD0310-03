import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

const Jumbotron = () => {
  return (
    <div className="grid grid-cols-1 p-3 bg-black">
      <div className="max-w-[500px] mx-auto">
        <Image
          src="/jumbotron.png"
          alt="body"
          width={500}
          height={500}
          className="border border-white rounded-sm"
        />
      </div>
      <div className="leading-[45px] py-3">
        <h1 className="text-[18px] font-bold text-white">
          Effortless Event Excellence:
        </h1>
        <h1 className="text-[18px] font-bold text-white">
          {' '}
          Streamline Your Management Journey.
        </h1>
        <p className="text-[12px] leading-[30px] text-[#9F9FA8] tracking-[2%]">
          Eventify is your trusted partner in bringing your vision to life. With
          our intuitive platform and expert support, creating, organizing, and
          managing events has never been easier. Join us and let's make every
          moment extraordinary!
        </p>
      </div>
      <div className="flex gap-4 pb-5">
        <Button className="bg-[#215AD4] rounded-[5px] w-[84px] h-[30px] text-[10px]">
          Events
        </Button>
        <Button className="bg-[#215AD4] rounded-[5px] w-[84px] h-[30px] text-[10px]">
          Create Events
        </Button>
      </div>
      <div className="pt-10 relative">
        <div className="w-[334px] h-[60px] bg-[#215AD4] rounded-md mx-auto grid grid-cols-3 items-center absolute top-2 left-1/2 transform -translate-x-1/2">
          <div className="text-center text-white">
            <p className="text-[8px] font-bold">2500++</p>
            <p className="text-[8px]">Satisfied attendeess</p>
          </div>
          <div className="text-center text-white">
            <p className="text-[8px] font-bold">200++</p>
            <p className="text-[8px]">Organizers</p>
          </div>
          <div className="text-center text-white">
            <p className="text-[8px] font-bold">500++</p>
            <p className="text-[8px]">Events</p>
          </div>
        </div>
        <Image
          src="/btmjm.png"
          alt="jmbtm"
          className=""
          height={300}
          width={700}
        />
      </div>
    </div>
  );
};

export default Jumbotron;
