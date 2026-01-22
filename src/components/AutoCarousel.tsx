import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AutoCarouselProps {
  children: React.ReactNode[];
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
  itemClassName?: string;
}

const AutoCarousel = ({
  children,
  speed = 30,
  pauseOnHover = true,
  className,
  itemClassName,
}: AutoCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += 0.5;
        
        // Reset when reaching the end
        if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused, speed]);

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollTo = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(updateScrollButtons, 300);
    }
  };

  return (
    <div className={cn("relative group", className)}>
      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => scrollTo("left")}
        className={cn(
          "absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          !canScrollLeft && "hidden"
        )}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={() => scrollTo("right")}
        className={cn(
          "absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          !canScrollRight && "hidden"
        )}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-[1] pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-[1] pointer-events-none" />

      {/* Scrolling Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        onScroll={updateScrollButtons}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className={cn(
              "flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]",
              itemClassName
            )}
          >
            {child}
          </div>
        ))}
        {/* Duplicate items for infinite scroll effect */}
        {children.map((child, index) => (
          <div
            key={`duplicate-${index}`}
            className={cn(
              "flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]",
              itemClassName
            )}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;
