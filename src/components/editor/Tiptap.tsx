"use client";

import React from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Paragraph from "@tiptap/extension-paragraph";
import Heading from "@tiptap/extension-heading";
import TextAlign from "@tiptap/extension-text-align";
import MenuBar from "./Menubar";

const Tiptap: React.FC = () => {
  const editor = useEditor({
    extensions: [
      Paragraph,
      Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
      TextAlign.configure({ types: ["paragraph", "heading"] }),
      StarterKit.configure({ paragraph: false, heading: false }),
      Underline,
    ],
    content: "<h1>Start Typing...</h1>",
    autofocus: true,
    editable: true,
    injectCSS: true,
    immediatelyRender: false,
  });
  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="min-h-[200px] max-h-[calc(100vh-150px)] overflow-y-auto focus:outline-none"
      />
    </div>
  );
};

export default Tiptap;
