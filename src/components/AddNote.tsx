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
      className="notes-btn"
      onClick={handleAddNote}
    >
      <PlusIcon />
      <span>Add Note</span>
    </div>
  );
};

export default AddNote;
