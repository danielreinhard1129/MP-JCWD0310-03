"use client";
import { useEffect, useState } from "react";
import CardEvent from "../card/CardEvent";
import { IEvent } from "@/types/event.type";
import { appConfig } from "@/utils/config";

const EventCarousel = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/events")
      .then((res) => res.json())
      .then((json) => {
        setEvents(json.events);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container  grid grid-cols-1 gap-5 px-4 py-4 md:grid-cols-4">
      {events.map((event, index) => (
        // <div key={event.id}>
        <CardEvent
          key={index}
          location={event.location}
          title={event.title}
          price={event.price}
          start_event={new Date(event.start_event)}
          eventId={event.id}
          imageUrl={appConfig.baseUrl + `/assets${event.thumbnail}`}
        />
        // </div>
      ))}
      {/* <ExploreEvents /> */}
    </div>
  );
  // return (
  //   <div>
  //     <div className="container px-4 py-4">
  //       <h1 className="text-xl font-bold text-[#393e41]">
  //         Events Recomendation
  //       </h1>
  //       <div className="carousel carousel-center my-3 max-w-full  gap-5 space-x-4 rounded-box md:mx-auto md:h-[290px] md:max-w-full">
  //         <div className="carousel-item">
  //           <CardEvent
  //             eventId={1}
  //             imageUrl="/evt.jpg"
  //             location="Washington"
  //             price={100000}
  //             title="Washington Festival"
  //           />
  //         </div>
  //         <div className="carousel-item">
  //           <CardEvent
  //             eventId={1}
  //             imageUrl="/evt.jpg"
  //             location="Washington"
  //             price={100000}
  //             title="Washington Festival"
  //           />
  //         </div>
  //         <div className="carousel-item">
  //           <CardEvent
  //             eventId={1}
  //             imageUrl="/evt.jpg"
  //             location="Washington"
  //             price={100000}
  //             title="Washington Festival"
  //           />
  //         </div>
  //         <div className="carousel-item">
  //           <CardEvent
  //             eventId={1}
  //             imageUrl="/evt.jpg"
  //             location="Washington"
  //             price={100000}
  //             title="Washington Festival"
  //           />
  //         </div>
  //         <div className="carousel-item">
  //           <CardEvent
  //             eventId={1}
  //             imageUrl="/evt.jpg"
  //             location="Washington"
  //             price={100000}
  //             title="Washington Festival"
  //           />
  //         </div>
  //         <div className="carousel-item">
  //           <CardEvent
  //             eventId={1}
  //             imageUrl="/evt.jpg"
  //             location="Washington"
  //             price={100000}
  //             title="Washington Festival"
  //           />
  //         </div>
  //         <div className="carousel-item">
  //           <CardEvent
  //             eventId={1}
  //             imageUrl="/evt.jpg"
  //             location="Washington"
  //             price={100000}
  //             title="Washington Festival"
  //           />
  //         </div>
  //         <div className="carousel-item">
  //           <CardEvent
  //             key={1}
  //             eventId={1}
  //             imageUrl="/evt.jpg"
  //             location="Washington"
  //             price={100000}
  //             title="Washington Festival"
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default EventCarousel;
