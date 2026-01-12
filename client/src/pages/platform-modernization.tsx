import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Layers, Server, Cloud, Shield, TrendingDown, Users, DollarSign, ArrowRight } from "lucide-react";
import { GlowCTA } from "@/components/cta/GlowCTA";
import { IntentPicker } from "@/components/cta/IntentPicker";

function HeroAnimation() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 400 200" className="w-full max-w-md" aria-hidden="true">
        <defs>
          <linearGradient id="modernGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#065f46" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
        
        <g className="animate-pulse" style={{ animationDuration: "3s" }}>
          <rect x="20" y="40" width="60" height="40" rx="4" fill="#9ca3af" opacity="0.4" />
          <rect x="20" y="90" width="60" height="40" rx="4" fill="#9ca3af" opacity="0.3" />
          <rect x="20" y="140" width="60" height="40" rx="4" fill="#9ca3af" opacity="0.5" />
        </g>
        
        <g>
          <path d="M90 60 Q150 60, 150 100 Q150 140, 200 100" fill="none" stroke="url(#flowGradient)" strokeWidth="2" strokeDasharray="8,4" className="animate-pulse" style={{ animationDuration: "2s" }} />
          <path d="M90 110 Q140 110, 170 100 Q200 90, 200 100" fill="none" stroke="url(#flowGradient)" strokeWidth="2" strokeDasharray="8,4" className="animate-pulse" style={{ animationDuration: "2.5s", animationDelay: "0.3s" }} />
          <path d="M90 160 Q150 160, 150 120 Q150 80, 200 100" fill="none" stroke="url(#flowGradient)" strokeWidth="2" strokeDasharray="8,4" className="animate-pulse" style={{ animationDuration: "2.2s", animationDelay: "0.6s" }} />
        </g>
        
        <g>
          <rect x="200" y="50" width="180" height="100" rx="8" fill="url(#modernGradient)" opacity="0.9" />
          <text x="290" y="95" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">Modern Platform</text>
          <text x="290" y="115" textAnchor="middle" fill="white" fontSize="10" opacity="0.8">Cloud-Native • Scalable</text>
        </g>
      </svg>
    </div>
  );
}

function InitiativeCard({ 
  title, 
  body, 
  impactMetric, 
  impactLabel, 
  icon: Icon,
  gradientFrom,
  gradientTo,
  borderColor,
  iconBg,
  iconColor
}: {
  title: string;
  body: string;
  impactMetric: string;
  impactLabel: string;
  icon: typeof TrendingDown;
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <div 
      className={`rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
      style={{ background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`, borderColor }}
      data-testid={`card-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: iconBg }}>
        <Icon className="w-7 h-7" style={{ color: iconColor }} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">{body}</p>
      <div className="bg-white rounded-xl p-4 border" style={{ borderColor }}>
        <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-1">Impact:</p>
        <p 
          className="text-2xl font-bold mb-1"
          style={{ background: "linear-gradient(135deg, #ec4899, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
        >
          {impactMetric}
        </p>
        <p className="text-sm text-gray-500">{impactLabel}</p>
      </div>
    </div>
  );
}

function PhaseCard({ number, title, body, color }: { number: number; title: string; body: string; color: string }) {
  const gradients: Record<string, string> = {
    emerald: "linear-gradient(135deg, #10b981, #059669)",
    blue: "linear-gradient(135deg, #3b82f6, #2563eb)",
    purple: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    teal: "linear-gradient(135deg, #14b8a6, #0d9488)"
  };
  
  const borders: Record<string, string> = {
    emerald: "#10b981",
    blue: "#3b82f6",
    purple: "#8b5cf6",
    teal: "#14b8a6"
  };

  return (
    <div className="relative">
      <div 
        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-lg"
        style={{ background: gradients[color] }}
      >
        {number}
      </div>
      <div 
        className="bg-white rounded-xl p-6 shadow-md border-t-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full"
        style={{ borderTopColor: borders[color] }}
        data-testid={`phase-${number}`}
      >
        <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

function TechnicalPillarCard({ icon: Icon, title, body }: { icon: typeof Layers; title: string; body: string }) {
  return (
    <div 
      className="bg-white rounded-xl p-8 border border-emerald-200/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
      style={{ ["--hover-border" as string]: "linear-gradient(to right, #2563eb, #059669)" }}
      data-testid={`pillar-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
        <Icon className="w-7 h-7 text-emerald-700" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4">{body}</p>
      <span className="inline-flex items-center gap-1 text-emerald-600 font-medium text-sm group-hover:gap-2 transition-all">
        Learn more <ArrowRight className="w-4 h-4" />
      </span>
    </div>
  );
}

export default function PlatformModernization() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section 
        className="relative min-h-[80vh] flex items-center pt-20"
        style={{ background: "linear-gradient(135deg, #e8f5e9 0%, #f1f8f4 50%, #e0f2f1 100%)" }}
      >
        <div className="container mx-auto px-6 md:px-20 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in slide-in-from-left-5 duration-500">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Platform Modernization That Accelerates Your Business.
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                We refactor the systems stalling your roadmap—delivering 3x faster deployments and the infrastructure your best engineers want to work on.
              </p>
              <GlowCTA
                source="platform-modernization-hero"
                label="Get Your Platform Assessment →"
                size="lg"
              />
            </div>
            <div className="hidden lg:block animate-in slide-in-from-right-5 duration-500 delay-200">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-20">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modernization as a Product Initiative
            </h2>
            <p className="text-xl text-gray-500">
              Treat platform modernization like you treat product development: as a strategic investment with measurable ROI, not a cost center.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <InitiativeCard
              title="Reduced Opportunity Cost"
              body="Every sprint spent maintaining legacy systems is a sprint your competitors spend capturing market share. Our modernization approach identifies and eliminates the specific bottlenecks blocking your highest-value features—so your team ships what matters, when it matters."
              impactMetric="3x faster"
              impactLabel="feature delivery within 6 months"
              icon={TrendingDown}
              gradientFrom="#ecfdf5"
              gradientTo="#f0fdfa"
              borderColor="#a7f3d0"
              iconBg="#d1fae5"
              iconColor="#065f46"
            />
            <InitiativeCard
              title="Talent Retention"
              body="Your best engineers aren't leaving for better pay—they're leaving for better tech stacks. Modern platforms with self-service tooling and cloud-native patterns don't just improve productivity; they become competitive advantages in talent wars."
              impactMetric="40% lower"
              impactLabel="engineering turnover with modern platforms"
              icon={Users}
              gradientFrom="#eff6ff"
              gradientTo="#ecfeff"
              borderColor="#bfdbfe"
              iconBg="#dbeafe"
              iconColor="#1e40af"
            />
            <InitiativeCard
              title="Cost Predictability"
              body="Legacy infrastructure hides costs until they become crises—emergency patches, scaling bottlenecks, compliance gaps. Modern cloud platforms provide transparent, elastic cost models with governance built in."
              impactMetric="60% fewer"
              impactLabel="unplanned infrastructure costs"
              icon={DollarSign}
              gradientFrom="#faf5ff"
              gradientTo="#fdf2f8"
              borderColor="#e9d5ff"
              iconBg="#e9d5ff"
              iconColor="#6b21a8"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our 4-Phase Modernization Framework
            </h2>
            <p className="text-xl text-gray-500">
              A proven, iterative approach that delivers value every step of the way
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute top-5 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-emerald-400 via-blue-400 to-teal-400 hidden md:block" />
            
            <div className="grid md:grid-cols-4 gap-8">
              <PhaseCard
                number={1}
                title="Discovery & Assessment"
                body="Map current state, identify bottlenecks, prioritize high-impact areas"
                color="emerald"
              />
              <PhaseCard
                number={2}
                title="Strategic Roadmapping"
                body="Design target architecture, create phased migration plan, define success metrics"
                color="blue"
              />
              <PhaseCard
                number={3}
                title="Iterative Transformation"
                body="Execute in sprints, deliver working increments, minimize disruption"
                color="purple"
              />
              <PhaseCard
                number={4}
                title="Optimization & Scale"
                body="Fine-tune performance, enable team autonomy, establish best practices"
                color="teal"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Technical Pillars
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <TechnicalPillarCard
              icon={Layers}
              title="Monolith Decomposition"
              body="Break down monolithic systems into scalable, independently deployable services with clear domain boundaries and well-defined APIs—reducing deployment cycles from weeks to hours and eliminating the bottleneck of coordinated releases."
            />
            <TechnicalPillarCard
              icon={Server}
              title="Internal Developer Platforms"
              body="Build self-service infrastructure that empowers teams to ship faster without sacrificing governance. Paved paths with guardrails built in—so engineers get autonomy, and leadership gets compliance."
            />
            <TechnicalPillarCard
              icon={Cloud}
              title="Cloud-Native Refactoring"
              body="Leverage managed services to eliminate undifferentiated operational overhead and unlock elastic scalability. Transform infrastructure from a cost center that needs constant attention to a platform that scales on demand."
            />
            <TechnicalPillarCard
              icon={Shield}
              title="Governance as Code with Observable Foundations"
              body="Build security and compliance into the platform by default—policy enforcement happens at deployment time, not audit time. Shift compliance left so teams move fast without creating risk. Modern platforms include unified logging, distributed tracing, and real-time monitoring—so you always know what's happening and can resolve issues in minutes, not hours."
            />
          </div>
        </div>
      </section>

      <section 
        className="py-20"
        style={{ background: "linear-gradient(135deg, #f1f8f4 0%, #e8f5e9 100%)" }}
      >
        <div className="container mx-auto px-6 md:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Proven Impact
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/80 backdrop-blur rounded-2xl p-10 border border-emerald-200 shadow-lg text-center">
              <p 
                className="text-6xl md:text-7xl font-bold mb-4"
                style={{ background: "linear-gradient(135deg, #ec4899, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                80%
              </p>
              <p className="text-xl text-gray-700">Average improvement in deployment velocity within 6 months</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-10 border border-emerald-200 shadow-lg text-center">
              <p 
                className="text-6xl md:text-7xl font-bold mb-4"
                style={{ background: "linear-gradient(135deg, #ec4899, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                $11B+
              </p>
              <p className="text-xl text-gray-700">In annual revenue running on platforms we've built</p>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur rounded-2xl p-8 border border-emerald-200 text-center">
            <p className="text-lg text-gray-600">
              These results come from systematic modernization at enterprise scale—where infrastructure directly impacts business outcomes.
            </p>
          </div>
        </div>
      </section>

      <IntentPicker 
        headline="Start Your Modernization Roadmap."
        source="platform-modernization"
      />

      <Footer />
    </div>
  );
}
