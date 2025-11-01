import Sidebar from "@/components/layout/Sidebar";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-8 h-full">
      <Sidebar />
      {children}
    </div>
  );
}
