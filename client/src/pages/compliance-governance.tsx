import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Shield, Lock, FileCheck, Scale, ChevronDown } from "lucide-react";
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
    title: "Compliance as Enabler",
    content: "Compliance shouldn't slow your teams down—it should clear the path forward. We design compliance frameworks that integrate seamlessly into your workflows, turning regulatory requirements into competitive advantages. When compliance is built into the foundation, your teams move faster with confidence."
  },
  {
    title: "Governance as Code",
    content: "Manual compliance checks don't scale. We implement policy-as-code frameworks that automate governance across your entire technology stack. From data access controls to audit trails, every compliance requirement becomes an automated, testable, and version-controlled artifact."
  },
  {
    title: "Risk-Aware Innovation",
    content: "Innovation and compliance aren't mutually exclusive. We help organizations adopt emerging technologies—including AI—with built-in safeguards. Our frameworks enable rapid experimentation while maintaining the guardrails that protect your business and customers."
  }
];

const technicalPillars = [
  {
    icon: Shield,
    title: "TCPA & CPRA Foundations",
    description: "Consent management, contact governance, and data retention policies built into your CRM and outreach systems from day one."
  },
  {
    icon: Scale,
    title: "AI Governance Framework",
    description: "Human-in-the-loop review processes, model evaluation protocols, and responsible AI practices that enable innovation without exposure."
  },
  {
    icon: Lock,
    title: "Data Access Controls",
    description: "Role-based permissions, privacy-aware tooling, and customer data access workflows that meet regulatory requirements."
  },
  {
    icon: FileCheck,
    title: "Audit & Reporting",
    description: "Automated audit trails, compliance dashboards, and regulatory reporting that's always ready for inspection."
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

export default function ComplianceGovernance() {
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
              Frictionless Trust.{" "}
              <span className="block mt-2">Compliance at Scale.</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed max-w-3xl animate-in slide-in-from-bottom-5 duration-500 delay-100">
              TCPA, CPRA, AI governance, and data permissions that keep your business compliant—and your teams moving fast.
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
              Compliance as a Strategic Advantage
            </h2>
            <p className="text-lg text-foreground/70 mb-12">
              The best compliance programs don't just avoid risk—they accelerate your business by removing uncertainty and enabling confident decision-making.
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
              <div className="text-6xl md:text-7xl font-bold mb-4" style={{ background: "linear-gradient(to right, #ec4899, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>$1B+</div>
              <p className="text-xl text-white/90 font-medium">Regulatory exposure mitigated</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
              <div className="text-6xl md:text-7xl font-bold mb-4" style={{ background: "linear-gradient(to right, #ec4899, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>100%</div>
              <p className="text-xl text-white/90 font-medium">Audit readiness maintained</p>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <p className="text-lg text-white/80 leading-relaxed">
              Compliance frameworks designed for organizations navigating <span className="font-bold text-white">TCPA</span>, <span className="font-bold text-white">CPRA</span>, and emerging <span className="font-bold text-white">AI regulations</span>—protecting revenue while enabling growth.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready for a Compliance Strategy Review?
            </h2>
            <p className="text-lg text-foreground/70 mb-10">
              Let's discuss how to transform compliance from a constraint into a competitive advantage.
            </p>
            <GlowCTA
              source="compliance-governance-final-cta"
              variant="primary"
              size="lg"
              label="I want to review my compliance strategy →"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
