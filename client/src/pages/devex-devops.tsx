import { PageHeader } from "@/components/layout/page-header";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { GitPullRequest, Terminal, Gauge, Rocket, CheckCircle2 } from "lucide-react";
import heroImage from "@assets/stock_images/devops_pipeline_infi_c0072be5.jpg";
import { Button } from "@/components/ui/button";
import { ConsultationModal } from "@/components/consultation-modal";

export default function DevEx() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <PageHeader 
        title="DevEx & DevOps built as a product."
        description="CI/CD pipelines, frictionless developer workflows, and DORA metrics that translate into real business outcomes."
        image={heroImage}
        ctaText="Evaluate your pipeline"
      />

      {/* Why DevEx Matters */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">Why DevEx Matters</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Developer experience is one of the strongest predictors of velocity, quality, talent retention, and innovation.
            </p>
            <div className="p-6 bg-white border border-border shadow-sm inline-block rounded-xl">
              <p className="text-xl font-bold text-foreground">
                If developers are frustrated, the business slows down.<br/>
                <span className="text-secondary">If developers can move freely, the business accelerates.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Philosophy: Platform as a Product</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Clear paved paths", "Self-service tooling", 
              "Low-friction environments", "Strong documentation",
              "Consistent workflows", "Good defaults that scale"
            ].map((item, i) => (
              <div key={i} className="p-6 bg-background border border-border rounded-xl text-center font-bold text-foreground">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolchain */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Toolchain We Support</h2>
          <div className="flex flex-wrap justify-center gap-8 opacity-90">
            {[
              "VSCode", "GitLab", "Gearset (Salesforce)", "Jira",
              "Slack", "Splunk", "Functionize"
            ].map((tool, i) => (
              <span key={i} className="text-xl font-medium border border-white/30 px-6 py-2 rounded-full">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CI/CD & Release Automation */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">CI/CD & Release Automation</h2>
              <p className="text-lg text-muted-foreground mb-6">We build pipelines that:</p>
              <ul className="space-y-4">
                {[
                  "Reduce release times from days to minutes",
                  "Automate testing and code validation",
                  "Improve deployment reliability",
                  "Work seamlessly for Salesforce + cloud teams",
                  "Support feature flags and rapid iteration"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </ul>
            </div>
            <div className="bg-background p-8 rounded-xl border border-border flex flex-col items-center justify-center gap-4 min-h-[300px]">
              <div className="font-mono text-sm text-muted-foreground mb-4 bg-white p-2 rounded">[Image placeholder — CI/CD Pipeline Diagram coming soon]</div>
              <div className="flex gap-2 text-xs font-bold uppercase">
                <span className="px-3 py-1 bg-white border rounded">Plan</span>
                <span className="px-3 py-1 bg-white border rounded">Develop</span>
                <span className="px-3 py-1 bg-white border rounded">Validate</span>
                <span className="px-3 py-1 bg-white border rounded">Deploy</span>
                <span className="px-3 py-1 bg-white border rounded">Observe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DORA Metrics */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary text-center mb-16">DORA Metrics as Business Outcomes</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Lead time to change", icon: GitPullRequest },
              { label: "Deployment frequency", icon: Rocket },
              { label: "Change failure rate", icon: Terminal },
              { label: "Mean time to restore", icon: Gauge },
            ].map((metric, i) => (
              <div key={i} className="p-8 bg-white border border-border rounded-xl text-center group hover:border-accent-purple transition-colors">
                <metric.icon className="w-10 h-10 mx-auto mb-4 text-muted-foreground group-hover:text-accent-purple transition-colors" />
                <div className="font-bold text-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg font-medium">…and we translate these into:</p>
            <div className="flex justify-center gap-8 mt-4 text-muted-foreground">
              <span>Faster GTM response</span>
              <span>Better customer satisfaction</span>
              <span>Lower operational costs</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-bold text-primary mb-6">Ready to modernize your development pipeline?</h2>
          <ConsultationModal>
            <Button className="bg-secondary hover:bg-secondary/90 text-white h-14 px-10 text-lg font-bold rounded-xl shadow-lg">
              Improve developer experience
            </Button>
          </ConsultationModal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
