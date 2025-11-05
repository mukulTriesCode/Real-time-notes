"use client";
import React from "react";
import { useAppSelector } from "@/redux/hooks";

const Notes: React.FC = () => {
  const { selectedNoteId, notes } = useAppSelector((state) => state.notes);
  const selectedNote = notes.find((note) => note.id === selectedNoteId);
  return (
    <div>
      <h5 className="font-bold mb-4">{selectedNote?.title}</h5>
      {selectedNote && (
        <div>
          <h3 className="font-bold mt-4">Note Details:</h3>
          <p>{selectedNote.content}</p>
        </div>
      )}
    </div>
  );
};

export default Notes;
