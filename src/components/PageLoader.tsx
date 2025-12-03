import React, { useEffect, useState } from "react";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + Math.random() * 20;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center transition-opacity duration-500 ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative mb-8">
        {/* Animated logo/spinner */}
        <div className="w-20 h-20 rounded-full border-4 border-pulse-100 border-t-pulse-500 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-display font-bold text-pulse-500">S</span>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-pulse-400 to-pulse-600 transition-all duration-300 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      
      <p className="mt-4 text-sm text-gray-500 font-medium">
        Loading<span className="animate-pulse">...</span>
      </p>
    </div>
  );
};

export default PageLoader;
