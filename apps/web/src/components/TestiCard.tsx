import React from 'react';
import { Avatar, AvatarImage } from './ui/avatar';

const TestiCard = () => {
  return (
    <div className="max-w-[250px] h-[130px] bg-[#111111] rounded-md p-3">
      <h1 className="text-white text-[12px] text-start">
        “I’m really satisfied with the service, it’s really great and behind my
        expectation!!”
      </h1>
      <div className="pt-2">
        <Avatar className="flex">
          <AvatarImage src="https://github.com/shadcn.png" />
          <div className="flex gap-2 py-2 ">
            <h1 className="text-white text-[10px]">Enzo Fernandez</h1>
            <p className="text-white text-[10px]">Football Player</p>
          </div>
        </Avatar>
      </div>
    </div>
  );
};

export default TestiCard;
