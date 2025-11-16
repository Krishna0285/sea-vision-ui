import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick?: () => void;
  gradient?: string;
  className?: string;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  onClick,
  gradient = "from-primary to-secondary",
  className,
}: FeatureCardProps) {
  return (
    <Card
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-ocean)] border-border/50",
        className
      )}
    >
      <div className="p-6 relative z-10">
        <div
          className={cn(
            "w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",
            gradient
          )}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </Card>
  );
}
