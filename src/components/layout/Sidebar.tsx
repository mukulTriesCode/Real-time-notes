import type { NoteInterface } from "@/types";
import React from "react";
import AddNote from "../AddNote";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectNote } from "@/redux/features/notes/notesSlice";

const Sidebar: React.FC<{ notes: NoteInterface[] }> = ({ notes }) => {
  const dispatch = useAppDispatch();
  const selectedNote = useAppSelector((state) => state.notes.selectedNoteId);
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
        {notes?.map((note) => (
          <div
            onClick={() => handleSelectNote(note.id)}
            key={note?.id}
            className={`notes-btn ${
              selectedNote === note.id ? "bg-light-gray" : ""
            }`}
          >
            {note?.title}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
