import React from "react";
import { Input } from "./ui/input";
import { Avatar, AvatarImage } from "./ui/avatar";

const NavList = () => {
  return (
    <div className="flex items-center justify-around gap-10">
      <Input className=" md:h-[30px] md:w-[500px]" />
      <h3 className=" text-sm text-white hover:rounded-md hover:bg-blue-950 hover:px-2 hover:py-1">
        Explore Events
      </h3>
      <h3 className="text-sm text-white hover:rounded-md hover:bg-blue-950 hover:px-2 hover:py-1">
        Create Events
      </h3>
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        <h3 className="text-sm text-white">Firza Ananda</h3>
      </div>
    </div>
  );
};

export default NavList;
