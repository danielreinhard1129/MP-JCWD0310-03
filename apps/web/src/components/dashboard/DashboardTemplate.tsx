"use client";
import { RootState } from "@/redux/store";
import {
  BarChart3,
  CalendarClock,
  CalendarPlus2,
  Check,
  Receipt,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export const DashboardTemplate = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { id } = useSelector((state: RootState) => state.user);
  return (
    <main className="flex h-[900px]">
      <aside className="flex flex-col justify-between border-r-2 p-8 md:w-[230px]">
        <div className="flex flex-col gap-10">
          <Link
            className="flex w-full items-center gap-2 rounded-lg px-4 py-2 transition duration-300 hover:bg-[#e94f37] hover:text-white"
            href="/admin/dashboard/statistics"
          >
            <BarChart3 size={15} />
            Statistics
          </Link>

          <Link
            className="flex w-full items-center gap-2 rounded-lg px-4 py-2 transition duration-300 hover:bg-[#e94f37] hover:text-white"
            href={`/admin/dashboard/list/${id}`}
          >
            <CalendarClock size={15} />
            Events
          </Link>
          <Link
            className="flex w-full items-center gap-2 rounded-lg px-4 py-2 transition duration-300 hover:bg-[#e94f37] hover:text-white"
            href="/admin/dashboard/create"
          >
            <CalendarPlus2 size={15} />
            Create
          </Link>
          <Link
            className="flex w-full items-center gap-2 rounded-lg px-4 py-2 transition duration-300 hover:bg-[#e94f37] hover:text-white"
            href={`/admin/dashboard/transactions/${id}`}
          >
            <Receipt size={15} />
            Transaction
          </Link>
          <Link
            className="flex w-full items-center gap-2 rounded-lg px-4 py-2 transition duration-300 hover:bg-[#e94f37] hover:text-white"
            href="/admin/dashboard/profile"
          >
            <User size={15} />
            Profile
          </Link>
        </div>
        <div className="flex w-full items-center gap-2 rounded-lg px-4 py-2 transition duration-300 hover:bg-[#e94f37] hover:text-white">
          {" "}
          Logout
        </div>
      </aside>
      <section className="h-full p-8 md:w-[calc(100vw-230px)]">
        <div className="m-auto md:max-w-5xl">{children}</div>
      </section>
    </main>
  );
};
