"use client";

import React, { useEffect, useMemo } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Paragraph from "@tiptap/extension-paragraph";
import Heading from "@tiptap/extension-heading";
import TextAlign from "@tiptap/extension-text-align";
import MenuBar from "./Menubar";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateNote } from "@/redux/features/notes/notesSlice";

const Tiptap: React.FC = () => {
  const { selectedNoteId, notes } = useAppSelector((state) => state.notes);
  const dispatch = useAppDispatch();
  const selectedNote = notes?.find((note) => note?.id === selectedNoteId);
  const savedContent = selectedNote?.content;

  const editor = useEditor({
    extensions: [
      Paragraph,
      Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
      TextAlign.configure({ types: ["paragraph", "heading"] }),
      StarterKit.configure({ paragraph: false, heading: false }),
      Underline,
    ],
    content: savedContent ?? "<h1>Start Typing...</h1>",
    autofocus: true,
    editable: true,
    injectCSS: true,
    immediatelyRender: false,
    onUpdate: () => {
      if (!editor) return;
      const htmlContent = editor.getHTML();
      dispatch(
        updateNote({
          id: selectedNoteId!,
          content: htmlContent,
        })
      );
    },
  });

  useEffect(() => {
    if (editor && !savedContent) {
      editor.commands.setContent("<h1>Start Typing...</h1>");
    } else if (editor && savedContent && savedContent !== editor.getHTML()) {
      editor.commands.setContent(savedContent);
    }
  }, [savedContent, editor]);

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent
        key={selectedNoteId}
        editor={editor}
        className="min-h-[200px] max-h-[calc(100vh-150px)] overflow-y-auto focus:outline-none"
      />
    </div>
  );
};

export default Tiptap;
