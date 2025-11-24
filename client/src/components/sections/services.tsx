import { TrendingUp, PiggyBank, Zap, ShieldCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import analyticsImage from "@assets/stock_images/pacific_northwest_fo_d2917bdb.jpg";

const services = [
  {
    icon: TrendingUp,
    title: "Increase Revenue",
    target: "Sales and Customer Support Leadership",
    description: "Strengthen customer relationships with data-driven insights and automation.",
    features: ["Sales Cloud Automation", "AI-Driven Insights", "Unified Customer Data"],
    why: "Business leaders care about improving customer satisfaction and increasing revenue."
  },
  {
    icon: PiggyBank,
    title: "Reduce Costs",
    target: "CTOs, Engineering Leaders, DevOps",
    description: "Empower developers to ship faster, reduce toil, and increase release confidence.",
    features: ["CI/CD Automation", "Developer Portals", "Self-Service Pipelines"],
    why: "Developers care about reducing toil and automating workflows."
  },
  {
    icon: Zap,
    title: "Improve Efficiency",
    target: "Product Managers, Data Teams",
    description: "Unlock the power of connected data and reduce manual effort.",
    features: ["Salesforce Implementation", "Data Lake Integration", "Secure Data Syncing"],
    why: "Business leaders care about clean, actionable data for decision-making."
  },
  {
    icon: ShieldCheck,
    title: "Ensure Security",
    target: "SREs, Platform Owners",
    description: "Gain deep visibility into system health, performance, and reliability.",
    features: ["Monitoring and Alerts", "Incident Response", "Performance Optimization"],
    why: "Business leaders care about uptime and fast resolution times."
  }
];

export function Services() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">How we move business forward — with confidence.</h2>
          <p className="text-lg text-muted-foreground">
            We bridge the gap between business goals and technical execution, ensuring every investment delivers value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-secondary/20 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-background rounded-none group-hover:bg-secondary/10 transition-colors">
                  <service.icon className="w-8 h-8 text-secondary" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground border border-border px-2 py-1">
                  For {service.target.split(',')[0]}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 min-h-[3rem]">
                {service.description}
              </p>

              <div className="space-y-4 mb-6">
                <div className="h-px bg-border/50"></div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background p-4 border-l-2 border-secondary">
                <p className="text-sm italic text-foreground/70">
                  <span className="font-bold text-primary not-italic block mb-1">Why It Works:</span>
                  "{service.why}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Section */}
        <div className="bg-primary text-white p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4 text-white/80">
                <Lock className="w-6 h-6" />
                <span className="uppercase tracking-widest text-sm font-bold">Compliance & Legal</span>
              </div>
              <h3 className="text-3xl font-bold mb-6">Protect your business and customer data while automating compliance.</h3>
              <ul className="space-y-3 mb-8">
                {["TCPA, CPRA, GDPR Consent Management", "Secure Data Access", "Vulnerability Scanning"].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <ShieldCheck className="w-5 h-5 mr-3 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="bg-white text-primary hover:bg-gray-100 border-none rounded-none font-bold px-8">
                Learn More about Security
              </Button>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px]">
              <img 
                src={analyticsImage} 
                alt="Security Analytics" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
