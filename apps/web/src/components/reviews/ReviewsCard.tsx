import React, { FC } from "react";
import { Card, CardHeader, CardContent, CardDescription } from "../ui/card";

interface ReviewCardProps {
  id: number;
  review: string;
  rating: number;
  userId: number;
  eventId: number;
}

const ReviewCard = () => {
  return (
    <div className="container mx-auto py-4">
      <h2 className="py-4 text-center text-3xl">Reviews Event and Ratings</h2>
      <div className="grid grid-cols-2 gap-6">
        <Card className="max-w-6xl">
          <CardHeader>
            <div className="flex justify-between">
              <h3 className="text-center text-sm font-bold">Awesome Event!</h3>
              <h3 className="text-center text-sm font-bold">Andy</h3>
            </div>
          </CardHeader>
          <CardDescription>
            <h1 className="text-s p-2 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ab
              ducimus perspiciatis ex cumque eum soluta repudiandae saepe nam
              quaerat.
            </h1>
          </CardDescription>
        </Card>
        <Card className="max-w-6xl">
          <CardHeader>
            <div className="flex justify-between">
              <h3 className="text-center text-sm font-bold">Awesome Event!</h3>
              <h3 className="text-center text-sm font-bold">Andy</h3>
            </div>
          </CardHeader>
          <CardDescription>
            <h1 className="text-s p-2 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ab
              ducimus perspiciatis ex cumque eum soluta repudiandae saepe nam
              quaerat.
            </h1>
          </CardDescription>
        </Card>
        <Card className="max-w-6xl">
          <CardHeader>
            <div className="flex justify-between">
              <h3 className="text-center text-sm font-bold">Awesome Event!</h3>
              <h3 className="text-center text-sm font-bold">Andy</h3>
            </div>
          </CardHeader>
          <CardDescription>
            <h1 className="text-s p-2 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ab
              ducimus perspiciatis ex cumque eum soluta repudiandae saepe nam
              quaerat.
            </h1>
          </CardDescription>
        </Card>
        <Card className="max-w-6xl">
          <CardHeader>
            <div className="flex justify-between">
              <h3 className="text-center text-sm font-bold">Awesome Event!</h3>
              <h3 className="text-center text-sm font-bold">Andy</h3>
            </div>
          </CardHeader>
          <CardDescription>
            <h1 className="text-s p-2 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ab
              ducimus perspiciatis ex cumque eum soluta repudiandae saepe nam
              quaerat.
            </h1>
          </CardDescription>
        </Card>
      </div>
    </div>
  );
};

export default ReviewCard;
