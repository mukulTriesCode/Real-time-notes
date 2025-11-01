import React from "react";
import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/layout/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Sidebar />
      <Dashboard />
    </div>
  );
}
