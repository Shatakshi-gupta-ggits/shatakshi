import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Award, Trophy, Medal } from "lucide-react";
import { useScrollAnimation, scrollAnimationClasses } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import AutoCarousel from "./AutoCarousel";
import AnimatedLines from "./AnimatedLines";

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

const AchievementCard = ({ 
  achievement, 
  index,
  onOpen,
  loadedImages,
  onImageLoad 
}: { 
  achievement: typeof achievements[0]; 
  index: number;
  onOpen: (index: number) => void;
  loadedImages: Set<number>;
  onImageLoad: (index: number) => void;
}) => {
  const IconComponent = achievement.icon;
  const isLoaded = loadedImages.has(index);
  
  return (
    <div
      className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-elegant transition-all duration-500 border border-border hover:border-pulse-500/20 cursor-pointer min-w-[300px] sm:min-w-[360px]"
      onClick={() => onOpen(index)}
    >
      <div className="aspect-video bg-gradient-to-br from-pulse-100 to-pulse-200 dark:from-pulse-900/30 dark:to-pulse-800/30 relative overflow-hidden">
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted animate-pulse" />
        )}
        <img 
          src={achievement.image} 
          alt={achievement.title}
          className={cn(
            "w-full h-full object-cover group-hover:scale-110 transition-all duration-700",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => onImageLoad(index)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-background/90 dark:bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-pulse-600 dark:text-pulse-400">
          {achievement.category}
        </div>
        
        {/* Icon overlay */}
        <div className="absolute bottom-4 right-4 w-12 h-12 bg-pulse-500 rounded-full flex items-center justify-center transform translate-y-16 group-hover:translate-y-0 transition-transform duration-300">
          <IconComponent className="w-6 h-6 text-white" />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground mb-2 group-hover:text-pulse-600 dark:group-hover:text-pulse-400 transition-colors duration-300">
          {achievement.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {achievement.description}
        </p>
      </div>
    </div>
  );
};

const AchievementsGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

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
    <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden" id="achievements">
      <AnimatedLines variant="horizontal" color="pulse" />
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pulse-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pulse-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div 
          ref={headerRef}
          className={cn(
            "max-w-3xl mx-auto text-center mb-12 sm:mb-16 transition-all duration-700",
            headerVisible ? scrollAnimationClasses.fadeUpVisible : scrollAnimationClasses.fadeUp
          )}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
              <span>Achievements</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-4">
            Milestones & Recognition
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            A showcase of awards, certifications, and professional achievements.
          </p>
        </div>

        {/* Auto-moving Carousel */}
        <AutoCarousel itemClassName="w-[300px] sm:w-[360px]">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={index} 
              achievement={achievement} 
              index={index}
              onOpen={openLightbox}
              loadedImages={loadedImages}
              onImageLoad={handleImageLoad}
            />
          ))}
        </AutoCarousel>
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
