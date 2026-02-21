import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Code2, GraduationCap, Shield, Terminal } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import MatrixRain from "./MatrixRain";
import CyberGrid from "./CyberGrid";
import GlitchText from "./GlitchText";
import TerminalText from "./TerminalText";
import AnimatedLines from "./AnimatedLines";
import { usePersona } from "@/contexts/PersonaContext";

const heroContent = {
  freelancer: {
    badge: "01",
    badgeText: "Purpose",
    title: "Hi, I'm Shatakshi",
    highlight: "Full-Stack Developer",
    subtitle: "& Cybersecurity Enthusiast",
    description: "Transforming ideas into powerful applications. Specialized in AI integration, cloud architecture, cybersecurity, and scalable solutions.",
    primaryCTA: "Hire Me",
    primaryLink: "#contact",
    secondaryCTA: "View Projects",
    secondaryLink: "#projects",
    accentColor: "pulse",
    terminalTexts: [
      "nmap -sS -sV target.com",
      "python3 exploit.py --payload reverse_shell",
      "git push origin main --force",
      "docker build -t cybersec-lab .",
      "hashcat -m 0 -a 0 hashes.txt wordlist.txt",
    ],
  },
  tutor: {
    badge: "01",
    badgeText: "Learn",
    title: "Hi, I'm Shatakshi",
    highlight: "Coding Mentor",
    subtitle: "& Tech Educator",
    description: "Helping aspiring developers master programming, crack interviews, and build successful careers in tech.",
    primaryCTA: "Book a Session",
    primaryLink: "#tutoring",
    secondaryCTA: "View Courses",
    secondaryLink: "#courses",
    accentColor: "purple",
    terminalTexts: [
      "npm start learning --mode=fast",
      "sudo teach --subject='DSA'",
      "curl -X POST /api/book-session",
      "python3 mentor.py --student=you",
    ],
  },
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { persona } = usePersona();

  const content = heroContent[persona || "freelancer"];
  const isPurple = content.accentColor === "purple";

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  return (
    <section 
      className="overflow-hidden relative bg-background" 
      id="hero" 
      style={{ padding: isMobile ? '100px 12px 40px' : '120px 20px 60px' }}
    >
      {/* Matrix Rain background */}
      <MatrixRain 
        color={isPurple ? "#a855f7" : "#00ff41"} 
        opacity={0.12} 
        density={0.975}
      />
      
      {/* Cyber grid */}
      <CyberGrid />
      
      {/* Animated lines */}
      <AnimatedLines variant="diagonal" color={isPurple ? "purple" : "pulse"} />
      
      {/* Background gradient */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br to-background",
        isPurple 
          ? "from-purple-500/5 via-background dark:from-purple-500/10" 
          : "from-cyber-green/5 via-background dark:from-cyber-green/10"
      )} />
      
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      <div className={cn(
        "absolute -top-[10%] -right-[5%] w-1/2 h-[70%] opacity-20 dark:opacity-10 blur-3xl rounded-full",
        isPurple ? "bg-gradient-to-br from-purple-500 to-pink-500" : "bg-gradient-to-br from-cyber-green/40 to-cyber-blue/40"
      )} />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div 
              className={cn(
                "pulse-chip mb-3 sm:mb-6 opacity-0 animate-fade-in cyber-border",
                isPurple && "bg-purple-500/10 border-purple-500/20"
              )}
              style={{ animationDelay: "0.1s" }}
            >
              <span className={cn(
                "inline-flex items-center justify-center w-5 h-5 rounded-full text-white mr-2",
                isPurple ? "bg-purple-500" : "bg-cyber-green/80"
              )}>{content.badge}</span>
              <span className={cn("font-mono text-xs", isPurple ? "text-purple-500" : "text-cyber-green")}>{content.badgeText}</span>
            </div>
            
            <div 
              className="opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.3s" }}
            >
              <GlitchText
                as="h1"
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight font-display font-bold tracking-tight text-foreground"
              >
                {content.title}
              </GlitchText>
            </div>
            
            <h2 
              className={cn(
                "text-2xl sm:text-3xl lg:text-4xl font-display font-bold mt-2 opacity-0 animate-fade-in",
                isPurple ? "text-purple-500" : "text-cyber-green cyber-glow"
              )}
              style={{ animationDelay: "0.4s" }}
            >
              {content.highlight}
            </h2>
            <h3 
              className="text-xl sm:text-2xl font-display font-semibold text-muted-foreground mt-1 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.45s" }}
            >
              {content.subtitle}
            </h3>
            
            <p 
              style={{ animationDelay: "0.5s" }} 
              className="mt-3 sm:mt-6 mb-2 leading-relaxed opacity-0 animate-fade-in text-muted-foreground font-normal text-base sm:text-lg text-left max-w-xl"
            >
              {content.description}
            </p>

            {/* Terminal typing effect */}
            <div 
              className="my-4 sm:my-6 p-3 sm:p-4 rounded-lg bg-black/80 backdrop-blur-sm cyber-border opacity-0 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-cyber-red/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-cyber-green/80" />
                <span className="text-xs font-mono text-muted-foreground ml-2">terminal</span>
              </div>
              <TerminalText
                texts={content.terminalTexts}
                className="text-sm sm:text-base"
                prefix="~/shatakshi $"
              />
            </div>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.7s" }}
            >
              <a 
                href={content.primaryLink} 
                className={cn(
                  "flex items-center justify-center group w-full sm:w-auto text-center text-black font-bold rounded-lg px-8 py-4 transition-all duration-300 hover:scale-105 animate-cyber-pulse font-mono uppercase tracking-wider text-sm",
                  isPurple 
                    ? "bg-purple-500 text-white hover:bg-purple-400" 
                    : "bg-cyber-green hover:bg-cyber-green/90"
                )}
              >
                <Terminal className="mr-2 w-4 h-4" />
                {content.primaryCTA}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href={content.secondaryLink} 
                className="flex items-center justify-center group w-full sm:w-auto text-center rounded-lg px-8 py-4 font-mono uppercase tracking-wider text-sm font-medium transition-all duration-300 hover:scale-105 cyber-border text-foreground hover:text-cyber-green"
              >
                <Shield className="mr-2 w-4 h-4" />
                {content.secondaryCTA}
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            <div className="relative z-10 animate-fade-in flex items-center justify-center" style={{ animationDelay: "0.9s" }}>
              {/* Hacker-themed visual */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Rotating hex ring */}
                <svg className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 200 200">
                  <polygon
                    points="100,10 178,55 178,145 100,190 22,145 22,55"
                    fill="none"
                    stroke={isPurple ? "#a855f7" : "#00ff41"}
                    strokeWidth="0.5"
                    opacity="0.4"
                  />
                </svg>
                <svg className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] animate-[spin_15s_linear_infinite_reverse]" viewBox="0 0 200 200">
                  <polygon
                    points="100,20 170,60 170,140 100,180 30,140 30,60"
                    fill="none"
                    stroke={isPurple ? "#a855f7" : "#00ff41"}
                    strokeWidth="0.5"
                    opacity="0.3"
                    strokeDasharray="10 5"
                  />
                </svg>
                <svg className="absolute inset-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] animate-[spin_25s_linear_infinite]" viewBox="0 0 200 200">
                  <polygon
                    points="100,30 160,65 160,135 100,170 40,135 40,65"
                    fill="none"
                    stroke={isPurple ? "#a855f7" : "#00ff41"}
                    strokeWidth="0.5"
                    opacity="0.2"
                  />
                </svg>
                
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={cn(
                    "w-24 h-24 sm:w-32 sm:h-32 rounded-lg flex items-center justify-center shadow-2xl backdrop-blur-sm cyber-border",
                    isPurple 
                      ? "bg-purple-500/20" 
                      : "bg-cyber-green/10"
                  )}>
                    {isPurple ? (
                      <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16 text-purple-400" />
                    ) : (
                      <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-cyber-green animate-neon-flicker" />
                    )}
                  </div>
                </div>

                {/* Floating data points */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "absolute w-2 h-2 rounded-full animate-float",
                      isPurple ? "bg-purple-400/60" : "bg-cyber-green/60"
                    )}
                    style={{
                      top: `${20 + Math.sin(i * 1.05) * 35}%`,
                      left: `${20 + Math.cos(i * 1.05) * 35}%`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={cn(
        "hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 rounded-full blur-3xl -z-10 parallax",
        isPurple ? "bg-purple-100/30 dark:bg-purple-500/10" : "bg-cyber-green/5 dark:bg-cyber-green/5"
      )} data-speed="0.05" />
    </section>
  );
};

export default Hero;
