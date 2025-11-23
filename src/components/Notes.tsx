"use client";
import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import NotesTitle from "./NotesTitle";
import SplitText from "./SplitText";
import Tiptap from "./Tiptap";

const Notes: React.FC = () => {
  const { selectedNoteId, notes } = useAppSelector((state) => state.notes);
  const selectedNote = notes?.find((note) => note?.id === selectedNoteId);
  // const [isSplitTextClicked, setIsSplitTextClicked] = useState(false);
  // const splitTextRef = useRef<HTMLDivElement>(null);

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
            <div className="max-w-[750px] h-[calc(100vh-60px)] w-full mx-auto flex flex-col justify-center items-center">
              {/* <div
                ref={splitTextRef}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsSplitTextClicked(true);
                }}
                className={
                  isSplitTextClicked ? "hidden" : "inline-block cursor-text"
                }
              >
                <SplitText text={"Start Typing..."} />
              </div> */}
              {/* <div className={isSplitTextClicked ? "opacity-50" : "hidden"}>Start Typing...</div> */}
              <Tiptap />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Notes;
