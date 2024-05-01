import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { CalendarCheck, Hammer, Home, Menu, Ticket } from 'lucide-react';

export const Header = () => {
  return (
    <div className="p-3 bg-black flex justify-between border-b border-gray-600">
      <h1 className="text-white font-bold">EVENTIFY.</h1>
      <div className="hidden">
        <h3>Home</h3>
        <h3>Services</h3>
        <h3>Events</h3>
        <h3>Create Events</h3>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Menu color="white" />
        </SheetTrigger>
        <SheetContent className="bg-[#0E0E11] border-none">
          <SheetHeader>
            <SheetTitle className="text-white text-end">EVENTIFY.</SheetTitle>
          </SheetHeader>
          <div className="py-3">
            <div className="flex justify-end gap-3 py-3">
              <h3 className="text-[#9F9FA8] text-end text-sm">Home</h3>
              <Home color="#9F9FA8" size={20} />
            </div>
            <div className="flex justify-end gap-3 py-3">
              <h3 className="text-[#9F9FA8] text-end text-sm">Events</h3>
              <Ticket color="#9F9FA8" size={20} />
            </div>
            <div className="flex justify-end gap-3 py-3">
              <h3 className="text-[#9F9FA8] text-end text-sm">Service</h3>
              <Hammer color="#9F9FA8" size={20} />
            </div>
            <div className="flex justify-end gap-3 py-3">
              <h3 className="text-[#9F9FA8] text-end text-sm">Create Event</h3>
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
