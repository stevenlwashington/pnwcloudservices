import { useState } from "react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GlowCTA } from "@/components/cta/GlowCTA";
import { useContactModal } from "@/contexts/ContactModalContext";

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
    actionLabel: "Schedule a Free Consultation",
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

interface GlowButtonProps {
  label: string;
  onClick: () => void;
  testId: string;
}

function GlowButton({ label, onClick, testId }: GlowButtonProps) {
  return (
    <div className="relative inline-flex group">
      <div 
        className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-500 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-60 group-focus-within:opacity-60"
        aria-hidden="true"
      />
      <button
        type="button"
        onClick={onClick}
        data-testid={testId}
        className={cn(
          "relative z-10 inline-flex items-center justify-center font-bold rounded-2xl",
          "bg-primary text-white",
          "border-0 outline-none ring-0 ring-offset-0 shadow-none",
          "focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
          "transition-transform duration-200 group-hover:-translate-y-0.5",
          "motion-reduce:transform-none",
          "h-14 px-10 text-lg"
        )}
      >
        {label}
      </button>
    </div>
  );
}

export function CTA() {
  const [selectedIntent, setSelectedIntent] = useState<string>("strategy");
  const [, navigate] = useLocation();
  const { openContactModal } = useContactModal();

  const currentOption = intentOptions.find((opt) => opt.id === selectedIntent) || intentOptions[0];

  const handleAction = () => {
    if (currentOption.id === "contact") {
      openContactModal();
    } else if (currentOption.actionTarget) {
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
          <div className="flex flex-wrap items-baseline gap-2 mb-6">
            <span className="text-2xl md:text-3xl font-medium text-foreground/90">
              I want to
            </span>
            <Select
              value={selectedIntent}
              onValueChange={setSelectedIntent}
            >
              <SelectTrigger
                className="inline-flex w-auto h-auto py-0 px-0 text-2xl md:text-3xl font-medium border-0 bg-transparent rounded-none shadow-none focus:ring-0 hover:bg-primary/5 transition-colors [&>span]:bg-gradient-to-r [&>span]:from-blue-500 [&>span]:via-cyan-400 [&>span]:to-emerald-500 [&>span]:bg-clip-text [&>span]:text-transparent [&>span]:border-b-4 [&>span]:border-cyan-400/60 [&>span]:pb-1 [&_svg]:h-6 [&_svg]:w-6 [&_svg]:text-cyan-500 [&_svg]:opacity-100"
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

          {currentOption.actionType === "calendly" ? (
            <GlowCTA
              source="home-cta-intent-selector"
              label={currentOption.actionLabel}
              size="lg"
              data-testid="intent-action-button"
            />
          ) : (
            <GlowButton
              label={currentOption.actionLabel}
              onClick={handleAction}
              testId="intent-action-button"
            />
          )}
        </div>
      </div>
    </section>
  );
}
