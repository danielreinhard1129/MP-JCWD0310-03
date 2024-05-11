import React from 'react';
import EventCard from '../card/EventCard';

const EventCarousel = () => {
  return (
    <div>
      <h1 className="p-5 text-xl font-bold">Events Recomendation</h1>
      <div className="carousel carousel-center max-w-full mx-auto p-4 space-x-4  rounded-box">
        <div className="carousel-item">
          <EventCard />
        </div>
        <div className="carousel-item">
          <EventCard />
        </div>
        <div className="carousel-item">
          <EventCard />
        </div>
        <div className="carousel-item">
          <EventCard />
        </div>
        <div className="carousel-item">
          <EventCard />
        </div>
      </div>
    </div>
  );
};

export default EventCarousel;
