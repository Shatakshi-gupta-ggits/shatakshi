import React, { useEffect, useState } from "react";

const hackTexts = [
  "Initializing kernel...",
  "Loading modules...",
  "Establishing secure connection...",
  "Decrypting payload...",
  "Access granted.",
];

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 120);

    const textTimer = setInterval(() => {
      setCurrentText(prev => Math.min(prev + 1, hackTexts.length - 1));
    }, 400);

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center transition-opacity duration-500 ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}>
      {/* Scanlines */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 65, 0.1) 2px, rgba(0, 255, 65, 0.1) 4px)",
      }} />
      
      <div className="relative mb-8">
        <div className="w-20 h-20 relative">
          {/* Hex spinner */}
          <svg className="w-full h-full animate-spin" viewBox="0 0 100 100" style={{ animationDuration: "3s" }}>
            <polygon
              points="50,5 89,27.5 89,72.5 50,95 11,72.5 11,27.5"
              fill="none"
              stroke="#00ff41"
              strokeWidth="1"
              opacity="0.6"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-mono font-bold text-cyber-green cyber-glow">S</span>
          </div>
        </div>
      </div>
      
      {/* Terminal text */}
      <div className="font-mono text-xs text-cyber-green/70 mb-4 text-center space-y-1">
        {hackTexts.slice(0, currentText + 1).map((text, i) => (
          <div key={i} className={i === currentText ? "text-cyber-green" : "text-cyber-green/40"}>
            <span className="text-cyber-green/50">{">"} </span>{text}
          </div>
        ))}
      </div>
      
      {/* Progress bar */}
      <div className="w-48 h-1 bg-cyber-green/10 rounded-full overflow-hidden cyber-border">
        <div 
          className="h-full bg-cyber-green transition-all duration-300 ease-out"
          style={{ width: `${Math.min(progress, 100)}%`, boxShadow: "0 0 10px #00ff41" }}
        />
      </div>
      
      <p className="mt-3 text-xs text-cyber-green/50 font-mono">
        [{Math.min(Math.round(progress), 100)}%] Loading<span className="animate-pulse">...</span>
      </p>
    </div>
  );
};

export default PageLoader;
