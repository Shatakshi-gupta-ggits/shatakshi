import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, X, ChevronLeft, ChevronRight, Award, Trophy, Medal } from "lucide-react";

const achievements = [
  {
    title: "National CyberShield Hackathon Winner 2025",
    description: "1st Place - TriNetra AI: Money Laundering Detection System using Graph Neural Networks",
    image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
    icon: Trophy,
    category: "Hackathon",
  },
  {
    title: "Cloud Architecture Certification",
    description: "AWS Solutions Architect certification demonstrating expertise in cloud infrastructure",
    image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
    icon: Award,
    category: "Certification",
  },
  {
    title: "Enterprise Solution Delivery",
    description: "Successfully delivered 10+ enterprise applications at Infosys with 95%+ uptime",
    image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
    icon: Medal,
    category: "Professional",
  },
  {
    title: "AI Innovation Award",
    description: "Recognition for implementing AI-driven analytics dashboard with OpenAI integration",
    image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
    icon: Trophy,
    category: "Innovation",
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to major open-source projects with 500+ GitHub contributions",
    image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png",
    icon: Award,
    category: "Community",
  },
  {
    title: "Technical Excellence",
    description: "Recognized for building scalable microservices architecture handling 100K+ requests/day",
    image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
    icon: Medal,
    category: "Professional",
  },
];

const AchievementsGallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const displayedAchievements = showAll ? achievements : achievements.slice(0, 3);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const newIndex = direction === "prev" 
      ? (selectedImage - 1 + achievements.length) % achievements.length
      : (selectedImage + 1) % achievements.length;
    setSelectedImage(newIndex);
  };

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="achievements">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pulse-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pulse-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 animate-on-scroll">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">07</span>
              <span>Achievements</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-gray-900 mb-4">
            Milestones & Recognition
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            A showcase of awards, certifications, and professional achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedAchievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            const isLoaded = loadedImages.has(index);
            
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-elegant transition-all duration-500 animate-on-scroll border border-gray-100 hover:border-pulse-500/20 hover:-translate-y-2 cursor-pointer"
                onClick={() => openLightbox(index)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-pulse-100 to-pulse-200 relative overflow-hidden">
                  {/* Loading skeleton */}
                  {!isLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
                  )}
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => handleImageLoad(index)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-pulse-600">
                    {achievement.category}
                  </div>
                  
                  {/* Icon overlay */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-pulse-500 rounded-full flex items-center justify-center transform translate-y-16 group-hover:translate-y-0 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-display font-semibold text-gray-900 mb-2 group-hover:text-pulse-600 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {achievements.length > 3 && (
          <div className="flex justify-center mt-12">
            <Button
              onClick={() => setShowAll(!showAll)}
              className="bg-pulse-500 hover:bg-pulse-600 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 group"
              size="lg"
            >
              {showAll ? "Show Less" : "View All Achievements"}
              <ChevronDown className={`w-5 h-5 ml-2 transition-transform duration-300 ${showAll ? "rotate-180" : ""} group-hover:animate-bounce`} />
            </Button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-50"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage("prev"); }}
            className="absolute left-6 text-white/80 hover:text-white transition-colors z-50 p-2 hover:bg-white/10 rounded-full"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage("next"); }}
            className="absolute right-6 text-white/80 hover:text-white transition-colors z-50 p-2 hover:bg-white/10 rounded-full"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="max-w-5xl max-h-[90vh] px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={achievements[selectedImage].image}
              alt={achievements[selectedImage].title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl animate-scale-in"
            />
            <div className="text-center mt-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                {achievements[selectedImage].title}
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                {achievements[selectedImage].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AchievementsGallery;
