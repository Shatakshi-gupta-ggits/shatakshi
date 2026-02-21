import React from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
}

const GlitchText = ({ children, className, as: Tag = "h1" }: GlitchTextProps) => {
  return (
    <Tag className={cn("glitch-text relative inline-block", className)} data-text={children}>
      {children}
    </Tag>
  );
};

export default GlitchText;
