"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar = () => {
  // const { id } = useSelector((state: RootState) => state.user);
  const id = false;
  return (
    <div className="bg-white">
      <div className="container px-4 py-4">
        <div className="flex items-center justify-between ">
          <h1 className="text-lg font-bold text-[#393e41]">
            EVENT<span className="text-lg text-[#e94f37]">IFY</span>
          </h1>
          <div className="hidden md:block">
            <div className="flex items-center gap-12 text-sm font-semibold text-[#393e41]">
              <h3>Events</h3>
              <h3>Dashboard</h3>
              <h3>Create</h3>
            </div>
            {/* <Button className="hidden rounded-3xl bg-transparent text-base font-semibold text-[#393e41] hover:rounded-3xl hover:bg-[#e94f37] hover:text-white md:block">
                  Register
                </Button> */}
          </div>
          {Boolean(id) ? (
            <div>
              <div className="">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div>
                <div className="text-[#393e41 flex hidden items-center gap-5 text-base font-semibold">
                  <h3>Events</h3>
                  <h3>Create</h3>
                </div>
                {/* <Button className="hidden rounded-3xl bg-transparent text-base font-semibold text-[#393e41] hover:rounded-3xl hover:bg-[#e94f37] hover:text-white md:block">
                  Register
                </Button> */}
              </div>
            </div>
          ) : (
            <Button className="rounded-3xl bg-transparent text-base font-semibold text-[#393e41] hover:rounded-3xl hover:bg-[#e94f37] hover:text-white">
              Register
            </Button>
          )}
        </div>
      </div>
      <hr className="border-b-0 border-black" />
    </div>
  );
};

export default Navbar;

// <div className="flex">
//   <div className="text-[#393e41 flex hidden items-center gap-5 text-base font-semibold md:block">
//     <h3>Events</h3>
//     <h3>Create</h3>
//   </div>
//   <div>
//     <Button className="rounded-3xl bg-transparent text-base font-semibold text-[#393e41] hover:rounded-3xl hover:bg-[#e94f37] hover:text-white">
//       Register
//     </Button>
//   </div>
// </div>
