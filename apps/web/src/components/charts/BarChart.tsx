"use client";
import { data } from "@/dummy/data";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const BarChartComponent = () => {
  return (
    <ResponsiveContainer height={500}>
      <BarChart width={400} height={300} data={data}>
        <CartesianGrid />
        <YAxis />
        <XAxis dataKey="month" />
        <Tooltip />
        <Bar
          dataKey="sales"
          type="monotone"
          fill="blue"
          stroke="black"
          opacity={0.5}
        />
        <Bar
          dataKey="returned"
          type="step"
          fill="red"
          stroke="yellow"
          opacity={1}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
