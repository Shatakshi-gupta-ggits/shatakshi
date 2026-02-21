import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface MatrixRainProps {
  className?: string;
  color?: string;
  fontSize?: number;
  speed?: number;
  density?: number;
  opacity?: number;
}

const MatrixRain = ({
  className,
  color = "#00ff41",
  fontSize = 14,
  speed = 33,
  density = 0.98,
  opacity = 0.15,
}: MatrixRainProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン><{}[]=/\\|!@#$%^&*()_+-~`";
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1).map(() => Math.random() * -100);

    const draw = () => {
      ctx.fillStyle = `rgba(0, 0, 0, 0.05)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Brighter head character
        ctx.fillStyle = color;
        ctx.globalAlpha = 1;
        ctx.fillText(char, x, y);

        // Dimmer trail
        if (drops[i] > 1) {
          ctx.globalAlpha = 0.4;
          const trailChar = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(trailChar, x, y - fontSize);
        }

        ctx.globalAlpha = 1;

        if (y > canvas.height && Math.random() > density) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, speed);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, [color, fontSize, speed, density]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 pointer-events-none z-0", className)}
      style={{ opacity }}
    />
  );
};

export default MatrixRain;
