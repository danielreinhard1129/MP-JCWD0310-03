import CardEvent from "../card/CardEvent";

const EventCarousel = () => {
  return (
    <div>
      <div className="container px-4 py-4">
        <h1 className="text-xl font-bold text-[#393e41]">
          Events Recomendation
        </h1>
        <div className="carousel carousel-center my-3 max-w-full  gap-5 space-x-4 rounded-box md:mx-auto md:h-[290px] md:max-w-full">
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
    </div>
  );
};

export default EventCarousel;
