import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useScrollAnimation, scrollAnimationClasses } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import AutoCarousel from "./AutoCarousel";
import AnimatedLines from "./AnimatedLines";
import trainBookingImg from "@/assets/project-train-booking.jpg";
import arogyaVaaniImg from "@/assets/project-arogya-vaani.jpg";
import fileConverterImg from "@/assets/project-file-converter.jpg";
import airbnbLiteImg from "@/assets/project-airbnb-lite.jpg";
import seamToDoorImg from "@/assets/project-seam-to-door.jpg";
import ekartImg from "@/assets/project-ekart.jpg";

const projects = [
  {
    title: "Train Booking System",
    description: "A full-featured train reservation system built with Java, handling seat booking, cancellations, and real-time availability tracking.",
    tech: ["Java", "Backend", "Booking System"],
    image: trainBookingImg,
    github: "https://github.com/Shatakshi-gupta-ggits/train-booking",
  },
  {
    title: "Arogya Vaani",
    description: "A healthcare-focused TypeScript application designed to improve health accessibility and patient communication.",
    tech: ["TypeScript", "Healthcare", "Web App"],
    image: arogyaVaaniImg,
    github: "https://github.com/Shatakshi-gupta-ggits/arogya-vaani",
  },
  {
    title: "File Format Converter Pro",
    description: "Convert multiple image files (PNG, JPG, JPEG, etc.) into any format. Built with React and TypeScript for seamless file conversion.",
    tech: ["React", "TypeScript", "File Converter"],
    image: fileConverterImg,
    github: "https://github.com/Shatakshi-gupta-ggits/file-formate-converter-pro",
  },
  {
    title: "AirBnb Lite",
    description: "A lightweight clone of AirBnb with property listings, search functionality, and booking features built with JavaScript.",
    tech: ["JavaScript", "Web App", "Clone"],
    image: airbnbLiteImg,
    github: "https://github.com/Shatakshi-gupta-ggits/AirBnb-lite",
  },
  {
    title: "Seam to Door",
    description: "A TypeScript-based web application for seamless door-to-door service management and delivery tracking.",
    tech: ["TypeScript", "Web App", "Service Platform"],
    image: seamToDoorImg,
    github: "https://github.com/Shatakshi-gupta-ggits/seam-to-door",
  },
  {
    title: "Ekart",
    description: "A full-featured e-commerce platform with product listings, cart management, and checkout functionality.",
    tech: ["JavaScript", "E-commerce", "Web App"],
    image: ekartImg,
    github: "https://github.com/Shatakshi-gupta-ggits/Ekart",
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-elegant transition-all duration-500 border border-border hover:border-pulse-500/20 cursor-pointer min-w-[340px] sm:min-w-[420px]">
      <div className="aspect-video bg-gradient-to-br from-pulse-100 to-pulse-200 dark:from-pulse-900/30 dark:to-pulse-800/30 relative overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted animate-pulse" />
        )}
        <img 
          src={project.image} 
          alt={project.title}
          className={cn(
            "w-full h-full object-cover group-hover:scale-110 transition-all duration-700",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-3 group-hover:text-pulse-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm sm:text-base mb-4 leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium bg-pulse-50 dark:bg-pulse-900/30 text-pulse-700 dark:text-pulse-300 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
        <div className="flex gap-3">
          <Button 
            asChild
            className="flex-1 bg-pulse-500 hover:bg-pulse-600 text-white transition-all duration-300 hover:scale-105"
            size="lg"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View Code
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden" id="projects">
      <AnimatedLines variant="diagonal" color="pulse" />
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div 
          ref={headerRef}
          className={cn(
            "max-w-3xl mx-auto text-center mb-12 sm:mb-16 transition-all duration-700",
            headerVisible ? scrollAnimationClasses.fadeUpVisible : scrollAnimationClasses.fadeUp
          )}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
              <span>Portfolio</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Award-winning applications and enterprise solutions built with cutting-edge technologies.
          </p>
        </div>

        {/* Auto-moving Carousel */}
        <AutoCarousel itemClassName="w-[340px] sm:w-[420px]">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </AutoCarousel>
      </div>
    </section>
  );
};

export default Projects;
