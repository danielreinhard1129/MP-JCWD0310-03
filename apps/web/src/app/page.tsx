"use client";

import Autocomplete from "@/components/Autocomplete";
import Pagination from "@/components/Pagination";
import CardEvent from "@/components/card/CardEvent";
import CityList from "@/components/city/CityList";
import EventCarousel from "@/components/event/EventCarousel";
import ListEvent from "@/components/event/ListEvent";
import MarqueeEvent from "@/components/event/MarqueeEvent";
import HeroSection from "@/components/hero/HeroSection";
import useGetEvents from "@/hooks/api/events/useGetEvents";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const { data: events, meta } = useGetEvents({
    page,
    take: 4,
  });

  const handleChangePaginate = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  return (
    <div>
      <HeroSection />
      <Autocomplete />
      <EventCarousel />
      <MarqueeEvent />
      <ListEvent />
      <CityList />
      <section className="grid grid-cols-3">
        {events.map((event, index) => {
          return (
            <CardEvent
              key={index}
              title={event.title}
              location={event.location}
              start_event={event.start_event}
              price={event.price}
            />
          );
        })}
      </section>

      <div className="my-8 flex justify-center">
        <Pagination
          total={meta?.total || 0}
          take={meta?.take || 0}
          onChangePage={handleChangePaginate}
        />
      </div>
    </div>
  );
}
