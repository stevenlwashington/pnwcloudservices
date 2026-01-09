import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Workflow, Wrench, Database, Blocks, Cog, Link2, ShieldCheck, ArrowRight, AlertTriangle, CheckCircle, Lock, Unlock } from "lucide-react";
import { GlowCTA } from "@/components/cta/GlowCTA";
import { IntentPicker, IntentOption } from "@/components/cta/IntentPicker";

const crmIntentOptions: IntentOption[] = [
  {
    id: "crm-strategy",
    label: "review my CRM strategy",
    description: "Schedule a free consultation to discuss your CRM goals and get expert recommendations on GTM automation.",
    actionLabel: "Schedule a Free Consultation",
    actionType: "calendly",
  },
  {
    id: "crm-audit",
    label: "get a CRM technical audit",
    description: "Get a comprehensive technical assessment of your Salesforce architecture, data quality, and automation patterns. We'll identify the foundational work needed to unlock Agent Force and revenue automation.",
    actionLabel: "Request CRM Technical Audit →",
    actionType: "calendly",
  },
  {
    id: "gtm-roadmap",
    label: "discuss GTM automation roadmap",
    description: "Work with our team to build a phased GTM automation plan that connects marketing, sales, and customer success.",
    actionLabel: "Schedule Roadmap Discussion →",
    actionType: "calendly",
  },
  {
    id: "agent-force",
    label: "request Agent Force readiness assessment",
    description: "Find out if your CRM is ready for agentic workflows. We'll audit your data architecture, automation maturity, and integration landscape to create an Agent Force implementation roadmap.",
    actionLabel: "Get Agent Force Readiness Report →",
    actionType: "calendly",
  },
  {
    id: "case-studies",
    label: "see CRM transformation case studies",
    description: "See how we've helped similar organizations transform their Salesforce ecosystems into revenue engines.",
    actionLabel: "View Case Studies →",
    actionType: "contact",
  },
];

function HeroVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 400 200" className="w-full max-w-md" aria-hidden="true">
        <defs>
          <linearGradient id="crmGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#065f46" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
        
        <g>
          <rect x="30" y="60" width="100" height="80" rx="8" fill="#9ca3af" opacity="0.3" />
          <circle cx="80" cy="100" r="20" fill="#fbbf24" opacity="0.6" />
          <AlertTriangle className="w-8 h-8" x="68" y="88" />
          <text x="80" y="155" textAnchor="middle" fill="#6b7280" fontSize="10">Legacy CRM</text>
        </g>
        
        <g>
          <path d="M140 100 L180 100" stroke="url(#crmGradient)" strokeWidth="3" markerEnd="url(#arrowhead)" />
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#14b8a6" />
            </marker>
          </defs>
        </g>
        
        <g>
          <rect x="190" y="50" width="180" height="100" rx="8" fill="url(#crmGradient)" opacity="0.9" />
          <circle cx="230" cy="100" r="16" fill="white" opacity="0.2" />
          <text x="280" y="85" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">Revenue Engine</text>
          <text x="280" y="105" textAnchor="middle" fill="white" fontSize="9" opacity="0.8">Agent Force Ready</text>
          <text x="280" y="120" textAnchor="middle" fill="white" fontSize="9" opacity="0.8">GTM Automated</text>
        </g>
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
  icon: typeof Workflow;
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

function AgentForceReadinessVisual() {
  return (
    <div className="flex items-center justify-center gap-8 py-8">
      <div className="text-center">
        <div className="w-24 h-24 rounded-2xl bg-gray-100 border-2 border-gray-300 flex items-center justify-center mb-4 mx-auto">
          <Lock className="w-10 h-10 text-gray-400" />
        </div>
        <div className="flex gap-2 justify-center mb-3">
          <span className="px-2 py-1 bg-gray-200 text-gray-500 text-xs rounded">Agent Force</span>
          <span className="px-2 py-1 bg-gray-200 text-gray-500 text-xs rounded">Einstein</span>
        </div>
        <p className="text-sm font-medium text-gray-500">Without Foundations</p>
      </div>
      
      <div className="flex-shrink-0">
        <ArrowRight className="w-8 h-8 text-emerald-500" />
      </div>
      
      <div className="text-center">
        <div className="w-24 h-24 rounded-2xl bg-emerald-50 border-2 border-emerald-300 flex items-center justify-center mb-4 mx-auto">
          <Unlock className="w-10 h-10 text-emerald-600" />
        </div>
        <div className="flex gap-2 justify-center mb-3">
          <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded font-medium">Agent Force</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded font-medium">Einstein</span>
        </div>
        <p className="text-sm font-medium text-emerald-700">Foundation-Ready</p>
      </div>
    </div>
  );
}

function TechnicalPillarCard({ icon: Icon, title, body }: { icon: typeof Blocks; title: string; body: string }) {
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

export default function SalesforceStrategy() {
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
                Transform Your CRM from Cost Center to Revenue Engine.
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                We eliminate the technical debt and architectural gaps blocking your GTM automation—so your CRM accelerates revenue instead of slowing it down.
              </p>
              <GlowCTA
                source="crm-hero"
                label="Get Your CRM Assessment →"
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
              CRM Strategy That Drives Revenue
            </h2>
            <p className="text-xl text-gray-500">
              Your CRM should be a growth engine, not a maintenance burden. We fix problems at the architecture, workflow, and GTM process level—building the foundation required for Agent Force, automation, and measurable revenue impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <StrategyCard
              title="GTM Flow Automation"
              body="Automate the revenue operations that matter—outreach campaigns, lead routing, customer follow-up, and targeting workflows. We design intelligent automation that connects marketing, sales, and customer success, eliminating manual handoffs."
              impactMetric="50% faster"
              impactLabel="lead response times with automated GTM flows"
              icon={Workflow}
              gradientFrom="#ecfdf5"
              gradientTo="#f0fdfa"
              borderColor="#a7f3d0"
              iconBg="#d1fae5"
              iconColor="#065f46"
            />
            <StrategyCard
              title="CRM Technical Debt Reduction"
              body="Years of quick fixes and workarounds leave CRMs brittle and unmaintainable. We systematically identify and eliminate technical debt—cleaning up duplicate fields, consolidating automation rules, and establishing sustainable patterns."
              impactMetric="60% reduction"
              impactLabel="in CRM maintenance overhead after debt cleanup"
              icon={Wrench}
              gradientFrom="#eff6ff"
              gradientTo="#ecfeff"
              borderColor="#bfdbfe"
              iconBg="#dbeafe"
              iconColor="#1e40af"
            />
            <StrategyCard
              title="Salesforce Data Cloud Integration"
              body="Unlock the full potential of your customer data by connecting Salesforce Data Cloud to your entire ecosystem. We architect unified customer profiles that power personalization and AI-driven insights across every touchpoint."
              impactMetric="2x faster"
              impactLabel="time-to-insight with unified customer data"
              icon={Database}
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Foundation-Ready for Agent Force
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Salesforce's latest innovations—Agent Force for Sales and Service, Einstein AI, and autonomous workflows—require clean data architecture and sustainable technical foundations. Without them, these capabilities remain unused licenses on your invoice.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We systematically prepare your CRM for agentic workflows by:
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Cleaning duplicate records and conflicting field logic</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Refactoring monolithic automation into modular, maintainable patterns</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Establishing data governance that AI systems can trust</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Building integration architectures that support real-time decisioning</span>
              </li>
            </ul>
            
            <AgentForceReadinessVisual />
            
            <p className="text-lg text-gray-600 leading-relaxed text-center mt-8">
              The result: You unlock the bells and whistles you're already paying for—and your CRM becomes a platform that evolves with Salesforce's innovation roadmap instead of falling further behind.
            </p>
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
              icon={Blocks}
              title="Foundation-First Architecture"
              body="Clean, scalable object models that support GTM growth without creating tech debt. We audit your current data architecture, eliminate duplicates and legacy patterns, and design domain boundaries that align with how your business actually operates."
            />
            <TechnicalPillarCard
              icon={Cog}
              title="Revenue Operations Automation"
              body="Intelligent workflows that connect marketing, sales, and customer success into a unified revenue engine. We map your GTM motions, identify manual bottlenecks, and build automation that accelerates deals."
            />
            <TechnicalPillarCard
              icon={Link2}
              title="Enterprise Integration Strategy"
              body="Seamless connections between Salesforce, marketing automation, finance systems, and the rest of your martech stack. We design integration architectures that ensure data flows where it needs to go—reliably and securely."
            />
            <TechnicalPillarCard
              icon={ShieldCheck}
              title="Governance & Operational Excellence"
              body="Built-in compliance, security, and change management that scales with your business. We establish governance frameworks, audit trails, and deployment processes that ensure your CRM remains reliable."
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
                $1.5B+
              </p>
              <p className="text-xl text-gray-700">In annual revenue protected through CRM optimization</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-10 border border-emerald-200 shadow-lg text-center">
              <p 
                className="text-6xl md:text-7xl font-bold mb-4"
                style={{ background: "linear-gradient(135deg, #ec4899, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                40%
              </p>
              <p className="text-xl text-gray-700">Improvement in pipeline forecast accuracy</p>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur rounded-2xl p-8 border border-emerald-200 text-center">
            <p className="text-lg text-gray-600">
              Our CRM transformations have powered GTM operations at organizations navigating TCPA, CFPAA, and emerging AI regulations—delivering trusted data, accurate forecasting, and scalable automation.
            </p>
          </div>
        </div>
      </section>

      <IntentPicker 
        headline="Start Your CRM Transformation."
        source="crm"
        options={crmIntentOptions}
      />

      <Footer />
    </div>
  );
}
