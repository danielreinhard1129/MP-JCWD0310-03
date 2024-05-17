import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <div className="h-[360px] bg-[#f5f5f5]">
      <div className="grid grid-cols-2 p-6 md:grid-cols-4 md:justify-items-center">
        <div className="mt-3 text-[#393e41]">
          <h1 className="font-bold">Tentang</h1>
          <p className="text-sm">About us</p>
          <p className="text-sm">Blogs</p>
        </div>
        <div className="mt-3 text-[#393e41]">
          <h1 className="font-bold">Categories</h1>
          <p className="text-sm">Music</p>
          <p className="text-sm">Sport</p>
          <p className="text-sm">Conference</p>
          <p className="text-sm">Holiday</p>
        </div>
        <div className="mt-3 text-[#393e41]">
          <h1 className="font-bold">Information</h1>
          <p className="text-sm">Privacy and policy</p>
          <p className="text-sm">FAQ</p>
          <p className="text-sm">Tickets</p>
        </div>
        <div className="mt-3 text-[#393e41]">
          <h1 className="font-bold">Organizer</h1>
          <p className="text-sm">Creator</p>
          <p className="text-sm">Sign up</p>
          <p className="text-sm">Sign in</p>
        </div>
      </div>
      <h1 className="text-center text-xl font-bold text-[#393e41] md:mt-6">
        EVENTIFY
      </h1>
      <div className="mt-3 flex justify-center gap-5">
        <Instagram color="gray" />
        <Twitter color="gray" />
        <Youtube color="gray" />
        <Facebook color="gray" />
        <Linkedin color="gray" />
      </div>
      <p className="mt-3 text-center text-sm text-[#393e41]">
        <span>&copy;</span>2024 Eventify. All Rights Reserved
      </p>
    </div>
  );
};
