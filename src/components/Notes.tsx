"use client";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import EmojiInput from "./EmojiPicker";
import { updateNote } from "@/redux/features/notes/notesSlice";
import { NoteInterface } from "@/types";
import PageIcon from "./icons/PageIcon";

const Notes: React.FC = () => {
  const { selectedNoteId, notes } = useAppSelector((state) => state.notes);
  const selectedNote = notes.find((note) => note.id === selectedNoteId);
  const [updatedNoteContent, setUpdatedNoteContent] = useState<
    Omit<NoteInterface, "createdAt">
  >({
    id: selectedNote?.id || "",
    title: selectedNote?.title || "",
    content: selectedNote?.content || "",
    updatedAt: new Date().toISOString(),
    icon: selectedNote?.icon || "",
  });
  const dispatch = useAppDispatch();
  const handleTitleClick = () => {
    dispatch(
      updateNote({
        ...updatedNoteContent,
        updatedAt: new Date().toISOString(),
      })
    );
  };
  const handleEmojiClick = (emoji: string) => {
    dispatch(
      updateNote({
        ...updatedNoteContent,
        icon: emoji,
        updatedAt: new Date().toISOString(),
      })
    );
  };
  return (
    <div>
      <div className="relative flex gap-2">
        {selectedNote?.icon ?? <PageIcon />}
        <h5
          onClick={handleTitleClick}
          className="cursor-pointer font-bold mb-4 w-fit"
        >
          {selectedNote?.title}
        </h5>
        <div className="absolute top-full left-0">
          <EmojiInput handleEmojiClick={handleEmojiClick} />
        </div>
      </div>
      {selectedNote && (
        <div className="px-10 py-5">
          <div>{selectedNote.content}demo</div>
        </div>
      )}
    </div>
  );
};

export default Notes;
