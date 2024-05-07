import BurgerMenu from "./BurgerMenu";
import NavList from "./NavList";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";

export const Header = () => {
  return (
    <div className="max-w-full bg-[#28527A] ">
      <div className="flex h-[60px] items-center justify-between p-[16px] md:mx-auto md:h-[90px] md:max-w-[1100px]">
        <h3 className="font-semibold text-white ">Eventify.</h3>
        <div className="hidden md:block">
          <NavList />
        </div>

        <div className="md:hidden">
          <BurgerMenu />
        </div>
      </div>
    </div>
  );
};
