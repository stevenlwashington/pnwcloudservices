import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Rocket, Star, KeyRound, Route, CheckCircle2, Users, Unlock, ArrowRight, Shield } from "lucide-react";
import { GlowCTA } from "@/components/cta/GlowCTA";
import { IntentPicker, IntentOption } from "@/components/cta/IntentPicker";

const devexIntentOptions: IntentOption[] = [
  {
    id: "devex-strategy",
    label: "review my DevEx strategy",
    description: "Schedule a free consultation to discuss your developer experience goals and identify opportunities to improve engineering velocity.",
    actionLabel: "Schedule a Free Consultation",
    actionType: "calendly",
  },
  {
    id: "platform-assessment",
    label: "get a platform engineering assessment",
    description: "Get a comprehensive assessment of your current developer experience, tooling maturity, and platform engineering capabilities. We'll identify friction points and create a roadmap for improvement.",
    actionLabel: "Request Platform Assessment →",
    actionType: "calendly",
  },
  {
    id: "golden-path",
    label: "discuss golden path architecture",
    description: "Explore how to design opinionated, self-service workflows that make the right way the easy way—with guardrails built in for security and compliance.",
    actionLabel: "Schedule Architecture Discussion →",
    actionType: "calendly",
  },
  {
    id: "dora-benchmark",
    label: "request DORA metrics benchmark",
    description: "Benchmark your team's deployment frequency, lead time, change failure rate, and MTTR against industry standards. Understand where you are and what improvements will drive the most impact.",
    actionLabel: "Get DORA Benchmark →",
    actionType: "calendly",
  },
  {
    id: "case-studies",
    label: "see DevEx transformation case studies",
    description: "See how we've helped engineering organizations improve developer experience, reduce friction, and increase shipping velocity.",
    actionLabel: "View Case Studies →",
    actionType: "contact",
  },
];

function HeroVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 400 300" className="w-full max-w-md" aria-hidden="true">
        <defs>
          <linearGradient id="goldenPath" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="frictionPath" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9ca3af" />
            <stop offset="100%" stopColor="#6b7280" />
          </linearGradient>
        </defs>
        
        <path d="M50,80 Q100,60 120,100 T150,80 Q180,120 170,150 T200,180" stroke="url(#frictionPath)" strokeWidth="4" fill="none" strokeDasharray="4,4" opacity="0.5" />
        <circle cx="60" cy="75" r="10" fill="#ef4444" opacity="0.6" />
        <text x="60" y="78" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">!</text>
        <circle cx="140" cy="100" r="10" fill="#ef4444" opacity="0.6" />
        <text x="140" y="103" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">!</text>
        <rect x="165" y="145" width="12" height="12" fill="#f59e0b" rx="2" opacity="0.7" />
        <text x="171" y="154" textAnchor="middle" fill="white" fontSize="8">⏸</text>
        
        <path d="M50,220 L350,220" stroke="url(#goldenPath)" strokeWidth="6" fill="none" strokeLinecap="round" />
        
        <circle cx="100" cy="220" r="14" fill="#10b981" className="animate-pulse" style={{ animationDuration: "2s" }} />
        <text x="100" y="224" textAnchor="middle" fill="white" fontSize="10">✓</text>
        
        <circle cx="175" cy="220" r="14" fill="#10b981" className="animate-pulse" style={{ animationDuration: "2.3s", animationDelay: "0.2s" }} />
        <text x="175" y="224" textAnchor="middle" fill="white" fontSize="10">✓</text>
        
        <circle cx="250" cy="220" r="14" fill="#10b981" className="animate-pulse" style={{ animationDuration: "2.5s", animationDelay: "0.4s" }} />
        <text x="250" y="224" textAnchor="middle" fill="white" fontSize="10">✓</text>
        
        <circle cx="325" cy="220" r="14" fill="#059669" className="animate-pulse" style={{ animationDuration: "2.7s", animationDelay: "0.6s" }} />
        <text x="325" y="224" textAnchor="middle" fill="white" fontSize="10">🚀</text>
        
        <text x="70" y="50" fill="#6b7280" fontSize="11" fontWeight="500">Manual Process</text>
        <text x="50" y="250" fill="#065f46" fontSize="11" fontWeight="600">Golden Path</text>
        
        <path d="M200,150 L200,200" stroke="#14b8a6" strokeWidth="2" strokeDasharray="4,2" markerEnd="url(#arrowhead)" />
        <defs>
          <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <polygon points="0,0 6,3 0,6" fill="#14b8a6" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

function StrategyCard({ 
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
  icon: typeof Rocket;
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <div 
      className="rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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

function TechnicalPillarCard({ icon: Icon, title, body }: { icon: typeof Rocket; title: string; body: string }) {
  return (
    <div 
      className="bg-white rounded-xl p-8 border border-emerald-200/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
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

export default function DevExDevOps() {
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
                Build Internal Platforms Engineers Actually Want to Use.
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                We design developer experiences that engineers choose—not because they're mandated, but because they make shipping features faster, safer, and more sustainable than any alternative.
              </p>
              <GlowCTA
                source="devex-hero"
                label="Get Your DevEx Assessment →"
                size="lg"
              />
            </div>
            <div className="hidden lg:block animate-in slide-in-from-right-5 duration-500 delay-200">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-20">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              DevEx as a Strategic Investment
            </h2>
            <p className="text-xl text-gray-500">
              Developer experience isn't a luxury—it's a multiplier. Every hour of friction you remove compounds across your engineering organization. Treat your internal developer platform as a product with real users—your engineers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <StrategyCard
              title="Velocity Without Sacrifice"
              body="Ship faster and safer—automated quality gates, continuous testing, and intelligent rollback strategies mean speed doesn't come at the cost of reliability. We build CI/CD pipelines where quality is a default outcome, not a heroic effort."
              impactMetric="4x faster"
              impactLabel="deployment frequency with 60% fewer incidents"
              icon={Rocket}
              gradientFrom="#ecfdf5"
              gradientTo="#f0fdfa"
              borderColor="#a7f3d0"
              iconBg="#d1fae5"
              iconColor="#065f46"
            />
            <StrategyCard
              title="Platforms Engineers Choose"
              body="Internal platforms that engineers consistently adopt—because they're faster, clearer, and more empowering than workarounds. We measure developer satisfaction, gather feedback, and iterate on tooling just like you do for customer-facing products."
              impactMetric="85%"
              impactLabel="developer satisfaction with platform tools"
              icon={Star}
              gradientFrom="#eff6ff"
              gradientTo="#ecfeff"
              borderColor="#bfdbfe"
              iconBg="#dbeafe"
              iconColor="#1e40af"
            />
            <StrategyCard
              title="Self-Service Without Chaos"
              body="Engineers provision environments, deploy to production, and manage resources independently—all within guardrails that maintain security and compliance. We eliminate the bottlenecks: manual approvals replaced by policy-as-code."
              impactMetric="Days → Hours"
              impactLabel="for environment provisioning with improved reliability"
              icon={KeyRound}
              gradientFrom="#faf5ff"
              gradientTo="#fdf2f8"
              borderColor="#e9d5ff"
              iconBg="#e9d5ff"
              iconColor="#6b21a8"
            />
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
              icon={Route}
              title="Golden Path Engineering"
              body="Design opinionated, self-service workflows that make the right way the easy way. Paved paths with guardrails built in—so engineers ship fast without sacrificing quality, security, or compliance. When the golden path is smoother than the workaround, adoption becomes natural."
            />
            <TechnicalPillarCard
              icon={CheckCircle2}
              title="Quality-First Delivery Pipelines"
              body="Build CI/CD pipelines where quality gates are automated, not optional. Shift security left, catch bugs before production, and make reliability a default outcome—not a heroic effort. Every deploy passes the same rigorous checks without manual intervention."
            />
            <TechnicalPillarCard
              icon={Users}
              title="Developer-Centric Platform Design"
              body="Treat internal platforms like products—measure satisfaction, gather feedback, iterate relentlessly. Engineers adopt platforms they choose, not platforms they're forced to use. We apply product thinking to internal tooling, ensuring your platform evolves with your team's needs."
            />
            <TechnicalPillarCard
              icon={Unlock}
              title="Friction Elimination & Autonomy"
              body="Identify and remove bottlenecks—human approvals replaced by policy-as-code, knowledge silos transformed into self-service documentation, waiting replaced by instant provisioning. Give engineers the autonomy to move fast within boundaries that maintain security and compliance."
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
                4x faster
              </p>
              <p className="text-xl text-gray-700">Deployment frequency improvement (DORA)</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-10 border border-emerald-200 shadow-lg text-center">
              <p 
                className="text-6xl md:text-7xl font-bold mb-4"
                style={{ background: "linear-gradient(135deg, #ec4899, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                85%
              </p>
              <p className="text-xl text-gray-700">Developer satisfaction scores</p>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur rounded-2xl p-8 border border-emerald-200 text-center">
            <p className="text-lg text-gray-600">
              These improvements translated to stronger retention signals and measurably better employee experience scores—proving that great developer tooling isn't just about velocity, it's about building teams that operate effectively over time.
            </p>
          </div>
        </div>
      </section>

      <IntentPicker 
        headline="Transform Your Developer Experience."
        source="devex-devops"
        options={devexIntentOptions}
      />

      <Footer />
    </div>
  );
}
