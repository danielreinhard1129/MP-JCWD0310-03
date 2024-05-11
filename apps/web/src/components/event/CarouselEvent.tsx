import React from 'react';
import EventCard from '../card/EventCard';

const CarouselEvent = () => {
  return (
    <div>
      <h1 className="p-6 text-xl font-bold">Events Recomendation</h1>
      <div className="carousel w-full md:">
        <div id="slide1" className="carousel-item relative w-full md:gap-3">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* <div id="slide2" className="carousel-item relative w-full">
          <EventCard />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div> */}
        {/* <div id="slide3" className="carousel-item relative w-full">
          <EventCard />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div> */}
        {/* <div id="slide4" className="carousel-item relative w-full">
          <EventCard />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CarouselEvent;
