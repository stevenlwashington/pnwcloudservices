import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { DollarSign, TrendingDown, Cloud, Calculator, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { GlowCTA } from "@/components/cta/GlowCTA";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "strategy", label: "Strategy" },
  { id: "implementation", label: "Implementation" },
  { id: "proof", label: "Proof" },
  { id: "contact", label: "Contact" }
];

const strategicItems = [
  {
    title: "Cost Visibility & Control",
    content: "Gain complete transparency into your cloud spending with granular cost allocation, real-time dashboards, and automated anomaly detection. We implement tagging strategies and showback/chargeback models that give every team accountability for their consumption."
  },
  {
    title: "ROI-Focused Infrastructure",
    content: "Every infrastructure decision should tie back to business outcomes. We align your cloud investments with revenue-generating capabilities, ensuring you're not just saving money—you're maximizing the return on every dollar spent in the cloud."
  },
  {
    title: "Performance Optimization",
    content: "Right-sizing isn't just about cost—it's about ensuring your applications have exactly the resources they need for optimal performance. We balance cost efficiency with reliability, latency, and scalability requirements."
  }
];

const technicalPillars = [
  {
    icon: DollarSign,
    title: "Cloud Spend Auditing",
    description: "Comprehensive analysis of your cloud bills, identifying waste, orphaned resources, and optimization opportunities across all services."
  },
  {
    icon: TrendingDown,
    title: "Resource Right-Sizing",
    description: "Data-driven recommendations to match instance types, storage tiers, and reserved capacity to actual workload requirements."
  },
  {
    icon: Cloud,
    title: "Migration Strategy",
    description: "Strategic cloud migration planning that optimizes for cost from day one—avoiding lift-and-shift pitfalls that inflate spending."
  },
  {
    icon: Calculator,
    title: "FinOps Implementation",
    description: "Building a sustainable FinOps practice with tooling, processes, and cultural change that keeps optimization continuous."
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

export default function CloudStrategy() {
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
              Scale with Precision.{" "}
              <span className="block mt-2">Right-Size Your Future.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed max-w-3xl animate-in slide-in-from-bottom-5 duration-500 delay-100">
              Transform cloud spending from a cost center into a strategic advantage. We identify savings, optimize performance, and build sustainable FinOps practices.
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
              Cloud Cost Strategy That Delivers
            </h2>
            <p className="text-lg text-foreground/70 mb-12">
              Cost optimization isn't about cutting corners—it's about investing smarter and building a culture of cloud financial accountability.
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

      <section id="implementation" className="py-24 bg-background relative">
        <div className="absolute inset-0 bg-topography pointer-events-none" />
        <div className="container mx-auto px-6 md:px-20 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
            Technical Pillars
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {technicalPillars.map((pillar, index) => (
              <div
                key={index}
                className="floating-card overflow-hidden group hover:scale-[1.02] transition-all duration-300 animate-in fade-in slide-in-from-bottom-5 h-full"
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

      <section id="proof" className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-20 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Proven Impact
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
              <div className="text-6xl md:text-7xl font-bold mb-4" style={{ background: "linear-gradient(to right, #ec4899, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>$450K+</div>
              <p className="text-xl text-white/90 font-medium">Annual savings identified</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
              <div className="text-6xl md:text-7xl font-bold mb-4" style={{ background: "linear-gradient(to right, #ec4899, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>90-day</div>
              <p className="text-xl text-white/90 font-medium">Time to value</p>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <p className="text-lg text-white/80 leading-relaxed">
              Our FinOps methodology has been refined through engagements with <span className="font-bold text-white">enterprise organizations</span> running complex multi-cloud environments—delivering measurable savings while improving performance and reliability.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready for a Cloud Cost Review?
            </h2>
            <p className="text-lg text-foreground/70 mb-10">
              Let's identify your optimization opportunities and build a roadmap to sustainable cloud spending.
            </p>
            <GlowCTA
              source="cloud-strategy-final-cta"
              variant="primary"
              size="lg"
              label="I want to review my cloud strategy →"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
