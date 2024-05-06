"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CalendarCheck, Hammer, Home, Menu, Ticket } from "lucide-react";

const BurgerMenu = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Menu color="white" />
        </SheetTrigger>
        <SheetContent className="border-none bg-[#0E0E11]">
          <SheetHeader>
            <SheetTitle className="text-end text-white">EVENTIFY.</SheetTitle>
          </SheetHeader>
          <div className="py-3">
            <div className="flex justify-end gap-3 py-3">
              <h3 className="text-end text-sm text-[#9F9FA8]">Home</h3>
              <Home color="#9F9FA8" size={20} />
            </div>
            <div className="flex justify-end gap-3 py-3">
              <h3 className="text-end text-sm text-[#9F9FA8]">Events</h3>
              <Ticket color="#9F9FA8" size={20} />
            </div>
            <div className="flex justify-end gap-3 py-3">
              <h3 className="text-end text-sm text-[#9F9FA8]">Service</h3>
              <Hammer color="#9F9FA8" size={20} />
            </div>
            <div className="flex justify-end gap-3 py-3">
              <h3 className="text-end text-sm text-[#9F9FA8]">Create Event</h3>
              <CalendarCheck color="#9F9FA8" size={20} />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              {/* <Button type="submit">Save changes</Button> */}
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default BurgerMenu;
