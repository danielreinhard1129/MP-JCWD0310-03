"use client";

import { RootState } from "@/redux/store";
import { IEvent } from "@/types/event.type";
import { faker } from "@faker-js/faker";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const ChartByYear = () => {
  const { id } = useSelector((state: RootState) => state.user);
  const [events, setEvents] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState(true);
  // const { data: event } = useGetEventsByOrganizer({id:id});
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

  // Define the years you are interested in
  const years = [2020, 2021, 2022, 2023, 2024, 2025];
  const eventsCountPerYear = Array(years.length).fill(0);

  if (events) {
    Object.keys(events).forEach((key: any) => {
      const date = new Date(events[key].start_event);
      const year = date.getFullYear();
      const yearIndex = years.indexOf(year);
      if (yearIndex !== -1) {
        eventsCountPerYear[yearIndex]++;
      }
    });
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Statistics per Year",
      },
    },
  };

  const data = {
    labels: years,
    datasets: [
      {
        label: "Event",
        data: eventsCountPerYear,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Transaction",
        data: years.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Attendees",
        data: years.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "#14C11A",
        backgroundColor: "#0D9111",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default ChartByYear;
