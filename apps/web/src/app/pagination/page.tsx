"use client";
import React from "react";
import Autocomplete from "@/components/pagination/AutoComplete";
import Pagination from "@/components/pagination/Pagination";
import CardEvent from "@/components/card/CardEvent";
import useGetEvents from "@/hooks/api/events/useGetPagination";
import { useState } from "react";
import { appConfig } from "@/utils/config";

const PaginationPage = () => {
  const [page, setPage] = useState<number>(1);
  const { data: events, meta } = useGetEvents({
    page,
    take: 4,
  });

  const handleChangePaginate = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <Autocomplete />
      <section className="mx-auto grid w-full max-w-[95%] grid-cols-4">
        {events.map((event, index) => {
          return (
            <CardEvent
              imageUrl={appConfig.baseUrl + `/assets${event.thumbnail}`}
              key={index}
              eventId={event.id}
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
};

export default PaginationPage;
