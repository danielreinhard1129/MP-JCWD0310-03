"use client";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import AuthGuardOrganizer from "@/hoc/OrganizerGuard";
import useAcceptTransaction from "@/hooks/api/transactions/useApprovedTransaction";
import { axiosInstance } from "@/lib/axios";
import { FC } from "react";
import { Check, CircleX } from "lucide-react";

export interface ApiResponse {
  id?: number;
  userId?: number;
  eventId?: number;
  qty: number;
  status: string;
  total_price: number;
  pointUsed: number;
  approval_image: string;
  createdAt?: string;
  updatedAt?: string;
  user?: User;
  event?: Event;
}
interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
  referral: string;
  createdAt: string;
  updatedAt: string;
}

// export enum TransType {
//   WAITING = "WAITING",
//   PENDING = "PENDING",
//   APPROVED = "APPROVED",
//   REJECTED = "REJECTED",
// }

interface Event {
  id: number;
  title: string;
  price: string;
  location: string;
  description: string;
  limit: number;
  booked: number;
  is_free: boolean | null;
  start_event: string;
  end_event: string;
  category: string;
  userId: number;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
}
const TableAdmin: FC<ApiResponse> = ({
  eventId,
  qty,
  status,
  total_price,
  pointUsed,
  approval_image,
  user,
  event,
  userId,
}) => {
  const [transactions, setTransactions] = useState<ApiResponse[]>([]);
  const { id } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    fetch(`http://localhost:8000/api/transactions/organizer/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setTransactions(json);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const updateTransactionStatus = async (
    transactionId: number,
    newStatus: string,
  ) => {
    try {
      const response = await axiosInstance.put(
        `/transactions/approve/${transactionId}`,
      );
      setTransactions(
        transactions.map((txn) =>
          txn.id === transactionId ? { ...txn, status: newStatus } : txn,
        ),
      );
    } catch (error) {
      console.error(
        `Error updating transaction ${transactionId} to ${newStatus}:`,
        error,
      );
    }
  };

  const handleApprove = (transactionId: number) => () =>
    updateTransactionStatus(transactionId, "APPROVED");
  const handleReject = (transactionId: number) => () =>
    updateTransactionStatus(transactionId, "REJECTED");

  console.log("transss: ", transactions);

  const { accepting } = useAcceptTransaction();
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
          {transactions.map((trans) => (
            <TableRow key={trans.id}>
              <TableCell className="text-center">
                {trans.user?.username}
              </TableCell>
              <TableCell className="text-center">
                {trans.event?.title}
              </TableCell>
              <TableCell className="text-center">{trans.qty}</TableCell>
              <TableCell className="text-center">
                {trans.event?.price}
              </TableCell>
              <TableCell className="text-center">{trans.total_price}</TableCell>
              <TableCell className="text-center">
                {trans.approval_image}
              </TableCell>
              <TableCell className="text-center">{trans.status}</TableCell>
              <TableCell className="flex gap-3 text-center">
                <button
                  onClick={() => {
                    accepting(Number(trans.id));
                  }}
                >
                  <Check />
                </button>
                <button onClick={handleReject(Number(trans.id))}>
                  <CircleX />
                </button>
              </TableCell>
              {/* <TableCell className="text-right">{trans.status}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div>
        <Pagination
          total={meta?.total || 0}
          take={meta?.take || 0}
          onChangePage={handleChangePaginate}
        />
      </div> */}
    </div>
  );
};

export default AuthGuardOrganizer(TableAdmin);
