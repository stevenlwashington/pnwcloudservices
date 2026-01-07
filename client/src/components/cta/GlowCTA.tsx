import { useState, useCallback } from "react";
import { openCalendlyPopup, fireAnalyticsEvent } from "@/lib/calendly";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface GlowCTAProps {
  source?: string;
  label?: string;
  className?: string;
  size?: "default" | "sm" | "lg";
  variant?: "primary" | "secondary";
  "data-testid"?: string;
}

export function GlowCTA({
  source = "unknown",
  label = "Schedule a Free Consultation",
  className,
  size = "default",
  variant = "primary",
  "data-testid": testId,
}: GlowCTAProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(async () => {
    setIsLoading(true);
    
    fireAnalyticsEvent(source);
    
    try {
      await openCalendlyPopup({ source });
    } finally {
      setIsLoading(false);
    }
  }, [source]);

  const sizeClasses = {
    lg: "h-14 px-10 text-lg",
    default: "h-12 px-8 text-base",
    sm: "h-10 px-6 text-sm",
  };

  const variantClasses = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
  };

  return (
    <div className={cn("relative inline-flex group", className)}>
      {/* Glow layer - EXACT same as Service Cards */}
      <div 
        className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-500 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-60 group-focus-within:opacity-60"
        aria-hidden="true"
      />
      <button
        type="button"
        onClick={handleClick}
        disabled={isLoading}
        data-testid={testId || `cta-schedule-${source}`}
        className={cn(
          "relative z-10 inline-flex items-center justify-center font-bold rounded-2xl",
          variantClasses[variant],
          "border-0 outline-none ring-0 ring-offset-0 shadow-none",
          "focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
          "transition-transform duration-200 group-hover:-translate-y-0.5",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
          "motion-reduce:transform-none",
          sizeClasses[size]
        )}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
        {label}
      </button>
    </div>
  );
}
