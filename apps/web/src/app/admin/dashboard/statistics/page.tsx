"use client";
import ChartByMonth from "@/components/charts/ByMonth";
import ChartByYear from "@/components/charts/ByYear";
import AuthGuardOrganizer from "@/hoc/OrganizerGuard";
import React from "react";

const Statistic = () => {
  return (
    <div className="flex flex-col gap-5">
      <ChartByMonth />
      <ChartByYear />
    </div>
  );
};

export default AuthGuardOrganizer(Statistic);
