import { addNote } from "@/redux/features/notes/notesSlice";
import { useAppDispatch } from "@/redux/hooks";
import React from "react";
import PlusIcon from "./icons/PlusIcon";

const AddNote: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleAddNote = () => {
    dispatch(addNote());
  };

  return (
    <div
      className="flex items-center gap-2 font-semibold px-2 py-1 hover:bg-light-gray rounded-md cursor-pointer transition"
      onClick={handleAddNote}
    >
      <PlusIcon />
      <span>Add Note</span>
    </div>
  );
};

export default AddNote;
