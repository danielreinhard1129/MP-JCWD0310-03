// "use client";
// import Pagination from "@/components/pagination/Pagination";
// import useGetAttendeeList from "@/hooks/api/transactions/useGetAttendeeList";
// import React, { useState } from "react";

// const AttendeesList = () => {
//   const [page, setPage] = useState<number>(1);
//   const { data, meta } = useGetAttendeeList({
//     eventId: 3,
//     page,
//     take: 4,
//   });

//   console.log(data);

//   const handleChangePaginate = ({ selected }: { selected: number }) => {
//     setPage(selected + 1);
//   };
//   return (
//     <div>
//       <section>
//         {data.map((dt: any, idx: any) => {
//           return (
//             <section key={idx}>
//               <h1>{dt.event.title}</h1>
//               <h1>{dt.user.username}</h1>
//             </section>
//           );
//         })}
//       </section>
//       <div className="my-8 flex justify-center">
//         <Pagination
//           total={meta?.total || 0}
//           take={meta?.take || 0}
//           onChangePage={handleChangePaginate}
//         />
//       </div>
//     </div>
//   );
// };

// export default AttendeesList;
"use client";
import CardEvent from "@/components/card/CardEvent";
import Pagination from "@/components/pagination/Pagination";
import useGetAttendeeList from "@/hooks/api/transactions/useGetAttendeeList";
import { appConfig } from "@/utils/config";
import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AttendeesList = () => {
  const [page, setPage] = useState<number>(1);
  const { data, meta } = useGetAttendeeList({
    eventId: 3,
    page,
    take: 6,
  });

  console.log(data);

  const handleChangePaginate = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Username</TableHead>
            <TableHead className="text-center">Event</TableHead>
            <TableHead className="text-center">Quantity</TableHead>
            <TableHead className="text-center">Price</TableHead>
            <TableHead className="text-center">Total Price</TableHead>
            <TableHead className="text-center">Payment approval</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Approval</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((dt) => (
            <TableRow key={dt.id}>
              <TableCell className="text-center">
                {dt?.user?.username}
              </TableCell>
              <TableCell className="text-center">{dt?.event?.title}</TableCell>
              <TableCell className="text-center">
                {dt?.user?.username}
              </TableCell>
              <TableCell className="text-center">{dt?.event?.price}</TableCell>
              {/* <TableCell className="text-center">{dt?.total_price}</TableCell> */}
              {/* <TableCell className="text-center">{dt?.status}</TableCell> */}
              <TableCell className="flex gap-3 text-center">
                {/* Uncomment and add your buttons here */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="my-8 flex justify-center">
        <Pagination
          total={meta?.total || 0}
          take={meta?.take || 0}
          onChangePage={handleChangePaginate}
        />
      </div>
      ;
    </div>
  );
};

export default AttendeesList;
