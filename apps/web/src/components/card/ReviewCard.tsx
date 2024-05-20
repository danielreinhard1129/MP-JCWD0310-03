import React, { FC } from "react";
import { Card, CardHeader, CardContent, CardDescription} from "../ui/card";

interface ReviewCardProps {
  id: number;
  review: string;
  rating: number;
  userId: number;
  eventId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const ReviewCard: FC<ReviewCardProps> = ({
    review,
    userId,
    rating,
}) => {
  return (
    <div className="container mx-auto">
        <h2 className="text-4xl text-center">Reviews Event and Ratings</h2>
        <Card className="max-w-6xl">
            <CardHeader>
              <h3 className="text-center font-bold text-lg">Awesome Event!{review}</h3>
            </CardHeader>
            <CardContent>
              <h2 className="text-center font-semibold text-sm">Andy4390{userId}</h2>
            </CardContent>
            <CardDescription>
                <h1 className="text-justify text-s p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ab ducimus perspiciatis ex cumque eum soluta repudiandae saepe nam quaerat.{rating}</h1>
            </CardDescription>
          </Card>

        </div>
  )
};

export default ReviewCard;
