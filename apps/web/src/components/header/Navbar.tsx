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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { logoutAction } from "@/redux/slices/userSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const { id, username } = useSelector((state: RootState) => state.user);

  const router = useRouter();

  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(logoutAction());
  };
  return (
    <div className="bg-white">
      <div className="container px-4 py-4">
        <div className="flex items-center justify-between ">
          <Link href={`/`} className="text-lg font-bold text-[#393e41]">
            EVENT<span className="text-lg text-[#e94f37]">IFY</span>
          </Link>
          <div className="hidden md:block">
            <div className="flex items-center gap-12 text-sm font-semibold text-[#393e41]">
              <Link href={`/pagination`}>Events</Link>
              <Link href="/admin/dashboard">Dashboard</Link>
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
                    <DropdownMenuLabel>{username}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem></DropdownMenuItem>
                    <Link href={`/admin/dashboard`}>
                      <DropdownMenuItem>Dashboard</DropdownMenuItem>
                    </Link>
                    <Link href={`/pagination`}>
                      <DropdownMenuItem>Explore</DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem></DropdownMenuItem>
                    <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div>
                <div className="text-[#393e41 flex hidden items-center gap-5 text-base font-semibold">
                  <Link href={`/pagination`}>Events</Link>
                  <h3>Create</h3>
                </div>
                {/* <Button className="hidden rounded-3xl bg-transparent text-base font-semibold text-[#393e41] hover:rounded-3xl hover:bg-[#e94f37] hover:text-white md:block">
                  Register
                </Button> */}
              </div>
            </div>
          ) : (
            <Link href="/register">
              <Button className="rounded-3xl bg-transparent text-base font-semibold text-[#393e41] hover:rounded-3xl hover:bg-[#e94f37] hover:text-white">
                Register
              </Button>
            </Link>
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
