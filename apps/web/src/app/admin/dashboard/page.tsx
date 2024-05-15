"use client";
import AuthGuardOrganizer from "@/hoc/OrganizerGuard";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default AuthGuardOrganizer(Dashboard);

// <div className="grid grid-cols-1 md:mx-auto md:max-w-[100%] md:grid-cols-4">
//   {/* sidebar */}
//   <div className="col-span-1 mx-2 my-3 hidden h-[600px] rounded-lg bg-white shadow-2xl md:block">
//     <div className="flex h-full flex-col items-center justify-evenly">
//       <div className="flex items-center gap-3">
//         <BarChart3 />
//         <Link
//           href={`/dashboard`}
//           className="rounded-lg p-3 text-[15px] font-bold text-black transition-colors hover:bg-blue-800 hover:text-white"
//         >
//           Statistics
//         </Link>
//       </div>
//       <div className="flex items-center gap-3">
//         <CalendarCheck />
//         <p className="rounded-lg p-3 text-[15px] font-bold text-black transition-colors hover:bg-blue-800 hover:text-white">
//           Events
//         </p>
//       </div>
//       <div className="flex items-center gap-3">
//         <BadgePlus />
//         <Link
//           href={`/admin/create`}
//           className="rounded-lg p-3 text-[15px] font-bold text-black transition-colors hover:bg-blue-800 hover:text-white"
//         >
//           Create
//         </Link>
//       </div>
//       <div className="flex items-center gap-3">
//         <CircleUserRound />
//         <Link
//           href={`/profile`}
//           className="rounded-lg p-3 text-[15px] font-bold text-black transition-colors hover:bg-blue-800 hover:text-white"
//         >
//           Profile
//         </Link>
//       </div>
//     </div>
//   </div>
//   {/* end sidebar */}

//   {/* main */}
//   <div className="my-3 flex flex-col items-center rounded-lg bg-white shadow-xl md:col-span-3">
//     <BarChartComponent />
//     {/* <BarChartComponent />
//       <BarChartComponent />
//       <BarChartComponent /> */}
//   </div>
//   {/* end main */}
// </div>
