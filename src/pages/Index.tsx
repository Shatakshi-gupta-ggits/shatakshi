import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import ProjectsForSale from "@/components/ProjectsForSale";
import Courses from "@/components/Courses";
import Tutoring from "@/components/Tutoring";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AchievementsGallery from "@/components/AchievementsGallery";
import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/PageLoader";
import SectionTransition from "@/components/SectionTransition";

const Index = () => {
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

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <>
      <PageLoader />
      <CustomCursor />
      <div className="min-h-screen cursor-none md:cursor-none">
        <Navbar />
        <main className="space-y-0">
          <SectionTransition>
            <Hero />
          </SectionTransition>
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
            <Testimonials />
          </SectionTransition>
          <SectionTransition delay={100}>
            <ProjectsForSale />
          </SectionTransition>
          <SectionTransition delay={100}>
            <Courses />
          </SectionTransition>
          <SectionTransition delay={100}>
            <Tutoring />
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

export default Index;
