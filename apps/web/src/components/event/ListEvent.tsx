"use client";
import React, { useEffect, useState } from "react";
import EventCard from "../card/EventCard";
import CardEvent from "../card/CardEvent";
import { appConfig } from "@/utils/config";
import { IEvent } from "@/types/event.type";

const ListEvent = () => {
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
    <div>
      <div className="container px-4 py-4">
        <h1 className="mx-[23px] text-xl font-bold text-[#393e41]">
          List Event
        </h1>

        {/* <div className="mt-3 grid grid-cols-1 gap-3 md:mx-auto md:max-w-[100%] md:grid-cols-4 md:gap-3"> */}
        <div className="container  grid grid-cols-1 gap-5 px-4 py-4 md:grid-cols-4">
          {events.map((event: any, index: any) => (
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
      </div>
      <div className="mt-3 flex w-full justify-center md:my-5 md:mb-3 md:flex md:justify-center">
        <button className="btn btn-outline mx-auto w-[150px] rounded-lg hover:bg-[#e94f37] ">
          Explore events
        </button>
      </div>
    </div>
  );
};

export default ListEvent;
