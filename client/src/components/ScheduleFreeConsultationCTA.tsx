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

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isLoading}
      data-testid={testId || `cta-schedule-${source}`}
      className={cn(
        "group relative inline-flex items-center justify-center font-bold rounded-full",
        "bg-primary text-white",
        "transition-transform duration-200 hover:-translate-y-0.5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
        "motion-reduce:transform-none",
        sizeClasses[size],
        className
      )}
      style={{
        boxShadow: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 0 20px 2px rgba(34, 211, 238, 0.4), 0 0 40px 4px rgba(16, 185, 129, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {isLoading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
      {label}
    </button>
  );
}
