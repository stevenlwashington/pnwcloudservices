import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Layers, Server, Cloud, Shield, ChevronDown, ThumbsUp, ThumbsDown, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { GlowCTA } from "@/components/cta/GlowCTA";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "strategy", label: "The Strategy" },
  { id: "pillars", label: "Technical Pillars" },
  { id: "impact", label: "Impact" },
  { id: "contact", label: "Contact" }
];

const strategicItems = [
  {
    title: "Reduced Opportunity Cost",
    content: "Every quarter spent maintaining legacy systems is a quarter your competitors use to capture market share. Our modernization approach prioritizes the constraints blocking your most valuable features, ensuring faster shipping hits critical market windows."
  },
  {
    title: "Talent Retention",
    content: "Engineers leave companies with outdated tech stacks. Modern platforms with clear abstractions, self-service tooling, and cloud-native patterns attract and retain top talent—reducing burnout and improving team velocity."
  },
  {
    title: "Cost Predictability",
    content: "Technical debt compounds unpredictably. We transform reactive firefighting into proactive platform investment, moving from surprise outages and emergency fixes to fixed, predictable operational spend."
  }
];

const technicalPillars = [
  {
    icon: Layers,
    title: "Monolith Decomposition",
    description: "Breaking legacy systems into scalable microservices with clear domain boundaries and well-defined APIs."
  },
  {
    icon: Server,
    title: "Internal Developer Platforms",
    description: "Building the 'Golden Path' for delivery—self-service infrastructure that empowers teams to ship faster."
  },
  {
    icon: Cloud,
    title: "Cloud-Native Refactoring",
    description: "Leveraging managed services to slash operational overhead and unlock elastic scalability."
  },
  {
    icon: Shield,
    title: "Governance as Code",
    description: "Building security and compliance into the platform by default—policy enforcement at deployment time."
  }
];

function StickyNav({ activeSection }: { activeSection: string }) {
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b py-3 z-40" style={{ borderImage: "linear-gradient(to right, transparent, transparent) 1" }}>
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex gap-2 md:gap-6 overflow-x-auto scrollbar-hide">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`whitespace-nowrap px-4 py-2 rounded-full md:rounded-none md:px-0 md:py-1 font-medium transition-all text-sm ${
                activeSection === section.id
                  ? "bg-primary text-white md:bg-transparent md:text-primary"
                  : "text-foreground/60 hover:text-foreground"
              }`}
              style={
                activeSection === section.id
                  ? { borderBottom: "2px solid transparent", borderImage: "linear-gradient(to right, #ec4899, #06b6d4) 1" }
                  : { borderBottom: "2px solid transparent" }
              }
              data-testid={`nav-${section.id}`}
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AccordionItem({ title, content, isOpen, onToggle }: { title: string; content: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
        data-testid={`accordion-${title.toLowerCase().replace(/\s+/g, "-")}`}
      >
        <span className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">{title}</span>
        <ChevronDown className={`w-6 h-6 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}>
        <p className="text-foreground/70 leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

function CSATWidget() {
  const [feedback, setFeedback] = useState<"yes" | "no" | null>(null);

  return (
    <section className="py-12">
      <div className="container mx-auto px-6 md:px-20">
        <div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(to right, #ec4899, #06b6d4)" }}>
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
                  onClick={() => setFeedback("yes")}
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
                  data-testid="csat-yes"
                >
                  <ThumbsUp className="w-5 h-5" />
                  Yes
                </button>
                <button
                  onClick={() => setFeedback("no")}
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

export default function PlatformModernization() {
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setShowStickyNav(heroBottom < 0);
      }
    };

    const observerOptions = {
      rootMargin: "-100px 0px -50% 0px",
      threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-secondary/20 selection:text-secondary-foreground">
      <Navbar />
      
      <section id="overview" ref={heroRef} className="relative min-h-[70vh] flex items-center bg-background overflow-hidden pt-20">
        <div className="absolute inset-0 bg-topography pointer-events-none" />
        <div className="container mx-auto px-6 md:px-20 py-16 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight animate-in slide-in-from-bottom-5 duration-500">
              Stop Rescuing Legacy Systems.{" "}
              <span className="block mt-2">Start Accelerating Your Roadmap.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed max-w-3xl animate-in slide-in-from-bottom-5 duration-500 delay-100">
              We refactor the bottlenecks that stall your product roadmap. Get from "Legacy" to "Cloud-native" in months, not years.
            </p>
          </div>
        </div>
      </section>

      {showStickyNav && (
        <div className="fixed top-0 left-0 right-0 z-50 animate-in slide-in-from-top-2 duration-200">
          <StickyNav activeSection={activeSection} />
        </div>
      )}

      <section id="strategy" className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-topography pointer-events-none" />
        <div className="container mx-auto px-6 md:px-20 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Modernization as a Product Initiative
            </h2>
            <p className="text-lg text-foreground/70 mb-12">
              Platform modernization isn't a technical project—it's a strategic investment in your product's future velocity.
            </p>
            
            <div className="border-t border-border">
              {strategicItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  content={item.content}
                  isOpen={openAccordion === index}
                  onToggle={() => setOpenAccordion(openAccordion === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pillars" className="py-24 bg-background relative">
        <div className="absolute inset-0 bg-topography pointer-events-none" />
        <div className="container mx-auto px-6 md:px-20 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
            Technical Pillars
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {technicalPillars.map((pillar, index) => (
              <div
                key={index}
                className={`floating-card overflow-hidden group hover:scale-[1.02] transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 ${index % 2 === 1 ? "md:mt-12" : ""}`}
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`pillar-card-${index}`}
              >
                <div className="h-40 relative" style={{ background: "linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(6, 182, 212, 0.2))" }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <pillar.icon className="w-16 h-16 text-primary/30" />
                  </div>
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent, white)" }} />
                </div>
                <div className="p-8 pt-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 -mt-12 relative z-10 bg-white shadow-lg" style={{ border: "2px solid transparent", backgroundImage: "linear-gradient(white, white), linear-gradient(to right, #ec4899, #06b6d4)", backgroundOrigin: "border-box", backgroundClip: "padding-box, border-box" }}>
                    <pillar.icon className="w-7 h-7 text-accent-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{pillar.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-20 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Proven Impact
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
              <div className="text-6xl md:text-7xl font-bold mb-4" style={{ background: "linear-gradient(to right, #ec4899, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>80%</div>
              <p className="text-xl text-white/90 font-medium">Improvement in deployment velocity</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
              <div className="text-6xl md:text-7xl font-bold mb-4" style={{ background: "linear-gradient(to right, #ec4899, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>$11B+</div>
              <p className="text-xl text-white/90 font-medium">Revenue influenced by platforms we've built</p>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <p className="text-lg text-white/80 leading-relaxed">
              Applied at scale within organizations like <span className="font-bold text-white">AWS</span> and <span className="font-bold text-white">Zillow</span>—transforming how engineering teams deliver products to market.
            </p>
          </div>
        </div>
      </section>

      <CSATWidget />

      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready for a Platform Strategy Review?
            </h2>
            <p className="text-lg text-foreground/70 mb-10">
              Let's discuss how to transform your infrastructure into a product accelerator.
            </p>
            <GlowCTA
              source="platform-modernization-final-cta"
              variant="primary"
              size="lg"
              label="I want to review my platform strategy →"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
