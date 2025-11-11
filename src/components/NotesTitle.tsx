"use client";
import React, { useRef, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import EmojiInput from "./EmojiPicker";
import { updateNote } from "@/redux/features/notes/notesSlice";
import { NoteInterface } from "@/types";
import PageIcon from "./icons/PageIcon";
import Input from "./common/Input";

const NotesTitle: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEmojiModalOpen, setIsEmojiModalOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const { selectedNoteId, notes } = useAppSelector((state) => state.notes);
  const selectedNote = notes?.find((note) => note?.id === selectedNoteId);

  const titleValue = selectedNote?.title;

  const dispatch = useAppDispatch();

  const updatedNoteContent: Omit<NoteInterface, "createdAt"> = {
    id: selectedNote?.id || "",
    title: selectedNote?.title || "",
    content: selectedNote?.content || "",
    updatedAt: new Date().toISOString(),
    icon: selectedNote?.icon || "",
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
        setIsEmojiModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen, selectedNote]);
  return (
    <div className="relative">
      <div
        onClick={(e) => {
          e.stopPropagation();
          setIsModalOpen((prev) => !prev);
        }}
        className="flex gap-2 items-center w-fit cursor-pointer p-1 px-2 hover:bg-light-gray rounded transition"
      >
        <div className="size-8 flex text-[20px] items-center justify-center">
          {selectedNote?.icon ? selectedNote.icon : <PageIcon />}
        </div>
        <h5 className="font-bold w-fit">{selectedNote?.title}</h5>
      </div>
      {isModalOpen && (
        <div
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#222222] rounded-lg p-1 absolute top-full left-0 mt-2 shadow-lg z-50 w-fit flex items-center"
        >
          <div
            onClick={() => setIsEmojiModalOpen((prev) => !prev)}
            className="size-8 flex items-center justify-center cursor-pointer"
          >
            <div className="size-8 flex text-[20px] items-center justify-center">
              {selectedNote?.icon ? selectedNote.icon : <PageIcon />}
            </div>
          </div>

          <Input
            key={selectedNoteId}
            value={titleValue}
            onChange={(e) => {
              const newTitle = e.target.value;
              dispatch(
                updateNote({
                  ...updatedNoteContent,
                  title: newTitle,
                  updatedAt: new Date().toISOString(),
                })
              );
            }}
          />

          {isEmojiModalOpen && (
            <div className="absolute top-13 -left-px z-60">
              <EmojiInput handleEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotesTitle;
