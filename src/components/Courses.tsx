import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Youtube, FileText, ExternalLink, ChevronDown } from "lucide-react";

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

const Courses = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCourses = showAll ? courses : courses.slice(0, 2);

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-white relative" id="courses">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 animate-on-scroll">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">06</span>
              <span>Education</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-gray-900 mb-4">
            Learn From My Experience
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Free courses, tutorials, and resources to help you master modern development technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {displayedCourses.map((course, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-elegant transition-all duration-500 animate-on-scroll border border-gray-100 hover:border-pulse-500/20 hover:-translate-y-2 cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-pulse-100 to-pulse-200 relative overflow-hidden">
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
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-gray-900 mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                  {course.description}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
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
                      className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                      size="lg"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Notes
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                      size="lg"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Resources
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {courses.length > 2 && (
          <div className="flex justify-center mt-12">
            <Button
              onClick={() => setShowAll(!showAll)}
              className="bg-pulse-500 hover:bg-pulse-600 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              size="lg"
            >
              {showAll ? "Show Less" : "View More Courses"}
              <ChevronDown className={`w-5 h-5 ml-2 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;