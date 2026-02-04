import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Code2, GraduationCap } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { usePersona } from "@/contexts/PersonaContext";

const freelancerLinks = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#products", label: "Products" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const tutorLinks = [
  { href: "#tutoring", label: "Tutoring" },
  { href: "#booking", label: "Book Session" },
  { href: "#courses", label: "Courses" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const { persona } = usePersona();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = persona === "tutor" ? tutorLinks : freelancerLinks;
  const accentColor = persona === "tutor" ? "purple" : "pulse";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "py-2" 
          : "py-3 sm:py-4"
      )}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <nav className={cn(
          "flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-500",
          isScrolled 
            ? "bg-background/80 backdrop-blur-xl shadow-lg border border-border/50" 
            : "bg-background/50 backdrop-blur-sm"
        )}>
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center gap-2 group"
            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
            aria-label="Home"
          >
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-white font-display font-bold text-sm group-hover:scale-110 transition-transform duration-300",
              persona === "tutor" 
                ? "bg-gradient-to-br from-purple-500 to-purple-600" 
                : "bg-gradient-to-br from-pulse-500 to-pulse-600"
            )}>
              {persona === "tutor" ? <GraduationCap className="w-4 h-4" /> : <Code2 className="w-4 h-4" />}
            </div>
            <span className="hidden sm:inline font-display font-semibold text-foreground">
              Shatakshi
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeSection === link.href.slice(1)
                    ? persona === "tutor"
                      ? "bg-purple-500 text-white shadow-md"
                      : "bg-pulse-500 text-white shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            
            <a
              href="#contact"
              className={cn(
                "hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg",
                persona === "tutor"
                  ? "bg-purple-500 hover:bg-purple-600"
                  : "bg-pulse-500 hover:bg-pulse-600"
              )}
            >
              {persona === "tutor" ? "Book Session" : "Hire Me"}
            </a>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center transition-all duration-300 hover:scale-110" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-5 h-5">
                <span className={cn(
                  "absolute left-0 w-5 h-0.5 bg-foreground transition-all duration-300",
                  isMenuOpen ? "top-[9px] rotate-45" : "top-1"
                )} />
                <span className={cn(
                  "absolute left-0 top-[9px] w-5 h-0.5 bg-foreground transition-all duration-300",
                  isMenuOpen ? "opacity-0 scale-0" : "opacity-100"
                )} />
                <span className={cn(
                  "absolute left-0 w-5 h-0.5 bg-foreground transition-all duration-300",
                  isMenuOpen ? "top-[9px] -rotate-45" : "top-[17px]"
                )} />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 lg:hidden transition-all duration-500",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={closeMenu}
        />
        
        {/* Menu content */}
        <div className={cn(
          "relative h-full flex flex-col items-center justify-center gap-6 transition-all duration-500 delay-100",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <a 
            href="#" 
            className={cn(
              "text-2xl font-display font-medium transition-colors",
              persona === "tutor" 
                ? "text-foreground hover:text-purple-500" 
                : "text-foreground hover:text-pulse-500"
            )}
            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
          >
            Home
          </a>
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-2xl font-display font-medium transition-all duration-300",
                activeSection === link.href.slice(1)
                  ? persona === "tutor" ? "text-purple-500" : "text-pulse-500"
                  : persona === "tutor" 
                    ? "text-foreground hover:text-purple-500" 
                    : "text-foreground hover:text-pulse-500"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          
          <a
            href={persona === "tutor" ? "#booking" : "#contact"}
            className={cn(
              "mt-4 px-8 py-3 rounded-full text-white font-medium transition-all duration-300",
              persona === "tutor"
                ? "bg-purple-500 hover:bg-purple-600"
                : "bg-pulse-500 hover:bg-pulse-600"
            )}
            onClick={closeMenu}
          >
            {persona === "tutor" ? "Book Session" : "Hire Me"}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
