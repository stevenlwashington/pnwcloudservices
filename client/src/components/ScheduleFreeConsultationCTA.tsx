import { useState, useCallback } from "react";
import { openCalendlyPopup, fireAnalyticsEvent } from "@/lib/calendly";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ScheduleFreeConsultationCTAProps {
  source?: string;
  label?: string;
  variant?: "primary" | "secondary" | "link" | "inline";
  className?: string;
  size?: "default" | "sm" | "lg";
  "data-testid"?: string;
}

export function ScheduleFreeConsultationCTA({
  source = "unknown",
  label = "Schedule a Free Consultation",
  variant = "primary",
  className,
  size = "default",
  "data-testid": testId,
}: ScheduleFreeConsultationCTAProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = useCallback(async () => {
    setIsLoading(true);
    
    fireAnalyticsEvent(source);
    
    try {
      await openCalendlyPopup({ source });
    } finally {
      setIsLoading(false);
    }
  }, [source]);

  if (variant === "link" || variant === "inline") {
    return (
      <button
        type="button"
        onClick={handleClick}
        disabled={isLoading}
        data-testid={testId || `cta-schedule-${source}`}
        className={cn(
          "text-secondary font-bold underline hover:text-secondary/80 transition-colors inline-flex items-center gap-1",
          className
        )}
      >
        {isLoading && <Loader2 className="w-3 h-3 animate-spin" />}
        {label}
      </button>
    );
  }

  const sizeClasses = {
    lg: "h-14 px-10 text-lg",
    default: "h-12 px-8 text-base",
    sm: "h-10 px-6 text-sm",
  };

  // Gradient glow matching service cards: blue-500, cyan-400, emerald-500
  const glowShadow = isHovered 
    ? '0 0 20px 4px rgba(59, 130, 246, 0.35), 0 0 35px 8px rgba(34, 211, 238, 0.25), 0 0 50px 12px rgba(16, 185, 129, 0.2)'
    : 'none';

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isLoading}
      data-testid={testId || `cta-schedule-${source}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className={cn(
        "inline-flex items-center justify-center font-bold rounded-full",
        "bg-white text-primary border-2 border-primary",
        "transition-all duration-300",
        "hover:-translate-y-0.5",
        "focus-visible:outline-none",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
        "motion-reduce:transform-none",
        sizeClasses[size],
        className
      )}
      style={{ boxShadow: glowShadow }}
    >
      {isLoading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
      {label}
    </button>
  );
}
