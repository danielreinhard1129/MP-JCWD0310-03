import BurgerMenu from './BurgerMenu';
import { Input } from './ui/input';

export const Header = () => {
  return (
    <div className="bg-gray-900 max-w-full">
      <div className="flex h-[60px] justify-between items-center p-[16px]">
        <h3 className="font-semibold text-white ">Eventify.</h3>
        <BurgerMenu />
      </div>
    </div>
  );
};
