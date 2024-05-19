import { BarChartComponent } from "@/components/charts/BarChart";
import LineChartComponent from "@/components/charts/LineChart";
import AuthGuardOrganizer from "@/hoc/OrganizerGuard";
import React from "react";

const Statistics = () => {
  return (
    <div>
      {/* <BarChartComponent /> */}
      <LineChartComponent />
    </div>
  );
};

export default AuthGuardOrganizer(Statistics);
