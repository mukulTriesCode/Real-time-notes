'use client';
import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/layout/Sidebar";
import { useAppSelector } from "@/redux/hooks";
import React from "react";

const Page: React.FC = () => {
  const { notes, selectedNoteId } = useAppSelector((state) => state.notes);
  return (
    <div className="grid grid-cols-8 h-full">
      <Sidebar notes={notes} />
      <Dashboard selectedNoteId={selectedNoteId} />
    </div>
  );
};

export default Page;
