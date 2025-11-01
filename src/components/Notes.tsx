import { useAppSelector } from "@/redux/hooks";
import React from "react";

const Notes: React.FC = () => {
  const { selectedNoteId } = useAppSelector((state) => state.notes);
  return (
    <div>
      <h2 className="font-bold mb-4">Selected Note ID:</h2>
      <p>{selectedNoteId ?? "No note selected"}</p>
    </div>
  );
};

export default Notes;
