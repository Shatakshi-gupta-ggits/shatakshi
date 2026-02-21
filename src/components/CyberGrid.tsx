import { cn } from "@/lib/utils";

interface CyberGridProps {
  className?: string;
}

const CyberGrid = ({ className }: CyberGridProps) => (
  <div className={cn("absolute inset-0 pointer-events-none z-0 overflow-hidden", className)}>
    {/* Perspective grid floor */}
    <div
      className="absolute bottom-0 left-0 right-0 h-[40%] opacity-[0.08]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,255,65,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,65,0.3) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        transform: "perspective(500px) rotateX(60deg)",
        transformOrigin: "bottom",
      }}
    />
    {/* Vertical scan line */}
    <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyber-green/20 to-transparent animate-cyber-scan-x" />
    {/* Horizontal scan line */}
    <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-green/20 to-transparent animate-cyber-scan-y" />
  </div>
);

export default CyberGrid;
