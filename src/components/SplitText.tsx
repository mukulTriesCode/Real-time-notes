"use client";
import React, { useEffect, useRef, useState } from "react";

const SplitText: React.FC<{ text: string }> = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const reverseRef = useRef(false);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (text.length <= 5) return;

    const totalSteps = text.length - 5;
    let i = 0;

    const interval = setInterval(() => {
      if (!reverseRef.current) {
        if (i < totalSteps) {
          i++;
          setDisplayText(text.slice(0, text.length - i));
        } else {
          reverseRef.current = true;
        }
      } else {
        if (i > 0) {
          i--;
          setDisplayText(text.slice(0, text.length - i));
        } else {
          reverseRef.current = false;
        }
      }
    }, 200);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="inline-block text-lg">
      {text.split("").map((char, i) => {
        const visible = i < displayText.length;
        return (
          <span
            key={i}
            ref={(el) => {
              charRefs.current[i] = el;
            }}
            className={`inline-block transition-opacity duration-200 ease-in-out ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </div>
  );
};

export default SplitText;
