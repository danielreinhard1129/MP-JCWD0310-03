'use client';
import Image from 'next/image';

const Jumbotron = () => {
  return (
    <div className="flex justify-center mt-3">
      <Image
        src="/evt.jpg"
        width={370}
        height={200}
        alt="jumbotron"
        className="rounded-md"
      />
    </div>
  );
};

export default Jumbotron;
