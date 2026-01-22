import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation, scrollAnimationClasses } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import AutoCarousel from "./AutoCarousel";

const projects = [
  {
    title: "Food Delivery Platform",
    description: "Microservices architecture with React frontend and Node.js backend. Containerized with Docker and Kubernetes, featuring CI/CD pipeline with Jenkins.",
    tech: ["React", "Node.js", "Docker", "Kubernetes", "Jenkins"],
    image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
  },
  {
    title: "Enterprise Journal System",
    description: "Secure enterprise application with Spring Security, JWT authentication, and role-based access control. RESTful APIs with 90%+ test coverage.",
    tech: ["Spring Boot", "MySQL", "REST API", "JUnit"],
    image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
  },
  {
    title: "AI Analytics Dashboard",
    description: "Automated data visualization platform with AI-driven insights using OpenAI GPT. Containerized microservices achieving 95% uptime.",
    tech: ["Python", "FastAPI", "OpenAI", "PostgreSQL", "Docker"],
    image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
  },
  {
    title: "TriNetra AI - Money Laundering Detection",
    description: "National CyberShield Hackathon Winner 2025. Visual rule-based detection system using Graph Neural Networks with interactive D3.js dashboard.",
    tech: ["GNN", "D3.js", "WebGL", "Real-time Analytics"],
    image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
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
            className="flex-1 bg-pulse-500 hover:bg-pulse-600 text-white transition-all duration-300 hover:scale-105"
            size="lg"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Live
          </Button>
          <Button 
            variant="outline"
            className="flex-1 border-pulse-500 text-pulse-500 hover:bg-pulse-50 dark:hover:bg-pulse-900/30 transition-all duration-300 hover:scale-105"
            size="lg"
          >
            <Github className="w-4 h-4 mr-2" />
            Code
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
