"use client";
import React, { useState } from "react";
import useGetRejectedStatus from "@/hooks/api/transactions/useGetRejectedStatus";
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
import { Check, CircleCheck, CircleX, CircleXIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import useRejectTransaction from "@/hooks/api/transactions/useRejectTransaction";
import useAcceptTransaction from "@/hooks/api/transactions/useApprovedTransaction";
import useUpdateTxStatus from "@/hooks/api/tx/useUpdateTxStatus";
import useUpdateTransactionStatus from "@/hooks/api/tx/useUpdateTxStatus";

const StatusList = () => {
  const [page, setPage] = useState<number>(1);
  const { data, meta, isLoading } = useGetRejectedStatus({
    page,
    take: 10,
    userId: 4, // Change to the desired user ID
  });

  const handleChangePaginate = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const { rejectTransaction } = useRejectTransaction();
  const { accepting } = useAcceptTransaction();
  // const { updateStatusTx } = useUpdateTxStatus();
  const { updateStatus } = useUpdateTransactionStatus();

  return (
    <div>
      <Table>
        <TableCaption>
          A list of transactions with status REJECTED or WAITING.
        </TableCaption>
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
                <button
                  onClick={async () =>
                    await updateStatus(Number(dt.id), "APPROVED")
                  }
                >
                  ACC
                </button>
                <button onClick={() => {}}>REJECT</button>
                {/* <div className="flex justify-center gap-4">
                  <Dialog>
                    <DialogTrigger>
                      <CircleXIcon className="text-mythemes-red hover:text-mythemes-red/80 cursor-pointer" />
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undo. This will permanently
                          reject your customer transactions request.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button
                          onClick={() => {
                            // rejecting(values);
                          }}
                        >
                          Reject
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger>
                      <CircleCheck className="cursor-pointer text-green-600 hover:text-green-600/80" />
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undo. This will permanently
                          Accept your customer transactions request.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button
                          onClick={() => {
                            accepting(dt?.id);
                          }}
                        >
                          Accept
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div> */}
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

export default StatusList;
