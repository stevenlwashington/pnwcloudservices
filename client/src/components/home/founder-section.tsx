import { Users, Rocket, Building2 } from "lucide-react";

const credibilityItems = [
  {
    icon: Users,
    label: "Embedded with engineering teams"
  },
  {
    icon: Rocket,
    label: "Production systems shipped"
  },
  {
    icon: Building2,
    label: "Enterprise platform experience"
  }
];

export function FounderSection() {
  return (
    <section 
      className="py-20 border-t border-border/50"
      style={{ backgroundColor: 'hsl(120, 33%, 91%)' }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Built by Platform Engineering Leaders
            </h2>
            <p className="text-lg text-foreground/80 font-medium max-w-3xl mx-auto">
              PNW Cloud Services is built by leaders who've owned and scaled platform teams across DevOps, CRM, data, and internal tooling—partnering directly with engineers to ship production systems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            {credibilityItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/60 border border-border/30 rounded-full px-5 py-3"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
