"use client";
import React from "react";
import AddNote from "../AddNote";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectNote } from "@/redux/features/notes/notesSlice";

const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedNoteId, notes } = useAppSelector((state) => state.notes);
  const hasNotes = notes && notes.length > 0;
  const handleSelectNote = (id: string) => {
    dispatch(selectNote(id));
  };
  return (
    <aside className="max-w-60 w-full bg-primary border-r border-light-gray p-4 text-gray">
      <h2 className="font-bold mb-2 text-white">Notes app</h2>
      <AddNote />
      <div className="mt-4 mb-1 notes-btn">
        <span className="text-sm text-gray/70">Your Notes</span>
      </div>
      <div className="mt-1 flex flex-col gap-0.5 overflow-y-auto max-h-[350px]">
        {hasNotes ? (
          notes?.map((note) => (
            <div
              onClick={() => handleSelectNote(note.id)}
              key={note?.id}
              className={`notes-btn ${
                selectedNoteId === note.id ? "bg-light-gray" : ""
              }`}
            >
              {note?.title}
            </div>
          ))
        ) : (
          <div className="text-sm text-gray/50 italic px-2">
            No notes available
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
