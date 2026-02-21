import { cn } from "@/lib/utils";

const ScanlineOverlay = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "pointer-events-none fixed inset-0 z-[60] opacity-[0.02]",
      className
    )}
    style={{
      background:
        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 65, 0.06) 2px, rgba(0, 255, 65, 0.06) 4px)",
    }}
  />
);

export default ScanlineOverlay;
