"use client";
import EventCard from "@/components/card/EventCard";
import ExploreEvents from "@/components/event/ExploreEvents";
import { IEvent } from "@/types/event.type";
import { appConfig } from "@/utils/config";
import React, { useEffect, useState } from "react";

const ListEvents = () => {
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
    <div className="my-3 grid grid-cols-1 md:grid-cols-4">
      {events.map((event, index) => (
        // <div key={event.id}>
        <EventCard
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
};

export default ListEvents;
