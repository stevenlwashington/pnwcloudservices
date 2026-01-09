import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Layers, Server, Cloud, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { GlowCTA } from "@/components/cta/GlowCTA";

const sections = [
  { id: "framework", label: "Framework" },
  { id: "implementation", label: "Implementation" },
  { id: "impact", label: "Impact" }
];

const pillars = [
  {
    icon: Layers,
    title: "Monolith Decomposition",
    description: "Strategically break apart legacy systems into modular, scalable microservices that accelerate feature delivery."
  },
  {
    icon: Server,
    title: "Internal Developer Platforms",
    description: "Build self-service infrastructure that reduces cognitive load and empowers engineering teams to ship faster."
  },
  {
    icon: Cloud,
    title: "Cloud-Native Refactoring",
    description: "Transform applications to leverage cloud-native patterns for resilience, scalability, and cost efficiency."
  }
];

function StickyNav({ activeSection }: { activeSection: string }) {
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border py-4 z-40">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex gap-2 md:gap-8 overflow-x-auto scrollbar-hide">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`whitespace-nowrap px-4 py-2 rounded-full md:rounded-none md:px-0 md:py-0 font-medium transition-all text-sm md:text-base ${
                activeSection === section.id
                  ? "bg-primary text-white md:bg-transparent md:text-primary md:border-b-2 md:pb-2"
                  : "text-foreground/70 hover:text-foreground md:border-b-2 md:border-transparent md:pb-2"
              }`}
              style={
                activeSection === section.id
                  ? { borderImage: "linear-gradient(to right, #ec4899, #06b6d4) 1" }
                  : undefined
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

export default function PlatformModernization() {
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [activeSection, setActiveSection] = useState("framework");
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
      
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center bg-background overflow-hidden">
        <div className="absolute inset-0 bg-topography pointer-events-none" />
        <div className="container mx-auto px-6 md:px-20 py-24 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight animate-in slide-in-from-bottom-5 duration-500">
              Stop Rescuing Legacy Systems.{" "}
              <span className="block mt-2">Start Accelerating Your Roadmap.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed max-w-2xl animate-in slide-in-from-bottom-5 duration-500 delay-100">
              Transform your infrastructure from a constraint into a competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {showStickyNav && (
        <div className="fixed top-0 left-0 right-0 z-50 animate-in slide-in-from-top-2 duration-200">
          <StickyNav activeSection={activeSection} />
        </div>
      )}

      <section id="framework" className="py-24 bg-background relative">
        <div className="absolute inset-0 bg-topography pointer-events-none" />
        <div className="container mx-auto px-6 md:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                A Framework for Accelerated Modernization
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Most modernization projects fail because they focus on "How" before "What." 
                We start with your product roadmap to identify the legacy constraints costing 
                you the most in developer toil and customer churn.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Our framework ensures every architectural decision ties directly to business 
                outcomes—not just technical elegance.
              </p>
            </div>
            <div className="floating-card p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Strategic Priorities</h3>
              <ul className="space-y-4">
                {["Reduce time-to-market for new features", "Eliminate deployment bottlenecks", "Enable engineering autonomy", "Prepare infrastructure for AI integration"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/80">
                    <ArrowRight className="w-5 h-5 text-accent-purple shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="floating-card p-8 pt-10 group cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                data-testid={`pillar-card-${index}`}
              >
                <div className="w-14 h-14 bg-accent-purple/10 rounded-xl flex items-center justify-center mb-6">
                  <pillar.icon className="w-7 h-7 text-accent-purple" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{pillar.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="implementation" className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-topography pointer-events-none" />
        <div className="container mx-auto px-6 md:px-20 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
            Implementation Approach
          </h2>
          
          <div className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Discovery & Assessment</h3>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  We map your current systems, identify friction points, and define clear 
                  modernization goals aligned with business outcomes.
                </p>
                <div className="floating-card p-6 pt-8 hover:scale-[1.02] transition-transform duration-300">
                  <ul className="space-y-3">
                    {["Architecture audit", "Dependency mapping", "Technical debt quantification", "Roadmap alignment"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground/80">
                        <div className="w-2 h-2 rounded-full bg-accent-purple" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="h-64 md:h-80 rounded-2xl bg-gradient-to-br from-primary/5 to-accent-purple/10 flex items-center justify-center">
                <div className="text-center opacity-60">
                  <Layers className="w-20 h-20 text-primary mx-auto mb-4" />
                  <p className="text-sm text-foreground/60">Discovery Phase Visual</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Iterative Migration</h3>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  We execute modernization in controlled phases, delivering value incrementally 
                  while maintaining system stability.
                </p>
                <div className="floating-card p-6 pt-8 hover:scale-[1.02] transition-transform duration-300">
                  <ul className="space-y-3">
                    {["Strangler fig pattern adoption", "Zero-downtime deployments", "Automated testing gates", "Rollback safeguards"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground/80">
                        <div className="w-2 h-2 rounded-full bg-accent-purple" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="h-64 md:h-80 rounded-2xl bg-gradient-to-br from-accent-purple/10 to-primary/5 flex items-center justify-center">
                <div className="text-center opacity-60">
                  <Server className="w-20 h-20 text-accent-purple mx-auto mb-4" />
                  <p className="text-sm text-foreground/60">Migration Phase Visual</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="py-24 bg-background relative">
        <div className="absolute inset-0 bg-topography pointer-events-none" />
        <div className="container mx-auto px-6 md:px-20 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
            Measurable Impact
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { metric: "80%", label: "Improvement in deployment velocity" },
              { metric: "60%", label: "Reduction in incident response time" },
              { metric: "3x", label: "Faster feature delivery" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="floating-card p-8 pt-10 text-center hover:scale-[1.02] transition-transform duration-300"
                data-testid={`impact-stat-${index}`}
              >
                <div className="text-5xl font-bold text-primary mb-2">{stat.metric}</div>
                <p className="text-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="floating-card p-8 pt-10 md:p-12 md:pt-14">
            <h3 className="text-2xl font-bold text-primary mb-4">Client Success: Enterprise Real Estate Platform</h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Modernized a legacy monolith serving 10M+ monthly users into a cloud-native 
              architecture, enabling the client to launch new features in days instead of months.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {["Multi-platform consolidation", "Faster release cycles", "40% infrastructure cost reduction", "AI-ready architecture"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                  <div className="w-2 h-2 rounded-full bg-accent-purple shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
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
              variant="secondary"
              size="lg"
              label="Schedule a Free Consultation"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
