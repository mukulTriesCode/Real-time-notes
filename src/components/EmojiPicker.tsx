import React, { useState } from "react";
import type { EmojiClickData } from "emoji-picker-react";
import dynamic from "next/dynamic";

const EmojiPicker = dynamic(() => import("emoji-picker-react"), {
  ssr: false,
});

const EmojiInput: React.FC = () => {
  const [chosenEmoji, setChosenEmoji] = useState<string | null>(null);

  const onEmojiClick = (emojiData: EmojiClickData) => {
    setChosenEmoji(emojiData.emoji);
  };

  return (
    <div>
      <EmojiPicker onEmojiClick={onEmojiClick} />
      {chosenEmoji && <p>You chose: {chosenEmoji}</p>}
    </div>
  );
};

export default EmojiInput;
