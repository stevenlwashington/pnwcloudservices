import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Server, Zap, Shield, Eye, TrendingUp } from "lucide-react";
import { ConsultationModal } from "@/components/consultation-modal";

const SERVICES = [
  {
    slug: "platform-modernization",
    title: "Platform Modernization",
    description: "Upgrade your architecture, workflows, data, and UX without breaking your business.",
    icon: Server,
    color: "accent-purple",
    highlights: ["Architecture Design", "Data Migration", "Workflow Optimization"]
  },
  {
    slug: "ai-automation",
    title: "AI-Powered Productivity & Automation",
    description: "Design and ship AI workflows—sales agents, analytics, and automation—that move the needle.",
    icon: Bot,
    color: "accent-ai",
    highlights: ["AI Sales Agents", "Product Analytics", "Responsible AI"]
  },
  {
    slug: "salesforce-crm-strategy",
    title: "Salesforce & CRM Strategy",
    description: "Unify your Salesforce ecosystem, clean up data, and redesign workflows for GTM teams.",
    icon: Zap,
    color: "secondary",
    highlights: ["CRM Architecture", "Data Governance", "Workflow Automation"]
  },
  {
    slug: "devex-devops",
    title: "DevEx & DevOps",
    description: "CI/CD pipelines and developer workflows that translate to business outcomes.",
    icon: TrendingUp,
    color: "accent-orange",
    highlights: ["Pipeline Automation", "DORA Metrics", "Developer Experience"]
  },
  {
    slug: "observability",
    title: "Observability",
    description: "Turn logs and signals into meaningful decisions and improved reliability.",
    icon: Eye,
    color: "accent-purple",
    highlights: ["System Monitoring", "Incident Response", "Performance Tuning"]
  },
  {
    slug: "compliance-governance",
    title: "Compliance & Governance",
    description: "TCPA, CPRA, AI governance, and safeguards that keep teams compliant—and fast.",
    icon: Shield,
    color: "secondary",
    highlights: ["Compliance Strategy", "AI Governance", "Audit & Risk"]
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 animate-in slide-in-from-bottom-5 duration-500">
            Services Built for Modern Enterprise
          </h1>
          <p className="text-xl text-muted-foreground mb-10 animate-in slide-in-from-bottom-5 duration-700 delay-100">
            From platform modernization to AI automation, we help you build, scale, and optimize the systems that power your business.
          </p>
          <ConsultationModal>
            <Button className="bg-primary hover:bg-primary/90 text-white h-14 px-10 text-lg font-bold rounded-xl shadow-md animate-in slide-in-from-bottom-5 duration-700 delay-200 hover:scale-105 hover:bg-primary/85">
              Schedule a Free Consultation
            </Button>
          </ConsultationModal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => {
              const colorMap: Record<string, string> = {
                "accent-purple": "text-accent-purple",
                "accent-ai": "text-accent-ai",
                "secondary": "text-secondary",
                "accent-orange": "text-accent-orange",
              };
              
              const bgColorMap: Record<string, string> = {
                "accent-purple": "bg-accent-purple/10",
                "accent-ai": "bg-accent-ai/10",
                "secondary": "bg-secondary/10",
                "accent-orange": "bg-accent-orange/10",
              };

              return (
                <Link key={i} href={`/${service.slug}`}>
                  <a className="group">
                    <div className="h-full bg-background border border-border rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      
                      {/* Icon */}
                      <div className={`w-14 h-14 ${bgColorMap[service.color]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className={`w-7 h-7 ${colorMap[service.color]}`} />
                      </div>

                      {/* Title & Description */}
                      <h2 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-8">
                        {service.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm font-medium">
                            <div className={`w-1.5 h-1.5 ${colorMap[service.color].replace("text", "bg")} rounded-full`}></div>
                            <span className="text-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-sm font-bold text-secondary group-hover:gap-4 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-bold text-primary mb-12">Why PNW Cloud Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Enterprise Focus", desc: "We solve complex, mission-critical challenges." },
              { title: "Proven Results", desc: "$11B+ in revenue influenced, 80% velocity improvements." },
              { title: "Pragmatic Approach", desc: "Vendor-agnostic strategies aligned to your business." }
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-bold text-primary mb-6">Ready to transform your business?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Schedule a free 20-minute consultation to discuss which service is right for you.
          </p>
          <ConsultationModal>
            <Button className="bg-secondary hover:bg-secondary/90 text-white h-14 px-12 text-lg font-bold rounded-xl shadow-lg">
              Schedule a Free Consultation
            </Button>
          </ConsultationModal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
