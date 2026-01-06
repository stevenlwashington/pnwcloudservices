import { Cloud, Bot, Terminal, Activity, Shield, TrendingDown, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    title: "Salesforce & CRM Strategy",
    description: "Align CRM architecture with your go-to-market strategy to accelerate revenue and improve customer insights.",
    icon: Cloud,
    href: "/salesforce-crm-strategy"
  },
  {
    title: "AI & Automation",
    description: "Deploy intelligent agents and automate complex workflows—responsibly and at scale.",
    icon: Bot,
    href: "/ai-automation"
  },
  {
    title: "DevEx & DevOps",
    description: "Accelerate delivery with internal developer platforms and automated CI/CD pipelines.",
    icon: Terminal,
    href: "/devex-devops"
  },
  {
    title: "Observability",
    description: "Gain visibility into system health to reduce mean time to resolution and improve reliability.",
    icon: Activity,
    href: "/observability"
  },
  {
    title: "Compliance & Governance",
    description: "Operationalize compliance for TCPA, CPRA, and GDPR without slowing delivery.",
    icon: Shield,
    href: "/compliance-governance"
  },
  {
    title: "Cloud Strategy & Cost Optimization",
    description: "Right-size infrastructure and reduce cloud spend while improving performance.",
    icon: TrendingDown,
    href: "/cloud-strategy-cost-optimization"
  }
];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Supporting Capabilities</h2>
          <p className="text-lg text-foreground/70 font-medium">
            We don't hand over a slide deck. We embed with your team to design, build, and ship production-ready platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={service.href}
              className="group bg-background p-6 rounded-lg border border-border shadow-sm hover:shadow-md hover:border-secondary/30 transition-all duration-300 flex flex-col h-full"
              data-testid={`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="w-12 h-12 bg-primary/5 rounded-md flex items-center justify-center mb-4 group-hover:bg-secondary/10 transition-colors">
                <service.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">{service.title}</h3>
              <p className="text-sm text-foreground/70 font-medium mb-6 flex-grow">
                {service.description}
              </p>
              <div className="flex items-center text-sm font-bold text-secondary opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
