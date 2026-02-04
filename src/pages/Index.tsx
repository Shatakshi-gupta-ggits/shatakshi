import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import ProjectsForSale from "@/components/ProjectsForSale";
import Courses from "@/components/Courses";
import Tutoring from "@/components/Tutoring";
import BookingCalendar from "@/components/BookingCalendar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AchievementsGallery from "@/components/AchievementsGallery";
import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/PageLoader";
import SectionTransition from "@/components/SectionTransition";
import PersonaSelector from "@/components/PersonaSelector";
import PersonaToggle from "@/components/PersonaToggle";
import SectionProgressIndicator from "@/components/SectionProgressIndicator";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { PersonaProvider, usePersona } from "@/contexts/PersonaContext";

const IndexContent = () => {
  const { persona, isSelected } = usePersona();
  
  // Enable smooth scrolling
  useSmoothScroll();

  // Initialize intersection observer to detect when elements enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const showFreelancer = persona === "freelancer" || !isSelected;
  const showTutor = persona === "tutor" || !isSelected;

  return (
    <>
      <PageLoader />
      <PersonaSelector />
      <PersonaToggle />
      <SectionProgressIndicator />
      <CustomCursor />
      <div className={`min-h-screen cursor-none md:cursor-none ${!isSelected ? 'hidden' : ''}`}>
        <Navbar />
        <main className="space-y-0">
          <SectionTransition>
            <Hero />
          </SectionTransition>
          
          {/* Freelancer sections */}
          {showFreelancer && (
            <>
              <SectionTransition delay={100}>
                <Services />
              </SectionTransition>
              <SectionTransition delay={100}>
                <Projects />
              </SectionTransition>
              <SectionTransition delay={100}>
                <AchievementsGallery />
              </SectionTransition>
              <SectionTransition delay={100}>
                <ProjectsForSale />
              </SectionTransition>
            </>
          )}

          {/* Tutor sections */}
          {showTutor && (
            <>
              <SectionTransition delay={100}>
                <Tutoring />
              </SectionTransition>
              <SectionTransition delay={100}>
                <BookingCalendar />
              </SectionTransition>
              <SectionTransition delay={100}>
                <Courses />
              </SectionTransition>
            </>
          )}

          {/* Shared sections */}
          <SectionTransition delay={100}>
            <Testimonials />
          </SectionTransition>
          <SectionTransition delay={100}>
            <Contact />
          </SectionTransition>
        </main>
        <Footer />
      </div>
    </>
  );
};

const Index = () => {
  return (
    <PersonaProvider>
      <IndexContent />
    </PersonaProvider>
  );
};

export default Index;
