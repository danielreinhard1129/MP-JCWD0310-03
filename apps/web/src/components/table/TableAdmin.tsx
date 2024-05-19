"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React, { FC } from "react";

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
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Username</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Total Price</TableHead>
            <TableHead>Payment approval</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Approval</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{user?.username}</TableCell>
            <TableCell>{event?.location}</TableCell>
            <TableCell>{qty}</TableCell>
            <TableCell>{event?.price}</TableCell>
            <TableCell>{total_price}</TableCell>
            <TableCell>{pointUsed}</TableCell>
            <TableCell>{status}</TableCell>
            <TableCell>+</TableCell>
            <TableCell>-</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default TableAdmin;
// export default TableAdmin;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { RootState } from "@/redux/store";
// import { axiosInstance } from "@/lib/axios";

// const TableAdmin = () => {
//   const [transactions, setTransactions] = useState<Transaction[]>([]);
//   const { id } = useSelector((state: RootState) => state.user);

//   useEffect(() => {
//     // Fetch transactions from your API
//     const fetchTransactions = async () => {
//       try {
//         const response = await axiosInstance.get(
//           `/transactions/organizer/${id}`,
//         );
//         setTransactions(response.data);
//         console.log(transactions);
//       } catch (error) {
//         console.error("Error fetching transactions:", error);
//       }
//     };
//     fetchTransactions();
//   }, []);

//   const updateTransactionStatus = async (id: any, newStatus: any) => {
//     try {
//       const response = await axios.put(`/api/transactions/${id}`, {
//         status: newStatus,
//       });
//       setTransactions(
//         transactions.map((txn) =>
//           txn.id === id ? { ...txn, status: newStatus } : txn,
//         ),
//       );
//     } catch (error) {
//       console.error(`Error updating transaction ${id} to ${newStatus}:`, error);
//     }
//   };

//   const handleApprove = (id: any) => updateTransactionStatus(id, "approved");
//   const handleReject = (id: any) => updateTransactionStatus(id, "rejected");

//   return (
//     <div>
//       <Table>
//         <TableCaption>A list of your recent invoices.</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Username</TableHead>
//             <TableHead>Event</TableHead>
//             <TableHead>Quantity</TableHead>
//             <TableHead>Price</TableHead>
//             <TableHead>Total Price</TableHead>
//             <TableHead>Payment approval</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead>Approval</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {transactions.map((transaction) => (
//             <TableRow key={transaction.id}>
//               <TableCell>{transaction.user.name}</TableCell>
//               <TableCell>{transaction.event.name}</TableCell>
//               <TableCell>{transaction.qty}</TableCell>
//               <TableCell>
//                 Rp {transaction.total_price / transaction.qty}
//               </TableCell>
//               <TableCell>Rp {transaction.total_price}</TableCell>
//               <TableCell>
//                 {transaction.approval_image ? (
//                   <img
//                     src={transaction.approval_image}
//                     alt="Approval"
//                     width={50}
//                     height={50}
//                   />
//                 ) : (
//                   "N/A"
//                 )}
//               </TableCell>
//               <TableCell>{transaction.status}</TableCell>
//               <TableCell>
//                 {transaction.status === "pending" && (
//                   <>
//                     <button onClick={() => handleApprove(transaction.id)}>
//                       Approve
//                     </button>
//                     <button onClick={() => handleReject(transaction.id)}>
//                       Reject
//                     </button>
//                   </>
//                 )}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };
