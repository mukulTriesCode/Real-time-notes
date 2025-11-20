"use client";

import { Editor } from "@tiptap/react";

export default function SlashMenu({ editor }: { editor: Editor }) {
  const commands = [
    {
      label: "Heading 1",
      action: () => editor.chain().focus().setHeading({ level: 1 }).run(),
    },
    {
      label: "Heading 2",
      action: () => editor.chain().focus().setHeading({ level: 2 }).run(),
    },
    {
      label: "Bullet List",
      action: () => editor.chain().focus().toggleBulletList().run(),
    },
    {
      label: "Numbered List",
      action: () => editor.chain().focus().toggleOrderedList().run(),
    },
    {
      label: "Quote",
      action: () => editor.chain().focus().toggleBlockquote().run(),
    },
    {
      label: "Code Block",
      action: () => editor.chain().focus().toggleCodeBlock().run(),
    },
  ];

  return (
    <div className="absolute bg-white shadow-lg border rounded p-2 w-56">
      {commands.map((cmd) => (
        <button
          key={cmd.label}
          className="block text-left w-full px-2 py-1 hover:bg-gray-100"
          onClick={cmd.action}
        >
          {cmd.label}
        </button>
      ))}
    </div>
  );
}
