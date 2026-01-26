import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedLinesProps {
  className?: string;
  variant?: "horizontal" | "diagonal" | "wave";
  color?: "pulse" | "purple" | "muted";
}

const AnimatedLines = ({ 
  className, 
  variant = "horizontal",
  color = "pulse" 
}: AnimatedLinesProps) => {
  const strokeColor = {
    pulse: "#f97316",
    purple: "#a855f7", 
    muted: "#6b7280",
  };

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>
      {/* Multiple animated lines */}
      <svg className="absolute w-full h-full" preserveAspectRatio="none">
        {/* Line 1 */}
        <line
          x1="-100%"
          y1="20%"
          x2="200%"
          y2={variant === "diagonal" ? "30%" : "20%"}
          stroke={strokeColor[color]}
          strokeWidth="1"
          strokeOpacity="0.3"
          className="animate-line-move-1"
        />
        {/* Line 2 */}
        <line
          x1="-100%"
          y1="40%"
          x2="200%"
          y2={variant === "diagonal" ? "60%" : "40%"}
          stroke={strokeColor[color]}
          strokeWidth="1.5"
          strokeOpacity="0.2"
          className="animate-line-move-2"
        />
        {/* Line 3 */}
        <line
          x1="-100%"
          y1="60%"
          x2="200%"
          y2={variant === "diagonal" ? "50%" : "60%"}
          stroke={strokeColor[color]}
          strokeWidth="1"
          strokeOpacity="0.25"
          className="animate-line-move-3"
        />
        {/* Line 4 */}
        <line
          x1="-100%"
          y1="80%"
          x2="200%"
          y2={variant === "diagonal" ? "85%" : "80%"}
          stroke={strokeColor[color]}
          strokeWidth="1"
          strokeOpacity="0.15"
          className="animate-line-move-1"
          style={{ animationDelay: "2s" }}
        />
      </svg>
      
      {/* Glowing dots that travel along lines */}
      <div 
        className={cn(
          "absolute w-2 h-2 rounded-full blur-sm animate-dot-travel",
          color === "pulse" ? "bg-pulse-500" : color === "purple" ? "bg-purple-500" : "bg-muted-foreground"
        )}
        style={{ top: "20%", animationDelay: "0s" }}
      />
      <div 
        className={cn(
          "absolute w-3 h-3 rounded-full blur-md animate-dot-travel",
          color === "pulse" ? "bg-pulse-400" : color === "purple" ? "bg-purple-400" : "bg-muted-foreground"
        )}
        style={{ top: "50%", animationDelay: "3s" }}
      />
      <div 
        className={cn(
          "absolute w-2 h-2 rounded-full blur-sm animate-dot-travel",
          color === "pulse" ? "bg-pulse-500" : color === "purple" ? "bg-purple-500" : "bg-muted-foreground"
        )}
        style={{ top: "80%", animationDelay: "6s" }}
      />
    </div>
  );
};

export default AnimatedLines;
