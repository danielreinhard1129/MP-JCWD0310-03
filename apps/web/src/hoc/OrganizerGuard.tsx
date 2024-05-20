"use client";

import { RootState } from "@/redux/store";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function AuthGuardOrganizer(Component: any) {
  return function IsAuth(props: any) {
    const [isLoading, setIsLoading] = useState(true);

    const { id, role } = useSelector((state: RootState) => state.user);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, []);

    useEffect(() => {
      if (!id && !isLoading) {
        redirect("/admin/login");
      }
    }, [id, isLoading]);

    useEffect(() => {
      if (role === "CUSTOMER" && !isLoading) {
        alert("Please sign up or sign in as an organizer");
        redirect("/admin/login");
      }
    }, [role, isLoading]);

    if (isLoading || !id) {
      return (
        <h1 className="container flex h-screen justify-center px-4 pt-24 text-4xl font-extrabold">
          Loading...
        </h1>
      );
    }

    return <Component {...props} />;
  };
}
