import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { usePersona } from "@/contexts/PersonaContext";

const freelancerSections = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "products", label: "Products" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const tutorSections = [
  { id: "hero", label: "Home" },
  { id: "tutoring", label: "Tutoring" },
  { id: "booking", label: "Booking" },
  { id: "courses", label: "Courses" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const SectionProgressIndicator = () => {
  const { persona, isSelected } = usePersona();
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = persona === "tutor" ? tutorSections : freelancerSections;

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Find active section
      const sectionIds = sections.map(s => s.id);
      for (const id of [...sectionIds].reverse()) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  if (!isSelected) return null;

  const activeIndex = sections.findIndex(s => s.id === activeSection);

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-secondary/50">
        <div
          className={cn(
            "h-full transition-all duration-150 ease-out",
            persona === "tutor" ? "bg-purple-500" : "bg-pulse-500"
          )}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Side indicator dots */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-center gap-2">
        {sections.map((section, index) => {
          const isActive = section.id === activeSection;
          const isPast = index < activeIndex;

          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative flex items-center"
              aria-label={`Go to ${section.label}`}
            >
              {/* Label tooltip */}
              <span
                className={cn(
                  "absolute right-8 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap",
                  "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0",
                  "transition-all duration-300 pointer-events-none",
                  "bg-background/90 backdrop-blur-sm border border-border shadow-lg"
                )}
              >
                {section.label}
              </span>

              {/* Dot */}
              <div
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300 border-2",
                  isActive
                    ? persona === "tutor"
                      ? "bg-purple-500 border-purple-500 scale-125"
                      : "bg-pulse-500 border-pulse-500 scale-125"
                    : isPast
                    ? persona === "tutor"
                      ? "bg-purple-500/50 border-purple-500/50"
                      : "bg-pulse-500/50 border-pulse-500/50"
                    : "bg-transparent border-muted-foreground/30 group-hover:border-foreground"
                )}
              />

              {/* Connecting line */}
              {index < sections.length - 1 && (
                <div
                  className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-2",
                    isPast
                      ? persona === "tutor"
                        ? "bg-purple-500/50"
                        : "bg-pulse-500/50"
                      : "bg-muted-foreground/20"
                  )}
                />
              )}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default SectionProgressIndicator;
