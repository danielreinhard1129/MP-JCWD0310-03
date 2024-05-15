import { DashboardTemplate } from "@/components/dashboard/DashboardTemplate";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardTemplate>{children}</DashboardTemplate>;
}
