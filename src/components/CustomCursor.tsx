import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      if (hoveredElement) {
        const computedStyle = window.getComputedStyle(hoveredElement);
        setIsPointer(
          computedStyle.cursor === "pointer" ||
          hoveredElement.tagName === "A" ||
          hoveredElement.tagName === "BUTTON" ||
          hoveredElement.closest("a") !== null ||
          hoveredElement.closest("button") !== null
        );
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", updateCursorType);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateCursorType);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [position.x, position.y]);

  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-200 ${
            isPointer ? "w-4 h-4" : "w-3 h-3"
          }`}
        />
      </div>

      {/* Outer ring */}
      <div
        className={`fixed pointer-events-none z-[9998] mix-blend-difference transition-all duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.6 : isPointer ? 1.5 : 1})`,
        }}
      >
        <div
          className={`rounded-full border-2 border-white transition-all duration-200 ${
            isPointer ? "w-10 h-10 bg-white/10" : "w-8 h-8"
          }`}
        />
      </div>

      {/* Trailing particles */}
      <div
        className="fixed pointer-events-none z-[9997] transition-all duration-500 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className={`w-16 h-16 rounded-full bg-pulse-500/20 blur-xl transition-opacity duration-300 ${isPointer ? "opacity-100" : "opacity-0"}`} />
      </div>
    </>
  );
};

export default CustomCursor;
