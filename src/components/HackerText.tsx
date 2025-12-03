"use client";
import { useEffect, useState } from "react";

interface Props {
  text: string;
}

const HackerText = ({ text }: Props) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let iteration = 0;
    const original = text;
    const interval = setInterval(() => {
      setDisplayText(
        original
          .split("")
          .map((char, i) => {
            if (i < iteration) return original[i];
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      if (iteration >= original.length) clearInterval(interval);
      iteration += 1 / 2;
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="tracking-wide [text-shadow:0_0_20px_rgba(20,200,180,0.6)]">
      {displayText}
    </span>
  );
};

export default HackerText;
