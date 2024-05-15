"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logoutAction } from "@/redux/slices/userSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();
  const { id, username } = useSelector((state: RootState) => state.user);
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(logoutAction());
  };
  return (
    <div className="w-full bg-[#1F1F95]">
      <nav className="sticky top-0 z-50 mx-auto flex h-[80px] w-full   items-center ">
        <div className="container mx-auto max-w-[100%] px-4">
          <div className="navbar mx-auto">
            <Link
              href={`/`}
              className="navbar-start text-xl font-bold text-white"
            >
              Eventify.
            </Link>

            {Boolean(id) ? (
              <div className="navbar mx-auto w-full gap-8 text-white md:items-center ">
                <div className="navbar-center mx-auto hidden max-w-[85%] justify-center gap-10 md:block md:flex">
                  <h3>Explore</h3>
                  <Link href={`/admin/create`}>Create</Link>
                  <button onClick={logout}>Logout</button>
                </div>
                <div className="avatar navbar-end hidden gap-3 md:block md:flex">
                  <div className="flex w-8 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                  <h3>{username}</h3>
                </div>
              </div>
            ) : (
              <div className="navbar flex items-center gap-8 text-white">
                <div className="navbar-end w-full gap-5">
                  <Link href={`/`}>Home</Link>
                  <Link href={`/admin/create`}>Create</Link>
                  <Link href={`/login`}>Login</Link>
                  <Link href={`/register`}>Register</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

// <div className="navbar bg-[#1F1F95] w-full h-[80px]">
//   <div className="md:w-[95%] w-full md:mx-auto md:flex md:gap-5">
//     <div className="navbar-start">
//       <Link href={`/`} className="text-white  font-bold text-xl">
//         EVENTIFY.
//       </Link>
//     </div>
// <div className="navbar-start flex gap-10 text-white justify-center">
//   <h3 className=" hidden md:block">Explore</h3>
//   <Link href={`/admin/events/create`} className=" hidden md:block">
//     Create
//   </Link>
//   <h3 className=" hidden md:block">Explore</h3>
// </div>
// <div className="md:navbar-end navbar-end flex gap-3 items-center">
//   <Search color="white" />
//   <Link href={`/register`}>
//     <button className="btn btn-primary btn-sm hidden md:block text-white ">
//       Register
//     </button>
//   </Link>
//   <Menu color="white" className="md:hidden" />
// </div>
//
// <div className="navbar bg-[#1F1F95] mx-auto max-w-full h-[80px]">
//   <div className=" md:w-[95%]">
//     <div className="navbar-start p-3 md:max-w-[95%]  md:w-[130px]">
//       <h1 className="text-white font-semibold text-lg md:font-bold md:text-2xl  md:w-[120px]">
//         Eventify.
//       </h1>
//     </div>
//   </div>

//   <div className="navbar-end gap-3 p-3 w-full md:hidden">
//     <Search color="white" />
//     <Menu color="white" />
//   </div>
// </div>
