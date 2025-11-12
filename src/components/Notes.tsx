"use client";
import React from "react";
import { useAppSelector } from "@/redux/hooks";
import NotesTitle from "./NotesTitle";
import SplitText from "./SplitText";

const Notes: React.FC = () => {
  const { selectedNoteId, notes } = useAppSelector((state) => state.notes);
  const selectedNote = notes?.find((note) => note?.id === selectedNoteId);

  return (
    <div className="h-full">
      <NotesTitle />
      {selectedNote && (
        <>
          {selectedNote.content ? (
            <div className="px-10 py-5">
              <div>{selectedNote.content}</div>
            </div>
          ) : (
            <div className="text-3xl h-full flex flex-col justify-center items-center">
              <SplitText text={"Start Typing..."} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Notes;
