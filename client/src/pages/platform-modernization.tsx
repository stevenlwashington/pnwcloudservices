import { PageHeader } from "@/components/layout/page-header";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Layout, Database, Server, CheckCircle2 } from "lucide-react";
import heroImage from "@assets/stock_images/futuristic_construct_f8e13174.jpg";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ConsultationModal } from "@/components/consultation-modal";

export default function PlatformModernization() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <PageHeader 
        title="Modernize your platforms without breaking your business."
        description="Upgrade your architecture, workflows, data, and user experience—while keeping your teams productive and your customers happy."
        image={heroImage}
        ctaText="Book a modernization assessment"
      />

      {/* Why Modernization Matters */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Why Modernization Matters</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Modernization isn’t a “nice to have.” It’s a competitive requirement.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              You can’t ship new features, embed AI, or scale your business when your platforms struggle with:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Technical debt", "Siloed data", 
                "Long release cycles", "Fragile integrations",
                "Manual workflows", "Inconsistent user experience"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xl font-bold text-primary border-l-4 border-secondary pl-6 italic">
              PNW Cloud Services modernizes systems in a way that respects current operations, future AI, and business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary text-center mb-16">Our Approach</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discover",
                items: ["Map current systems", "Identify friction points", "Define modernization goals"]
              },
              {
                step: "2",
                title: "Design",
                items: ["Future-state architecture", "Map data models", "Align UX & workflows"]
              },
              {
                step: "3",
                title: "Migrate",
                items: ["Iterative execution", "Modernize APIs", "Improve reliability"]
              },
              {
                step: "4",
                title: "Optimize",
                items: ["Tune performance", "Add observability", "Validate outcomes"]
              }
            ].map((phase, i) => (
              <div key={i} className="bg-background p-8 rounded-xl border border-border relative group hover:-translate-y-1 transition-transform duration-300">
                <div className="text-6xl font-bold text-border/40 absolute top-4 right-4 group-hover:text-secondary/10 transition-colors">{phase.step}</div>
                <h3 className="text-xl font-bold text-primary mb-6 relative z-10">{phase.title}</h3>
                <ul className="space-y-3 relative z-10">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Modernization */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Server className="w-8 h-8 text-accent-purple" />
                <h2 className="text-3xl font-bold text-primary">Architecture Modernization</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Modernizing platforms doesn’t mean a total rewrite. We improve what matters:
              </p>
              <ul className="space-y-4">
                {[
                  "Cloud-native architecture using AWS",
                  "Modular, maintainable services",
                  "Consistent API design",
                  "Reduced operational overhead",
                  "Easier onboarding for engineering teams"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-border">
                    <CheckCircle2 className="w-5 h-5 text-accent-purple" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </ul>
            </div>
            {/* Placeholder Component */}
            <div className="bg-white p-8 rounded-xl border border-border shadow-lg flex items-center justify-center h-full min-h-[300px]">
              <div className="text-center opacity-50">
                <Layout className="w-24 h-24 text-accent-purple mx-auto mb-4" />
                <div className="font-mono text-sm bg-gray-100 p-2 rounded">[Image placeholder — Modernization Diagram coming soon]</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Modernization */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-background p-8 rounded-xl border border-border shadow-lg flex items-center justify-center h-full min-h-[300px]">
              <div className="text-center opacity-50">
                <Database className="w-24 h-24 text-accent-orange mx-auto mb-4" />
                <div className="font-mono text-sm bg-gray-200 p-2 rounded">[Image placeholder — Data Flow coming soon]</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-8 h-8 text-accent-orange" />
                <h2 className="text-3xl font-bold text-primary">Data Modernization</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Data is the engine for AI. We modernize data systems by:
              </p>
              <ul className="space-y-4">
                {[
                  "Cleaning and mapping data models",
                  "Establishing single sources of truth",
                  "Improving pipelines for accuracy and reliability",
                  "Aligning data governance to compliance (TCPA, CPRA)",
                  "Preparing your data for LLMs and automation"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-background p-4 rounded-xl border border-border">
                    <CheckCircle2 className="w-5 h-5 text-accent-orange" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow & UX */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Workflow & UX Modernization</h2>
            <p className="text-lg text-muted-foreground">
              Modernization must be <strong>felt</strong>, not just implemented. We enhance customer journeys, internal tooling, and operational workflows.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {["End-to-end customer journeys", "Seller and agent experiences", "Internal tooling", "Support & compliance workflows", "Mobile and desktop UI"].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-border text-center font-bold text-foreground shadow-sm hover:shadow-md transition-all">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Outcomes */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Example Modernization Outcomes</h2>
          <div className="max-w-4xl mx-auto bg-white/10 p-8 rounded-xl border border-white/20">
            <h3 className="text-xl font-bold text-accent-orange mb-4">Leading Online Real Estate Marketplace</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Multi-platform consolidation",
                "Faster release cycles",
                "Reduced costs across storage & compute",
                "Platform ready for embedded AI workflows"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-bold text-primary mb-6">Ready to modernize your platform the right way?</h2>
          <ConsultationModal>
            <Button className="bg-secondary hover:bg-secondary/90 text-white h-14 px-10 text-lg font-bold rounded-xl shadow-lg">
              Start your modernization assessment
            </Button>
          </ConsultationModal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
