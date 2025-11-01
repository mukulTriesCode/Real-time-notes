import type { NoteInterface } from "@/types";
import React from "react";

const Sidebar: React.FC<{ notes: NoteInterface[] }> = ({ notes }) => {
  return (
    <aside className="col-span-1 bg-gray-300 p-4">
      <h2 className="font-bold mb-2">Notes</h2>
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
