"use client";
import React from "react";
import Notes from "./Notes";
import { useAppSelector } from "@/redux/hooks";
import AddNote from "./AddNote";

const Dashboard: React.FC = () => {
  const { selectedNoteId } = useAppSelector((state) => state.notes);
  return (
    <section className="p-4 bg-primary-dark w-full text-white">
      {selectedNoteId ? (
        <Notes />
      ) : (
        <div className="text-2xl h-full flex flex-col justify-center items-center">
          <h2 className="text-3xl!">Create a Note</h2>
          <AddNote />
        </div>
      )}
    </section>
  );
};

export default Dashboard;
