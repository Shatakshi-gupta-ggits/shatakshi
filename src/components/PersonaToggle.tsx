import React from "react";
import { usePersona } from "@/contexts/PersonaContext";
import { Code2, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const PersonaToggle = () => {
  const { persona, setPersona, isSelected } = usePersona();

  if (!isSelected) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <div className="flex items-center gap-1 p-1.5 rounded-full bg-background/80 backdrop-blur-xl border border-border shadow-lg">
        <button
          onClick={() => setPersona("freelancer")}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
            persona === "freelancer"
              ? "bg-pulse-500 text-white shadow-md"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary"
          )}
        >
          <Code2 className="w-4 h-4" />
          <span className="hidden sm:inline">Freelancer</span>
        </button>
        <button
          onClick={() => setPersona("tutor")}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
            persona === "tutor"
              ? "bg-purple-500 text-white shadow-md"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary"
          )}
        >
          <GraduationCap className="w-4 h-4" />
          <span className="hidden sm:inline">Tutor</span>
        </button>
      </div>
    </div>
  );
};

export default PersonaToggle;
