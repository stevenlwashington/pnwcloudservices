import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { openCalendlyPopup, fireAnalyticsEvent } from "@/lib/calendly";

interface IntentOption {
  id: string;
  label: string;
  description: string;
  actionLabel: string;
  actionType: "calendly" | "navigate";
  actionTarget?: string;
}

const intentOptions: IntentOption[] = [
  {
    id: "strategy",
    label: "review my platform strategy",
    description: "Schedule a free consultation to discuss your platform goals and get expert recommendations.",
    actionLabel: "Schedule a Call",
    actionType: "calendly",
  },
  {
    id: "contact",
    label: "share my project details",
    description: "Send us a message with details about your project and we'll get back to you within 24 hours.",
    actionLabel: "Send a Message",
    actionType: "navigate",
    actionTarget: "/contact",
  },
  {
    id: "modernization",
    label: "explore modernization options",
    description: "Learn about our platform modernization approach and see how we can help transform your infrastructure.",
    actionLabel: "View Our Approach",
    actionType: "navigate",
    actionTarget: "/platform-modernization",
  },
];

export function CTA() {
  const [selectedIntent, setSelectedIntent] = useState<string>("strategy");
  const [, navigate] = useLocation();

  const currentOption = intentOptions.find((opt) => opt.id === selectedIntent) || intentOptions[0];

  const handleAction = () => {
    if (currentOption.actionType === "calendly") {
      fireAnalyticsEvent("home-cta-intent-selector");
      openCalendlyPopup({ source: "home-cta-intent-selector" });
    } else if (currentOption.actionType === "navigate" && currentOption.actionTarget) {
      navigate(currentOption.actionTarget);
    }
  };

  return (
    <section
      className="py-24 border-t border-border/50 relative overflow-hidden"
      style={{ backgroundColor: "hsl(120, 33%, 88%)" }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-10">
          Let's talk about your platforms.
        </h2>

        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-2xl md:text-3xl font-medium text-foreground/90">
              I want to
            </span>
            <Select
              value={selectedIntent}
              onValueChange={setSelectedIntent}
            >
              <SelectTrigger
                className="inline-flex w-auto min-w-[280px] h-auto py-1 px-3 text-2xl md:text-3xl font-medium text-primary border-0 border-b-2 border-primary bg-transparent rounded-none shadow-none focus:ring-0 focus:border-primary hover:bg-primary/5 transition-colors"
                data-testid="intent-selector-trigger"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent
                className="bg-white border border-border shadow-lg rounded-lg"
                data-testid="intent-selector-content"
              >
                {intentOptions.map((option) => (
                  <SelectItem
                    key={option.id}
                    value={option.id}
                    className="py-3 px-4 text-base cursor-pointer hover:bg-primary/5 focus:bg-primary/10"
                    data-testid={`intent-option-${option.id}`}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <p className="text-lg text-foreground/70 mb-8">
            {currentOption.description}
          </p>

          <Button
            onClick={handleAction}
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 font-semibold px-8 py-6 text-lg rounded-lg shadow-md hover:shadow-lg transition-all"
            data-testid="intent-action-button"
          >
            {currentOption.actionLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
