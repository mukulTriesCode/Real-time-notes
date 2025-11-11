import React, { useEffect, useRef } from "react";

const SplitText: React.FC<{ text: string }> = ({ text }) => {
  const characters = text?.split("") || [];
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    // Example usage: log each span's text content
    charRefs.current.forEach((el, index) => {
      if (el) {
        console.log(`Character ${index}:`, el.textContent);
      }
    });
    console.log(charRefs)
  }, [text]);

  if (text.length <= 5) {
    return <span>{text}</span>;
  }

  return (
    <>
      {characters.map((char, index) => (
        <span
          key={index}
          ref={(el) => {
            charRefs.current[index] = el; // ✅ assign, no return
          }}
        >
          {char}
        </span>
      ))}
    </>
  );
};

export default SplitText;
