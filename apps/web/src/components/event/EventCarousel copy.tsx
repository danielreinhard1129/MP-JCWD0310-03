import React from "react";
import EventCard from "../card/EventCard";
import CardEvent from "../card/CardEvent";

const EventCarousel = () => {
  return (
    <div>
      <h1 className="p-5 text-xl font-bold">Events Recomendation</h1>
      <div className="carousel carousel-center max-w-full gap-3 space-x-4 rounded-box p-4  md:mx-auto md:max-w-full">
        <div className="carousel-item">
          <CardEvent />
        </div>
        <div className="carousel-item">
          <CardEvent />
        </div>
        <div className="carousel-item">
          <CardEvent />
        </div>
        <div className="carousel-item">
          <CardEvent />
        </div>
        <div className="carousel-item">
          <CardEvent />
        </div>
        <div className="carousel-item">
          <CardEvent />
        </div>
        <div className="carousel-item">
          <CardEvent />
        </div>
        <div className="carousel-item">
          <CardEvent />
        </div>
      </div>
    </div>
  );
};

export default EventCarousel;
