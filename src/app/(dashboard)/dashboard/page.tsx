import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/layout/Sidebar";
import React from "react";

const Page: React.FC = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Page;
