import React from "react";
import { usePersona, Persona } from "@/contexts/PersonaContext";
import { Code2, GraduationCap, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const PersonaSelector = () => {
  const { persona, setPersona, isSelected } = usePersona();

  if (isSelected) return null;

  const handleSelect = (selected: Persona) => {
    setPersona(selected);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-pulse-500/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 container px-4 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pulse-500/10 text-pulse-500 mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Welcome to my portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Hi, I'm <span className="text-pulse-500">Shatakshi</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            I wear multiple hats. Which side of me would you like to explore?
          </p>
        </div>

        {/* Persona Cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Freelancer Card */}
          <button
            onClick={() => handleSelect("freelancer")}
            className={cn(
              "group relative p-6 sm:p-8 rounded-2xl border-2 text-left transition-all duration-500",
              "hover:border-pulse-500 hover:shadow-2xl hover:shadow-pulse-500/20 hover:-translate-y-2",
              "bg-card border-border",
              "animate-fade-in"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pulse-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pulse-500 to-pulse-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-2">
                Freelancer
              </h2>
              <p className="text-muted-foreground mb-4">
                Full-Stack Developer & AI Expert building scalable applications and innovative solutions.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {["AI Integration", "Web Dev", "Cloud", "Automation"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-2 text-pulse-500 font-medium group-hover:gap-3 transition-all duration-300">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </button>

          {/* Tutor Card */}
          <button
            onClick={() => handleSelect("tutor")}
            className={cn(
              "group relative p-6 sm:p-8 rounded-2xl border-2 text-left transition-all duration-500",
              "hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2",
              "bg-card border-border",
              "animate-fade-in"
            )}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              
              <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-2">
                Tutor
              </h2>
              <p className="text-muted-foreground mb-4">
                Passionate educator helping students master programming and AI technologies.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {["1-on-1 Sessions", "Courses", "Mentorship", "DSA"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-2 text-purple-500 font-medium group-hover:gap-3 transition-all duration-300">
                View Courses
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </button>
        </div>

        {/* Skip option */}
        <div className="text-center mt-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <button
            onClick={() => handleSelect("freelancer")}
            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            or explore everything →
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonaSelector;
