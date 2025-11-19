"use client";
import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import NotesTitle from "./NotesTitle";
import SplitText from "./SplitText";

const Notes: React.FC = () => {
  const { selectedNoteId, notes } = useAppSelector((state) => state.notes);
  const selectedNote = notes?.find((note) => note?.id === selectedNoteId);
  const [isSplitTextClicked, setIsSplitTextClicked] = useState(false);
  const splitTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        splitTextRef.current &&
        !splitTextRef.current.contains(event.target as Node)
      ) {
        setIsSplitTextClicked(false);
      }
    };

    if (isSplitTextClicked) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSplitTextClicked, selectedNote]);

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
            <div className="text-3xl h-[calc(100%-40px)] flex flex-col justify-center items-center">
              <div
                ref={splitTextRef}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsSplitTextClicked(true);
                }}
                className={
                  isSplitTextClicked
                    ? "hidden"
                    : "inline-block cursor-text"
                }
              >
                <SplitText text={"Start Typing..."} />
              </div>
              <div className={isSplitTextClicked ? "opacity-50" : "hidden"}>Start Typing...</div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Notes;
