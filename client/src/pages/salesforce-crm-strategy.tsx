import { PageHeader } from "@/components/layout/page-header";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Cloud, BarChart, CheckCircle2, Shield, ArrowRight } from "lucide-react";
import heroImage from "@assets/stock_images/data_dashboard_analy_aac797ea.jpg";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function SalesforceStrategy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <PageHeader 
        title="Salesforce & CRM strategy for modern GTM teams."
        description="Unify your Salesforce ecosystem, clean up your data, and redesign workflows that help sellers sell, marketers convert, and service teams support customers."
        image={heroImage}
        ctaText="Discuss CRM strategy"
        ctaLink="/contact"
      />

      {/* Why CRM Transformation Matters */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Why CRM Transformation Matters</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Salesforce doesn’t slow companies down—<strong>complexity does</strong>.
            </p>
            <div className="space-y-4 mb-8">
              <h3 className="font-bold text-foreground">Teams run into:</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Multiple orgs with inconsistent workflows",
                  "Data that isn’t trustworthy",
                  "Automation that’s brittle",
                  "Forecasting that’s reactive instead of predictive",
                  "AI readiness blocked by bad data"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-destructive mt-1">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 border-l-4 border-secondary shadow-sm">
              <p className="text-lg font-medium text-primary">
                PNW Cloud Services fixes CRM problems at the <strong>architecture</strong>, <strong>workflow</strong>, and <strong>GTM process</strong> level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Strategy & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">CRM Strategy & Vision</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "GTM motions", "Sales stages", "Customer lifecycle",
              "Data models", "Routing logic", "Governance", "AI & automation"
            ].map((item, i) => (
              <div key={i} className="px-6 py-3 bg-background rounded-full border border-border font-bold text-foreground">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture & Integrations */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Architecture & Integrations</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We work across your CRM ecosystem, designing an <strong>end-to-end CRM architecture</strong> that supports forecasting, pipeline management, and AI.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Salesforce", "Genesys", "Gong", "Sonar",
                  "HubSpot", "Airbyte", "Databricks", "Custom APIs"
                ].map((tool, i) => (
                  <div key={i} className="flex items-center gap-2 font-medium text-foreground">
                    <Cloud className="w-4 h-4 text-secondary" /> {tool}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-border shadow-lg flex items-center justify-center h-64">
              <p className="text-muted-foreground font-mono text-sm">[Ecosystem Diagram Placeholder]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Forecasting & Analytics */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="w-16 h-16 bg-accent-purple/10 rounded-lg flex items-center justify-center mb-6">
                <BarChart className="w-8 h-8 text-accent-purple" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">Forecasting & Analytics</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your CRM is only as good as the insights it unlocks. We modernize your analytics layer so leaders can:
              </p>
              <ul className="space-y-3">
                {[
                  "Trust pipeline data", "Forecast accurately",
                  "Understand conversion at every stage", "Identify revenue opportunities"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent-purple" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 bg-background p-8 rounded-xl border border-border">
              <p className="text-center text-muted-foreground font-mono">[Analytics Dashboard Placeholder]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance-Aware CRM */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <Shield className="w-8 h-8 text-accent-orange" />
            <h2 className="text-3xl font-bold text-primary">Compliance-Aware CRM (TCPA/CPRA)</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8">
            Compliance isn’t optional. We embed safeguards directly into your CRM to protect your business while enabling teams to move fast.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Consent management", "Dialing rules", "Contact governance", "Cross-channel policies"].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded border border-border text-center font-bold text-foreground">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary text-center mb-16">Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Online Real Estate Marketplace",
                desc: "Cleaned up CRM architecture, automated routing, and delivered platform telemetry that supported $11B+ in revenue influence."
              },
              {
                title: "Cloud Computing Company",
                desc: "Unified multi-org Salesforce data for more accurate forecasting."
              },
              {
                title: "Telecom Carrier",
                desc: "Redesigned GTM workflows at scale for sales teams."
              }
            ].map((study, i) => (
              <div key={i} className="bg-background p-8 rounded-lg border border-border hover:border-secondary transition-colors">
                <h3 className="text-xl font-bold text-primary mb-4">{study.title}</h3>
                <p className="text-muted-foreground text-sm">{study.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background text-center border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-bold text-primary mb-6">Let’s redesign your CRM into a growth engine.</h2>
          <Link href="/contact">
            <Button className="bg-secondary hover:bg-secondary/90 text-white h-14 px-10 text-lg font-bold rounded-sm shadow-lg">
              Talk through your Salesforce strategy
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
