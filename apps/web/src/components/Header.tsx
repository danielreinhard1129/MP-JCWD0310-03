import { Menu, Search } from "lucide-react";

export const Header = () => {
  return (
    <div className="navbar h-[80px] w-full bg-[#1F1F95]">
      <div className="w-full md:mx-auto md:flex md:w-[85%] md:gap-5">
        <div className="navbar-start">
          <h1 className="text-xl  font-bold text-white">EVENTIFY.</h1>
        </div>
        <div className="navbar-start flex justify-center gap-10 text-white">
          <h3 className=" hidden md:block">Explore</h3>
          <h3 className=" hidden md:block">Explore</h3>
          <h3 className=" hidden md:block">Explore</h3>
        </div>
        <div className="md:navbar-end navbar-end flex items-center gap-3">
          <Search color="white" />
          <button className="btn btn-primary btn-sm hidden md:block">
            Register
          </button>
          <Menu color="white" className="md:hidden" />
        </div>
      </div>
    </div>
  );
};
