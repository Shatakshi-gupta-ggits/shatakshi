import React from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Video, Clock, Star, CheckCircle } from "lucide-react";
import { useScrollAnimation, scrollAnimationClasses } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const tutoringFeatures = [
  {
    icon: Video,
    title: "1-on-1 Live Sessions",
    description: "Personalized video sessions tailored to your learning pace and goals.",
  },
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    description: "Comprehensive learning paths from beginner to advanced levels.",
  },
  {
    icon: Users,
    title: "Group Workshops",
    description: "Collaborative learning experiences with fellow developers.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book sessions at your convenience across any timezone.",
  },
];

const subjects = [
  "React & Next.js",
  "Node.js & Express",
  "Python & FastAPI",
  "AI/ML Integration",
  "Docker & Kubernetes",
  "System Design",
  "Data Structures",
  "Cloud Architecture",
];

const Tutoring = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden" id="tutoring">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-pulse-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-pulse-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
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
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">08</span>
              <span>Tutoring</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-4">
            Learn From Experience
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Accelerate your development journey with personalized mentorship and hands-on guidance.
          </p>
        </div>

        {/* Main Content Grid */}
        <div
          ref={contentRef}
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 transition-all duration-700",
            contentVisible ? scrollAnimationClasses.fadeUpVisible : scrollAnimationClasses.fadeUp
          )}
        >
          {/* Left - Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
              Why Learn With Me?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tutoringFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="group bg-card p-5 rounded-xl border border-border hover:border-pulse-500/30 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-pulse-500/10 text-pulse-500 mb-3 group-hover:bg-pulse-500 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Pricing Card */}
          <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-elegant relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-pulse-500 text-white text-xs font-medium rounded-full">
                <Star className="w-3 h-3" />
                Most Popular
              </span>
            </div>

            <h3 className="text-2xl font-display font-bold text-foreground mb-2">
              Personal Mentorship
            </h3>
            <p className="text-muted-foreground mb-6">
              Get personalized guidance on your development journey
            </p>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-display font-bold text-foreground">$75</span>
              <span className="text-muted-foreground">/hour</span>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-pulse-500" />
                <span>1-on-1 video sessions</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-pulse-500" />
                <span>Code review & feedback</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-pulse-500" />
                <span>Project guidance</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-pulse-500" />
                <span>Career advice & mentorship</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-pulse-500" />
                <span>Slack/Discord support</span>
              </div>
            </div>

            <Button className="w-full bg-pulse-500 hover:bg-pulse-600 text-white text-lg py-6 transition-all duration-300 hover:scale-105">
              Book a Session
            </Button>

            {/* Subjects List */}
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="text-sm font-medium text-muted-foreground mb-3">Topics I Cover:</h4>
              <div className="flex flex-wrap gap-2">
                {subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full hover:bg-pulse-500/10 hover:text-pulse-500 transition-colors duration-200"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutoring;
