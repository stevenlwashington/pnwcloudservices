import { Layout, Cloud, Bot, Terminal, Activity, Shield, TrendingDown, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    title: "Platform Modernization",
    description: "Turn fragile legacy systems into platforms built to scale. We modernize monoliths and aging infrastructure into cloud-native platforms that support faster delivery, safer change, and long-term growth—without rewriting your business overnight.",
    icon: Layout,
    href: "/platform-modernization",
    isPrimary: true
  },
  {
    title: "Salesforce & CRM Strategy",
    description: "Make your CRM a growth engine, not a workflow bottleneck. We design Salesforce architectures that align data, teams, and automation—so your CRM supports revenue scale instead of slowing it down.",
    icon: Cloud,
    href: "/salesforce-crm-strategy",
    isPrimary: false
  },
  {
    title: "AI & Automation",
    description: "Automate the work that shouldn't need human judgment. We implement practical automation and AI workflows on top of stable platforms—reducing manual effort and improving accuracy without introducing fragility.",
    icon: Bot,
    href: "/ai-automation",
    isPrimary: false
  },
  {
    title: "DevEx & DevOps",
    description: "Ship changes confidently without breaking production. We build pipelines, environments, and developer tooling that make releases predictable, repeatable, and boring—in the best way.",
    icon: Terminal,
    href: "/devex-devops",
    isPrimary: false
  },
  {
    title: "Observability",
    description: "Know what's broken before your customers do. We implement end-to-end visibility so teams can detect issues early, resolve them faster, and understand how system health impacts the business.",
    icon: Activity,
    href: "/observability",
    isPrimary: false
  },
  {
    title: "Compliance & Governance",
    description: "Build guardrails that enable speed instead of blocking it. We embed security, compliance, and data governance directly into platform design—so teams move fast without creating risk.",
    icon: Shield,
    href: "/compliance-governance",
    isPrimary: false
  },
  {
    title: "Cloud Strategy & Cost Optimization",
    description: "Reduce cloud spend by fixing architecture, not cutting corners. We help teams understand where costs come from, why they grow, and how to optimize sustainably without sacrificing reliability.",
    icon: TrendingDown,
    href: "/cloud-strategy-cost-optimization",
    isPrimary: false
  }
];

export function ServicesGrid() {
  const primaryService = services.find(s => s.isPrimary);
  const supportingServices = services.filter(s => !s.isPrimary);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-left">Start with the Platform. Everything Else Builds on It.</h2>
          <p className="text-lg text-foreground/80 font-medium text-left">
            We don't deliver slide decks. We embed with teams to design, build, and ship production-ready platforms.
          </p>
        </div>

        {primaryService && (
          <div className="max-w-4xl mx-auto mb-12">
            <Link 
              href={primaryService.href}
              className="group relative block"
              data-testid="service-card-platform-modernization"
            >
              {/* Gradient glow effect */}
              <div 
                className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-500 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-60 motion-reduce:transition-none"
                aria-hidden="true"
              />
              
              <div className="relative bg-white p-8 md:p-10 rounded-2xl border border-slate-200 group-hover:border-slate-300 shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-0.5 motion-reduce:transform-none">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/10 transition-colors">
                    <primaryService.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-1 rounded">Start here</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{primaryService.title}</h3>
                    <p className="text-foreground/80 font-medium leading-relaxed mb-4">
                      {primaryService.description}
                    </p>
                    <div className="inline-flex items-center text-sm font-bold text-secondary">
                      <span className="relative">
                        See how we modernize platforms
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary origin-left scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                      </span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportingServices.map((service, index) => (
            <Link 
              key={index} 
              href={service.href}
              className="group relative block"
              data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Gradient glow effect */}
              <div 
                className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-500 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-60 motion-reduce:transition-none"
                aria-hidden="true"
              />
              
              <div className="relative h-full bg-white p-6 rounded-lg border border-slate-200 shadow-sm group-hover:shadow-lg group-hover:-translate-y-0.5 transition-all duration-300 flex flex-col motion-reduce:transform-none">
                <div className="w-12 h-12 bg-primary/5 rounded-md flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">{service.title}</h3>
                <p className="text-sm text-foreground/80 font-medium mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <div className="inline-flex items-center text-sm font-bold text-secondary">
                  <span className="relative">
                    Learn more
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary origin-left scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                  </span>
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
