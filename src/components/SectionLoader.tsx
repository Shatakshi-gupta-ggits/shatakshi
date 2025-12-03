import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface SectionLoaderProps {
  type?: "cards" | "hero" | "testimonials";
  count?: number;
}

const SectionLoader: React.FC<SectionLoaderProps> = ({ type = "cards", count = 3 }) => {
  if (type === "hero") {
    return (
      <div className="w-full py-20 px-4 animate-pulse">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 space-y-6">
              <Skeleton className="h-8 w-32 rounded-full" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-3/4" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-2/3" />
              <div className="flex gap-4 pt-4">
                <Skeleton className="h-14 w-36 rounded-full" />
                <Skeleton className="h-14 w-36 rounded-full" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Skeleton className="aspect-square rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "testimonials") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm animate-pulse">
            <div className="flex items-center gap-4 mb-4">
              <Skeleton className="w-14 h-14 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="flex gap-1 mt-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Skeleton key={j} className="w-5 h-5 rounded" />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse">
          <Skeleton className="aspect-video w-full" />
          <div className="p-6 space-y-4">
            <Skeleton className="h-6 w-3/4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-14 rounded-full" />
            </div>
            <div className="flex gap-3 pt-2">
              <Skeleton className="h-10 flex-1 rounded-lg" />
              <Skeleton className="h-10 flex-1 rounded-lg" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionLoader;
