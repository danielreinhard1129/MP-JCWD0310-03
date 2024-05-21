"use client";
import React, { useState } from "react";
import useGetApprovedStatus from "@/hooks/api/transactions/useGetApprovedStatus";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Pagination from "@/components/pagination/Pagination";

const ApprovedStatus = () => {
  const [page, setPage] = useState<number>(1);
  const { data, meta, isLoading } = useGetApprovedStatus({
    page,
    take: 7,
    userId: 4, // Change to the desired user ID
  });

  const handleChangePaginate = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
              <TableCell className="text-center">{dt.user?.username}</TableCell>
              <TableCell className="text-center">{dt.event?.title}</TableCell>
              <TableCell className="text-center">{dt.qty}</TableCell>
              <TableCell className="text-center">{dt.event?.price}</TableCell>
              <TableCell className="text-center">{dt.total_price}</TableCell>
              <TableCell className="text-center">{dt.approval_image}</TableCell>
              <TableCell className="text-center">{dt.status}</TableCell>
              <TableCell className="flex gap-3 text-center">
                {/* Uncomment and add your buttons here */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="my-8 flex justify-center">
        {meta && (
          <Pagination
            total={meta.total}
            take={meta.take}
            onChangePage={handleChangePaginate}
          />
        )}
      </div>
    </div>
  );
};

export default ApprovedStatus;
