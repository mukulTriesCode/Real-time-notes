import React from "react";
import type { EmojiClickData, Theme } from "emoji-picker-react";
import dynamic from "next/dynamic";

const EmojiPicker = dynamic(() => import("emoji-picker-react"), {
  ssr: false,
});

const EmojiInput: React.FC<{ handleEmojiClick: (emoji: string) => void }> = ({
  handleEmojiClick,
}) => {
  const onEmojiClick = (emojiData: EmojiClickData) => {
    handleEmojiClick(emojiData.emoji);
  };

  return <EmojiPicker onEmojiClick={onEmojiClick} theme={"dark" as Theme} />;
};

export default EmojiInput;
