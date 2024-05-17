"use client";
import { RootState } from "@/redux/store";
import {
  BarChart3,
  CalendarClock,
  CalendarPlus2,
  Check,
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
    <main className="flex h-screen">
      <aside className="flex flex-col justify-between border-r-2 p-8 md:w-[230px]">
        <div className="">
          <Link className="menu" href="/admin/dashboard/statistics">
            <BarChart3 size={15} />
            Statistics
          </Link>

          <Link className="menu" href={`/admin/dashboard/list/${id}`}>
            <CalendarClock size={15} />
            Events
          </Link>
          <Link className="menu" href="/admin/dashboard/create">
            <CalendarPlus2 size={15} />
            Create
          </Link>
          <Link className="menu" href="/">
            <Check size={15} />
            Approval
          </Link>
          <Link className="menu" href="/admin/dashboard/profile">
            <User size={15} />
            Profile
          </Link>
        </div>
        <div className="menu"> Logout</div>
      </aside>
      <section className="p-8 md:w-[calc(100vw-230px)]">
        <div className="m-auto md:max-w-5xl">{children}</div>
      </section>
    </main>
  );
};
