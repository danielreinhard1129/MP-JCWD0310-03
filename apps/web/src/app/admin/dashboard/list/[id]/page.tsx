"use client";
import CardEvent from "@/components/card/CardEvent";
import AutoComplete from "@/components/pagination/AutoComplete";
import Pagination from "@/components/pagination/Pagination";
import AuthGuardUser from "@/hoc/CustomerGuard";
import AuthGuardOrganizer from "@/hoc/OrganizerGuard";
import useGetEventsPagination from "@/hooks/api/events/useGetPagination";
import { RootState } from "@/redux/store";
import { IEvent } from "@/types/event.type";
import { appConfig } from "@/utils/config";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ListEvents = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const { id, role } = useSelector((state: RootState) => state.user);
  const [page, setPage] = useState<number>(1);
  const { data: eventss, meta } = useGetEventsPagination({
    page,
    take: 6,
  });

  const handleChangePaginate = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

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
    <div className="container mx-auto">
      <AutoComplete />
      <section className="mx-auto grid grid-cols-3 gap-4">
        {events.map((event: any, index: any) => {
          return (
            <CardEvent
              thumbnail=""
              eventId={event.id}
              imageUrl={appConfig.baseUrl + `/assets${event.thumbnail}`}
              key={index}
              title={event.title}
              location={event.location}
              start_event={event.start_event}
              price={event.price}
            />
          );
        })}
      </section>

      <div className="relative my-8 flex justify-center">
        <div className="absolute top-10">
          <Pagination
            total={meta?.total || 0}
            take={meta?.take || 0}
            onChangePage={handleChangePaginate}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthGuardOrganizer(ListEvents);

// "use client";
// import CardEvent from "@/components/card/CardEvent";
// import AutoComplete from "@/components/pagination/AutoComplete";
// import Pagination from "@/components/pagination/Pagination";
// import AuthGuardOrganizer from "@/hoc/OrganizerGuard";
// import useGetEventsPagination from "@/hooks/api/events/useGetPagination";
// import { RootState } from "@/redux/store";
// import { IEvent } from "@/types/event.type";
// import { appConfig } from "@/utils/config";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// const ListEvents = () => {
//   const [events, setEvents] = useState<IEvent[]>([]);
//   const [loading, setLoading] = useState(true);
//   const { id } = useSelector((state: RootState) => state.user);
//   const [page, setPage] = useState<number>(1);
//   const { data: eventss, meta } = useGetEventsPagination({
//     page,
//     take: 6,
//   });

//   const handleChangePaginate = ({ selected }: { selected: number }) => {
//     setPage(selected + 1);
//   };

//   useEffect(() => {
//     fetch(`http://localhost:8000/api/events/organizer/${id}`)
//       .then((res) => res.json())
//       .then((json) => {
//         setEvents(json.events);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   }, [id]); // Include id in the dependency array

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto">
//       <AutoComplete />
//       <section className="mx-auto grid grid-cols-3 gap-4">
//         {events.map((event: any, index: any) => {
//           return (
//             <CardEvent
//               thumbnail=""
//               eventId={event.id}
//               imageUrl={appConfig.baseUrl + `/assets${event.thumbnail}`}
//               key={index}
//               title={event.title}
//               location={event.location}
//               start_event={event.start_event}
//               price={event.price}
//             />
//           );
//         })}
//       </section>

//       <div className="relative my-8 flex justify-center">
//         <div className="absolute top-10">
//           <Pagination
//             total={meta?.total || 0}
//             take={meta?.take || 0}
//             onChangePage={handleChangePaginate}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthGuardOrganizer(ListEvents);

// return (
//   <div className="grid md:grid-cols-3 md:gap-5">
//     {/* Mapping over events array and rendering EventCard components */}
//     {events.map((event) => (
//       <div className="">
//         <EventCard
//           key={event.id}
//           location={event.location}
//           title={event.title}
//           price={Number(event.price)}
//           start_event={new Date(event.start_event)}
//           eventId={event.id}
//           imageUrl={appConfig.baseUrl + `/assets${event.thumbnail}`}
//         />
//       </div>
//     ))}
//   </div>
// );
