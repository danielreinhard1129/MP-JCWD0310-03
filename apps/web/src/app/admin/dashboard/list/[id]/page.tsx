"use client";
import EventCard from "@/components/card/EventCard";
import ExploreEvents from "@/components/event/ExploreEvents";
import { RootState } from "@/redux/store";
import { IEvent } from "@/types/event.type";
import { appConfig } from "@/utils/config";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ListEvents = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const { id } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    fetch(`http://localhost:8000/api/events/organizer/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setEvents(json.events);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [id]); // Include id in the dependency array

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid md:grid-cols-3 md:gap-5">
      {/* Mapping over events array and rendering EventCard components */}
      {events.map((event) => (
        <div className="">
          <EventCard
            key={event.id}
            location={event.location}
            title={event.title}
            price={Number(event.price)}
            start_event={new Date(event.start_event)}
            eventId={event.id}
            imageUrl={appConfig.baseUrl + `/assets${event.thumbnail}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ListEvents;
