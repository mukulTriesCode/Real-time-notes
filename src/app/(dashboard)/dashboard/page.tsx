"use client";
import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/layout/Sidebar";
import { useAppSelector } from "@/redux/hooks";
import React from "react";

const Page: React.FC = () => {
  const { notes } = useAppSelector((state) => state.notes);
  return (
    <div className="flex h-full">
      <Sidebar notes={notes} />
      <Dashboard />
    </div>
  );
};

export default Page;
