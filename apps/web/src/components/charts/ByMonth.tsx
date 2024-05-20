"use client";

import { ApiResponse } from "@/components/table/TableAdmin";
import { RootState } from "@/redux/store";
import { IEvent } from "@/types/event.type";
import { faker } from "@faker-js/faker";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

// Register ChartJS modules only once
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const ChartByMonth = () => {
  const { id } = useSelector((state: RootState) => state.user);
  const [transactions, setTransactions] = useState<ApiResponse[]>([]);
  const [events, setEvents] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8000/api/transactions/organizer/${id}`)
        .then((res) => res.json())
        .then((json) => {
          setTransactions(json);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [id]);

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
  }, [id]);

  const eventsCountPerMonth = Array(12).fill(0);
  if (events) {
    Object.keys(events).forEach((key) => {
      key;
      const date = new Date(events[Number(key)].start_event);
      const month = date.getMonth();
      eventsCountPerMonth[month]++;
    });
  }

  // Initialize counts per month
  const transactionsCountPerMonth = Array(12).fill(0);

  if (transactions && Array.isArray(transactions)) {
    transactions.forEach((transaction) => {
      const date = new Date(transaction.createdAt);
      const month = date.getMonth();
      transactionsCountPerMonth[month]++;
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
        text: "Statistic per Month",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Event",
        data: eventsCountPerMonth,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Transaction",
        data: transactionsCountPerMonth,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Attendees",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "#14C11A",
        backgroundColor: "#0D9111",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default ChartByMonth;
