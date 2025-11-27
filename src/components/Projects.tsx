import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronDown } from "lucide-react";

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

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-white relative" id="projects">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 animate-on-scroll">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
              <span>Portfolio</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Award-winning applications and enterprise solutions built with cutting-edge technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-elegant transition-all duration-500 animate-on-scroll border border-gray-100 hover:border-pulse-500/20 hover:-translate-y-2 cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-pulse-100 to-pulse-200 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-pulse-50 text-pulse-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
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
                    className="flex-1 border-pulse-500 text-pulse-500 hover:bg-pulse-50 transition-all duration-300 hover:scale-105"
                    size="lg"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length > 2 && (
          <div className="flex justify-center mt-12">
            <Button
              onClick={() => setShowAll(!showAll)}
              className="bg-pulse-500 hover:bg-pulse-600 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              size="lg"
            >
              {showAll ? "Show Less" : "View More Projects"}
              <ChevronDown className={`w-5 h-5 ml-2 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;