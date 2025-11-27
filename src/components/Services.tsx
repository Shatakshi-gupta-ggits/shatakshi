import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Code, Palette, Zap, Smartphone, Lightbulb } from "lucide-react";

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

const Services = () => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50" id="services">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 animate-on-scroll">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">2</span>
              <span>Services</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-gray-900 mb-4">
            Expert Development Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            From AI-powered solutions to stunning web applications, I bring your ideas to life with cutting-edge technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-elegant transition-all duration-500 animate-on-scroll border border-gray-100 hover:border-pulse-500/20 hover:-translate-y-2 cursor-pointer"
              >
                <div className="mb-4 sm:mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-pulse-500 to-pulse-600 text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-gray-900 mb-3 group-hover:text-pulse-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
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
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
