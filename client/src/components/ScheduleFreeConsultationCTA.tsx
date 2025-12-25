import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
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

  const buttonClassName = cn(
    "font-bold rounded-xl transition-all hover:scale-105",
    {
      "bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-xl": variant === "primary",
      "bg-secondary hover:bg-secondary/90 text-white shadow-sm hover:shadow-md": variant === "secondary",
    },
    {
      "h-14 px-8 text-lg": size === "lg",
      "px-6 py-5 text-sm": size === "default",
      "px-4 py-3 text-sm": size === "sm",
    },
    className
  );

  return (
    <Button
      type="button"
      onClick={handleClick}
      disabled={isLoading}
      data-testid={testId || `cta-schedule-${source}`}
      className={buttonClassName}
    >
      {isLoading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
      {label}
    </Button>
  );
}
