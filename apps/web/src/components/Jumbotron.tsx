"use client";
import Image from "next/image";

const Jumbotron = () => {
  return (
    <div className="mt-3 flex justify-center">
      <Image
        src="/evt.jpg"
        width={370}
        height={200}
        alt="jumbotron"
        className="rounded-md md:h-[500px] md:w-[1100px]"
      />
    </div>
  );
};

export default Jumbotron;
