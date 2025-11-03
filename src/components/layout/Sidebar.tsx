import type { NoteInterface } from "@/types";
import React from "react";
import AddNote from "../AddNote";

const Sidebar: React.FC<{ notes: NoteInterface[] }> = ({ notes }) => {
  return (
    <aside className="max-w-60 w-full bg-primary border-r border-light-gray p-4 text-gray">
      <h2 className="font-bold mb-2 text-white">Notes</h2>
      <AddNote />
      <ul>
        {notes?.map((note) => (
          <li key={note?.id} className="border-b border-gray-400 py-2">
            {note?.title}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
