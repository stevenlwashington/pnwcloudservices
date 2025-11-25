import { PageHeader } from "@/components/layout/page-header";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Shield, Lock, Check, AlertOctagon } from "lucide-react";
import heroImage from "@assets/stock_images/security_shield_digi_4d0236e6.jpg";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ComplianceGovernance() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <PageHeader 
        title="Compliance and governance that scale with your GTM motion."
        description="TCPA, CPRA, AI governance, data permissions, and platform safeguards that keep your business compliant—and your teams fast."
        image={heroImage}
        ctaText="Review compliance posture"
        ctaLink="/contact"
      />

      {/* Why Compliance Must Be Designed In */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8">Why Compliance Must Be Designed In</h2>
          <p className="text-lg text-muted-foreground mb-12">
            You cannot treat compliance as an add-on. It must be built into your CRM, contact systems, outreach, AI touchpoints, and data pipelines.
          </p>
          <div className="p-6 bg-destructive/10 text-destructive rounded-lg border border-destructive/20 inline-block font-bold">
            Without this, you risk fines, forced slowdowns, and customer trust loss.
          </div>
        </div>
      </section>

      {/* TCPA & CPRA Foundations */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">TCPA & CPRA Foundations</h2>
              <p className="text-lg text-muted-foreground mb-6">We help teams define:</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {["Consent policies", "Dialing logic", "Contact governance", "Data retention", "Customer access controls", "Audit pathways"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 font-medium">
                    <Check className="w-4 h-4 text-secondary" /> {item}
                  </div>
                ))}
              </div>
              <p className="font-bold text-xl text-secondary">Compliance becomes a guardrail, not a roadblock.</p>
            </div>
            <div className="bg-background p-12 rounded-full border border-border flex items-center justify-center h-80 w-80 mx-auto lg:ml-auto">
              <Lock className="w-24 h-24 text-primary opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* AI Governance */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">AI Governance</h2>
            <p className="text-xl opacity-90 mb-12">
              AI creates both opportunity and risk. We design:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Human-in-the-loop review", "Data access controls", "Model evaluation", "Privacy-aware tooling", "Responsible AI practices"].map((item, i) => (
                <span key={i} className="px-4 py-2 bg-white/10 rounded border border-white/20 text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
            <p className="font-bold text-lg text-accent-orange">We help teams adopt AI responsibly—without freezing innovation.</p>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-4 bg-white p-6 rounded-lg border border-border shadow-sm">
            <AlertOctagon className="w-8 h-8 text-accent-orange" />
            <div className="text-left">
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Example Outcome</div>
              <div className="text-xl font-bold text-primary">Mitigated over $1B in regulatory exposure</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-bold text-primary mb-6">Protect your business without slowing it down.</h2>
          <Link href="/contact">
            <Button className="bg-secondary hover:bg-secondary/90 text-white h-14 px-10 text-lg font-bold rounded-sm shadow-lg">
              Review your compliance posture
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
