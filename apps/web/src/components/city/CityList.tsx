import React from 'react';

const CityList = () => {
  return (
    <div className=" p-3">
      <div className="carousel rounded-box w-full mt-3 gap-3 ">
        <div className="flex justify-center gap-3 md:mx-auto md:gap-10">
          <div>
            <div className="carousel-item w-[150px] md:w-[200px]">
              <img src="/sby.png" className="rounded-md" />
            </div>
            <h3 className="text-center font-semibold">Surabaya</h3>
          </div>

          <div>
            <div className="carousel-item w-[150px] md:w-[200px]">
              <img src="/ygy.png" className="rounded-md" />
            </div>
            <h1 className="text-center font-semibold">Yogyakarta</h1>
          </div>

          <div>
            <div className="carousel-item w-[150px] md:w-[200px]">
              <img src="/bdg.png" className="rounded-md" />
            </div>
            <h1 className="text-center font-semibold">Bandung</h1>
          </div>

          <div>
            <div className="carousel-item w-[150px] md:w-[200px]">
              <img src="/Balii.png" className="rounded-md" />
            </div>
            <h1 className="text-center font-semibold">Bali</h1>
          </div>

          <div>
            <div className="carousel-item w-[150px] md:w-[200px]">
              <img src="/Jabodetabek.png" className="rounded-md" />
            </div>
            <h1 className="text-center font-semibold">Jabodetabek</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityList;
