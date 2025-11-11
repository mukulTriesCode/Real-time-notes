"use client";
import React from "react";
import { useAppSelector } from "@/redux/hooks";
import NotesTitle from "./NotesTitle";

const Notes: React.FC = () => {
  const { selectedNoteId, notes } = useAppSelector((state) => state.notes);
  const selectedNote = notes?.find((note) => note?.id === selectedNoteId);

  return (
    <div>
      <NotesTitle />
      {selectedNote && (
        <div className="px-10 py-5">
          <div>{selectedNote.content || "Start typing your note here..."}</div>
        </div>
      )}
    </div>
  );
};

export default Notes;
