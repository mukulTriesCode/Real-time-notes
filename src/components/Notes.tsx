"use client";
import React from "react";
import { useAppSelector } from "@/redux/hooks";
import NotesTitle from "./NotesTitle";
import SplitText from "./SplitText";

const Notes: React.FC = () => {
  const { selectedNoteId, notes } = useAppSelector((state) => state.notes);
  const selectedNote = notes?.find((note) => note?.id === selectedNoteId);

  return (
    <div>
      <NotesTitle />
      {selectedNote && (
        <div className="px-10 py-5">
          {selectedNote.content ? (
            <div>{selectedNote.content}</div>
          ) : (
            <SplitText text={"Start Typing..."} />
          )}
        </div>
      )}
    </div>
  );
};

export default Notes;
