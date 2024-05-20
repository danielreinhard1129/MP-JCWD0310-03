"use client";

import AuthGuardOrganizer from "@/hoc/OrganizerGuard";

const page = () => {
  return <div>Dashboard</div>;
};

export default AuthGuardOrganizer(page);
