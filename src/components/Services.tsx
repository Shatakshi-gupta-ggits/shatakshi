import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Code, Palette, Zap, Smartphone, Lightbulb } from "lucide-react";
import { useScrollAnimation, scrollAnimationClasses } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import AutoCarousel from "./AutoCarousel";

const services = [
  {
    icon: Sparkles,
    title: "AI Integration",
    description: "Transform your business with cutting-edge AI solutions. From ChatGPT integration to custom machine learning models that drive results.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack web applications built with modern technologies like React, Node.js, and Next.js. Fast, scalable, and pixel-perfect.",
  },
  {
    icon: Palette,
    title: "UI/UX Redesign",
    description: "Breathe new life into your digital products with stunning redesigns that enhance user experience and boost conversions.",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Automate repetitive tasks and workflows with intelligent solutions. Save time, reduce errors, and increase productivity.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.",
  },
  {
    icon: Lightbulb,
    title: "Technical Consulting",
    description: "Strategic guidance on technology stack, architecture decisions, and AI implementation to accelerate your digital transformation.",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const IconComponent = service.icon;
  
  return (
    <div
      className="group bg-card rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-elegant transition-all duration-500 border border-border hover:border-pulse-500/20 cursor-pointer min-w-[320px] sm:min-w-[380px]"
    >
      <div className="mb-4 sm:mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-pulse-500 to-pulse-600 text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
          <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-3 group-hover:text-pulse-500 transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
        {service.description}
      </p>
      <Button 
        className="w-full sm:w-auto bg-pulse-500 hover:bg-pulse-600 text-white transition-all duration-300 hover:scale-105"
        size="lg"
      >
        Get Started
      </Button>
    </div>
  );
};

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-secondary/30 overflow-hidden" id="services">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header */}
        <div 
          ref={headerRef}
          className={cn(
            "max-w-3xl mx-auto text-center mb-12 sm:mb-16 transition-all duration-700",
            headerVisible ? scrollAnimationClasses.fadeUpVisible : scrollAnimationClasses.fadeUp
          )}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
              <span>Services</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-4">
            Expert Development Services
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            From AI-powered solutions to stunning web applications, I bring your ideas to life with cutting-edge technology.
          </p>
        </div>

        {/* Auto-moving Carousel */}
        <AutoCarousel itemClassName="w-[320px] sm:w-[380px]">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </AutoCarousel>
      </div>
    </section>
  );
};

export default Services;
