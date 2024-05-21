import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

const TransactionDetail = () => {
  return (
    <div className="container mx-auto items-center px-4">
      <div>
        <Card className="w-80">
          <CardHeader className="text-center">
            <CardTitle className="text-lg">Transaction Detail</CardTitle>
            <CardDescription className="text-center text-2xl">
              300.000
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <p className="text-center">2 Tickets</p>
            <p className="text-center">Music</p>
            <p className="text-center">JOGJA FEST</p>
            <hr />
            <div className="w-20 rounded bg-green-300 text-center">Pending</div>
            <p className="text-center">19 September 2024 8:30 pm</p>
            <p className="text-center">Transaction ID</p>
            <p className="text-center">0800396046</p>
            <hr />
          </CardContent>
          <CardFooter>
            <div className="flex w-full flex-col justify-between">
              <div className="flex justify-between">
                <p>Initiated On</p>
                <p>21/05/2024</p>
              </div>
              <div className="flex justify-between">
                <p>Transaction By</p>
                <p>Andy</p>
              </div>
              <div className="flex justify-between">
                <p>Point Use</p>
                <p>10</p>
              </div>
            </div>
          </CardFooter>
          <Button className="items-center">Confirm Payment</Button>
        </Card>
          
      </div>
    </div>
  );
};

export default TransactionDetail;
