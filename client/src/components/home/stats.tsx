import { TrendingUp, Zap, DollarSign } from "lucide-react";

const stats = [
  {
    value: "$11B+",
    label: "Revenue Influenced",
    icon: DollarSign,
    color: "text-accent-orange",
    bg: "bg-accent-orange/10"
  },
  {
    value: "80%",
    label: "Deployment Velocity Improvement",
    icon: Zap,
    color: "text-secondary",
    bg: "bg-secondary/10"
  },
  {
    value: "$450K+",
    label: "Annual Cost Savings",
    icon: TrendingUp,
    color: "text-accent-purple",
    bg: "bg-accent-purple/10"
  }
];

export function Stats() {
  return (
    <section className="py-20 bg-white border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-xl border border-border hover:border-transparent hover:shadow-xl transition-all duration-300 bg-background text-center"
            >
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color} font-heading`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
