import React from "react";
import { Button } from "@/components/ui/button";
import { Youtube, FileText, ExternalLink } from "lucide-react";
import { useScrollAnimation, scrollAnimationClasses } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import AutoCarousel from "./AutoCarousel";

const courses = [
  {
    title: "Full-Stack Web Development",
    description: "Complete guide to building modern web applications with React, Node.js, and deployment strategies.",
    duration: "12 hours",
    lessons: 45,
    image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
  },
  {
    title: "AI Integration Masterclass",
    description: "Learn to integrate ChatGPT, Claude, and custom AI models into your applications with practical examples.",
    duration: "8 hours",
    lessons: 32,
    image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
  },
  {
    title: "Cloud & DevOps Fundamentals",
    description: "Master Docker, Kubernetes, CI/CD pipelines, and cloud deployment on AWS and Azure.",
    duration: "10 hours",
    lessons: 38,
    image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
  },
  {
    title: "Microservices Architecture",
    description: "Design and build scalable microservices with Spring Boot, API Gateways, and service mesh patterns.",
    duration: "15 hours",
    lessons: 52,
    image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
  },
];

const CourseCard = ({ course }: { course: typeof courses[0] }) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-elegant transition-all duration-500 border border-border hover:border-pulse-500/20 cursor-pointer min-w-[320px] sm:min-w-[400px]">
      <div className="aspect-video bg-gradient-to-br from-pulse-100 to-pulse-200 dark:from-pulse-900/30 dark:to-pulse-800/30 relative overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 group-hover:scale-110 transition-transform duration-300">
          <Youtube className="w-4 h-4" />
          Free
        </div>
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-3">
          {course.title}
        </h3>
        <p className="text-muted-foreground text-sm sm:text-base mb-4 leading-relaxed line-clamp-2">
          {course.description}
        </p>
        <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
          <span>{course.duration}</span>
          <span>•</span>
          <span>{course.lessons} lessons</span>
        </div>
        <div className="flex flex-col gap-3">
          <Button 
            className="w-full bg-pulse-500 hover:bg-pulse-600 text-white transition-all duration-300 hover:scale-105"
            size="lg"
          >
            <Youtube className="w-4 h-4 mr-2" />
            Watch on YouTube
          </Button>
          <div className="flex gap-3">
            <Button 
              variant="outline"
              className="flex-1 border-border text-foreground hover:bg-secondary transition-all duration-300 hover:scale-105"
              size="lg"
            >
              <FileText className="w-4 h-4 mr-2" />
              Notes
            </Button>
            <Button 
              variant="outline"
              className="flex-1 border-border text-foreground hover:bg-secondary transition-all duration-300 hover:scale-105"
              size="lg"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Resources
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden" id="courses">
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
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">07</span>
              <span>Education</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-4">
            Learn From My Experience
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Free courses, tutorials, and resources to help you master modern development technologies.
          </p>
        </div>

        {/* Auto-moving Carousel */}
        <AutoCarousel itemClassName="w-[320px] sm:w-[400px]">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </AutoCarousel>
      </div>
    </section>
  );
};

export default Courses;
