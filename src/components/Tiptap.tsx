"use client";

import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import "@tiptap/starter-kit";

import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";

import Paragraph from "@tiptap/extension-paragraph";
import Heading from "@tiptap/extension-heading";
import TextAlign from "@tiptap/extension-text-align";

const Tiptap: React.FC = () => {
  const editor = useEditor({
    extensions: [
      // 1️⃣ Custom paragraph & heading
      Paragraph,
      Heading.configure({ levels: [1, 2, 3] }),

      // 2️⃣ Text alignment extension (after nodes)
      TextAlign.configure({ types: ["paragraph", "heading"] }),

      // 3️⃣ StarterKit (disable paragraph & heading)
      StarterKit.configure({ paragraph: false, heading: false }),
      Underline,
    ],
    content: "<p style='text-align: center;'>Start Typing...</p>",
    autofocus: true,
    editable: true,
    injectCSS: true,
    immediatelyRender: false,
  });

  const MenuBar = () => {
    if (!editor) return null;

    const btn = (
      active: boolean,
      onClick: () => void,
      label: React.ReactNode
    ) => (
      <button
        onClick={onClick}
        className={`px-2 py-1 cursor-pointer rounded-md text-sm border transition-colors duration-150 ${
          active
            ? "bg-white text-black border-white"
            : "bg-[#2a2a2a] text-gray-200 border-[#3a3a3a] hover:bg-[#3a3a3a]"
        }`}
      >
        {label}
      </button>
    );

    return (
      <div className="flex flex-wrap gap-2 mb-3 border-b pb-3 border-[#333]">
        {/* Basic */}
        {btn(
          editor.isActive("bold"),
          () => editor.chain().focus().toggleBold().run(),
          <b>B</b>
        )}
        {btn(
          editor.isActive("italic"),
          () => editor.chain().focus().toggleItalic().run(),
          <i>I</i>
        )}
        {btn(
          editor.isActive("underline"),
          () => editor.chain().focus().toggleUnderline().run(),
          <u>U</u>
        )}
        {btn(
          editor.isActive("strike"),
          () => editor.chain().focus().toggleStrike().run(),
          <s>S</s>
        )}

        {/* Headings */}
        {btn(
          editor.isActive("heading", { level: 1 }),
          () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
          "H1"
        )}
        {btn(
          editor.isActive("heading", { level: 2 }),
          () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
          "H2"
        )}
        {btn(
          editor.isActive("heading", { level: 3 }),
          () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
          "H3"
        )}

        {/* Lists */}
        {btn(
          editor.isActive("bulletList"),
          () => editor.chain().focus().toggleBulletList().run(),
          "• List"
        )}
        {btn(
          editor.isActive("orderedList"),
          () => editor.chain().focus().toggleOrderedList().run(),
          "1. List"
        )}

        {/* Quote / HR */}
        {btn(
          editor.isActive("blockquote"),
          () => editor.chain().focus().toggleBlockquote().run(),
          "❝ Quote"
        )}
        {btn(
          false,
          () => editor.chain().focus().setHorizontalRule().run(),
          "— HR"
        )}
        {btn(
          editor.isActive({ textAlign: "left" }),
          () => editor.chain().focus().setTextAlign("left").run(),
          "Left"
        )}
        {btn(
          editor.isActive({ textAlign: "center" }),
          () => editor.chain().focus().setTextAlign("center").run(),
          "Center"
        )}
        {btn(
          editor.isActive({ textAlign: "right" }),
          () => editor.chain().focus().setTextAlign("right").run(),
          "Right"
        )}
        {btn(
          editor.isActive({ textAlign: "justify" }),
          () => editor.chain().focus().setTextAlign("justify").run(),
          "Justify"
        )}

        {/* Other */}
        {btn(false, () => editor.chain().focus().setHardBreak().run(), "↵")}
        {btn(
          false,
          () => editor.chain().focus().clearNodes().unsetAllMarks().run(),
          "Clear"
        )}

        {/* Undo / Redo */}
        {btn(false, () => editor.chain().focus().undo().run(), "↶")}
        {btn(false, () => editor.chain().focus().redo().run(), "↷")}
      </div>
    );
  };

  return (
    <div>
      <MenuBar />
      <EditorContent editor={editor} className="min-h-[200px]" />
    </div>
  );
};

export default Tiptap;
