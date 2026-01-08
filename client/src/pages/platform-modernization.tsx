import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Layers, Repeat, Cloud, ThumbsUp, ThumbsDown } from "lucide-react";
import { useState } from "react";
import { GlowCTA } from "@/components/cta/GlowCTA";

function CSATWidget() {
  const [feedback, setFeedback] = useState<"yes" | "no" | null>(null);

  const handleFeedback = (value: "yes" | "no") => {
    setFeedback(value);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: 'linear-gradient(to right, #ec4899, #06b6d4)' }}>
          {feedback ? (
            <div className="text-white">
              <p className="text-2xl font-bold mb-2">Thank you for your feedback!</p>
              <p className="text-white/80">Your input helps us improve our content.</p>
            </div>
          ) : (
            <>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Did you find what you were looking for today?
              </h3>
              <p className="text-white/80 mb-8">
                Let us know so we can improve the quality of the content on our pages.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => handleFeedback("yes")}
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
                  data-testid="csat-yes"
                >
                  <ThumbsUp className="w-5 h-5" />
                  Yes
                </button>
                <button
                  onClick={() => handleFeedback("no")}
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
                  data-testid="csat-no"
                >
                  <ThumbsDown className="w-5 h-5" />
                  No
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

const executionCards = [
  {
    icon: Layers,
    title: "Monolith Decomposition",
    description: "Strategically breaking legacy systems into scalable microservices."
  },
  {
    icon: Repeat,
    title: "Automated Migration",
    description: "Using Infrastructure-as-Code (IaC) for repeatable, zero-downtime deployments."
  },
  {
    icon: Cloud,
    title: "Cloud-Native Optimization",
    description: "Leveraging native cloud capabilities to slash long-term maintenance costs."
  }
];

export default function PlatformModernization() {
  return (
    <div className="min-h-screen bg-background selection:bg-secondary/20 selection:text-secondary-foreground">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 md:px-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight animate-in slide-in-from-bottom-5 duration-500">
              Platform Modernization: Turn Your Infrastructure into a{" "}
              <span className="text-gradient-speed">Product Accelerator</span>.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed animate-in slide-in-from-bottom-5 duration-500 delay-100">
              We don't just move servers to the cloud. We refactor the bottlenecks that stall your product roadmap. Get from "Legacy" to "Cloud-native" in months, not years.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Strategy Before Syntax.
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Most modernization projects fail because they focus on the "How" before the "What." We audit your product roadmap first to identify legacy constraints costing you the most in developer toil and customer churn.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-left">
            Engineering Execution
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {executionCards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`execution-card-${index}`}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{card.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-20">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The Outcome</h2>
            <p className="text-xl md:text-2xl font-medium leading-relaxed text-white/90">
              An <span className="text-secondary font-bold">80% improvement</span> in deployment velocity and a platform built for engineers, not just uptime.
            </p>
          </div>
        </div>
      </section>

      <CSATWidget />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to review your platform strategy?
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Schedule a free consultation to discuss your modernization goals and challenges.
            </p>
            <GlowCTA
              source="platform-modernization-cta"
              label="Schedule a Free Consultation"
              size="lg"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
