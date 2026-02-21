import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TerminalTextProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  prefix?: string;
}

const TerminalText = ({
  texts,
  className,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  prefix = "~/shatakshi $",
}: TerminalTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.slice(0, displayText.length + 1));
          if (displayText.length === current.length) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          setDisplayText(current.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div className={cn("font-mono", className)}>
      <span className="text-cyber-green/70">{prefix} </span>
      <span className="text-foreground">{displayText}</span>
      <span className="animate-terminal-cursor text-cyber-green">█</span>
    </div>
  );
};

export default TerminalText;
