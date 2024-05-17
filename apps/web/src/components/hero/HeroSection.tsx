"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container my-5">
      <div className="mx-auto max-w-[90%] md:max-w-[96%]">
        <Carousel>
          <CarouselContent className="max-w-full">
            <CarouselItem>
              <div className="relative h-[200px] md:h-[400px]">
                <Image
                  fill
                  src={`/prt.jpg`}
                  alt="thumbnail image"
                  className="rounded-lg bg-slate-200 object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[200px] md:h-[400px]">
                <Image
                  fill
                  src={`/prt2.jpg`}
                  alt="thumbnail image"
                  className="rounded-lg bg-slate-200 object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[200px] md:h-[400px]">
                <Image
                  fill
                  src={`/prt3.jpg`}
                  alt="thumbnail image"
                  className="rounded-lg bg-slate-200 object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[200px] md:h-[400px]">
                <Image
                  fill
                  src={`/prt4.jpg`}
                  alt="thumbnail image"
                  className="rounded-lg bg-slate-200 object-cover"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[200px] md:h-[400px]">
                <Image
                  fill
                  src={`/prt5.jpg`}
                  alt="thumbnail image"
                  className="rounded-lg bg-slate-200 object-cover"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
