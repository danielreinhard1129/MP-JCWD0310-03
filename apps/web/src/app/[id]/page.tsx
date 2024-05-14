"use client";


import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import useGetEvent from "@/hooks/api/events/useGetEvent";
import { Share2 } from "lucide-react";
import Image from "next/image";

const EventDetail = ({params}: { params: {id: string}}) => {
    const {event, isLoading} = useGetEvent(Number(params.id));

    if(!event) {
        return null;
    }
    
  return (
    <main className="container mx-auto px-4">
      <section className="mb-4">
        <div className="mb-4 space-y-1.5">
          <Badge variant="outline" className="rounded-sm bg-green-100">
            Category
          </Badge>
          <h1 className="text-4xl font-semibold">TITLE</h1>
          <div className="mb-2 flex items-center justify-between">
            <p className="text-base font-light italic">
              start&endevent - location
            </p>
            <Button variant="outline" size="icon">
              <Share2 size="20px" />
            </Button>
          </div>
        </div>
        <div className="relative h-[400px]">
          <Image
            fill
            src={""}
            alt="thumbnail image"
            className="bg-slate-200 object-cover"
          />
        </div>
      </section>
      
    </main>
  );
};

export default EventDetail;
