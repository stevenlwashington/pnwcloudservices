import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Network, Code, TrendingUp, Rocket, DollarSign, Blocks, ArrowRight } from "lucide-react";
import { GlowCTA } from "@/components/cta/GlowCTA";
import { IntentPicker, IntentOption } from "@/components/cta/IntentPicker";

const aiIntentOptions: IntentOption[] = [
  {
    id: "ai-strategy",
    label: "review my AI strategy",
    description: "Schedule a free consultation to discuss your AI goals and get expert recommendations on agent deployment.",
    actionLabel: "Schedule a Free Consultation",
    actionType: "calendly",
  },
  {
    id: "agent-assessment",
    label: "get an agent readiness assessment",
    description: "Evaluate your organization's readiness to deploy AI agents at scale. We'll assess your data infrastructure, integration maturity, and governance frameworks to create a roadmap for agent deployment.",
    actionLabel: "Request Agent Readiness Assessment →",
    actionType: "calendly",
  },
  {
    id: "multi-agent",
    label: "discuss multi-agent architecture",
    description: "Explore how to architect agent ecosystems that coordinate thousands of specialized AI agents across sales, service, and engineering workflows.",
    actionLabel: "Schedule Architecture Discussion →",
    actionType: "calendly",
  },
  {
    id: "dev-automation",
    label: "request developer automation roadmap",
    description: "Get a customized roadmap for automating your development lifecycle—from scratch org provisioning to production deployment with built-in security gates.",
    actionLabel: "Request Automation Roadmap →",
    actionType: "calendly",
  },
  {
    id: "case-studies",
    label: "see AI transformation case studies",
    description: "See how we've helped similar organizations deploy AI agents at scale with measurable business outcomes.",
    actionLabel: "View Case Studies →",
    actionType: "contact",
  },
];

function HeroVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 400 300" className="w-full max-w-md" aria-hidden="true">
        <defs>
          <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#065f46" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
        
        <circle cx="200" cy="150" r="35" fill="url(#aiGradient)" opacity="0.9" />
        <text x="200" y="155" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Orchestrator</text>
        
        <g className="animate-pulse" style={{ animationDuration: "3s" }}>
          <circle cx="100" cy="80" r="25" fill="url(#nodeGradient)" opacity="0.8" />
          <text x="100" y="84" textAnchor="middle" fill="white" fontSize="8">Sales</text>
        </g>
        
        <g className="animate-pulse" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}>
          <circle cx="300" cy="80" r="25" fill="url(#nodeGradient)" opacity="0.8" />
          <text x="300" y="84" textAnchor="middle" fill="white" fontSize="8">Service</text>
        </g>
        
        <g className="animate-pulse" style={{ animationDuration: "2.8s", animationDelay: "0.3s" }}>
          <circle cx="80" cy="200" r="25" fill="url(#nodeGradient)" opacity="0.8" />
          <text x="80" y="204" textAnchor="middle" fill="white" fontSize="8">Code</text>
        </g>
        
        <g className="animate-pulse" style={{ animationDuration: "3.2s", animationDelay: "0.7s" }}>
          <circle cx="200" cy="260" r="25" fill="url(#nodeGradient)" opacity="0.8" />
          <text x="200" y="264" textAnchor="middle" fill="white" fontSize="8">Testing</text>
        </g>
        
        <g className="animate-pulse" style={{ animationDuration: "2.6s", animationDelay: "0.2s" }}>
          <circle cx="320" cy="200" r="25" fill="url(#nodeGradient)" opacity="0.8" />
          <text x="320" y="204" textAnchor="middle" fill="white" fontSize="8">Deploy</text>
        </g>
        
        <line x1="125" y1="95" x2="170" y2="130" stroke="#14b8a6" strokeWidth="2" strokeDasharray="4,2" opacity="0.6" />
        <line x1="275" y1="95" x2="230" y2="130" stroke="#14b8a6" strokeWidth="2" strokeDasharray="4,2" opacity="0.6" />
        <line x1="100" y1="175" x2="170" y2="150" stroke="#14b8a6" strokeWidth="2" strokeDasharray="4,2" opacity="0.6" />
        <line x1="200" y1="235" x2="200" y2="185" stroke="#14b8a6" strokeWidth="2" strokeDasharray="4,2" opacity="0.6" />
        <line x1="295" y1="185" x2="230" y2="165" stroke="#14b8a6" strokeWidth="2" strokeDasharray="4,2" opacity="0.6" />
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
  icon: typeof Network;
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

function TechnicalPillarCard({ icon: Icon, title, body }: { icon: typeof Network; title: string; body: string }) {
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

export default function AIAutomation() {
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
                AI That Ships to Production. Responsibly.
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                We design and deploy AI agent ecosystems across engineering, sales, and service—creating the orchestration and governance frameworks that let organizations scale to thousands of specialized agents working in coordination.
              </p>
              <GlowCTA
                source="ai-hero"
                label="Get Your AI Readiness Assessment →"
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
              AI Strategy That Ships
            </h2>
            <p className="text-xl text-gray-500">
              We design and deploy AI solutions for engineers, sales teams, and service organizations—with the governance, compliance, and outcome measurement that makes AI trustworthy at scale.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <StrategyCard
              title="Agent Ecosystems That Scale"
              body="Most organizations deploy a handful of AI experiments. We help you build agent architectures that scale to thousands—specialized agents for sales outreach, customer support, code review, testing, and operations, all coordinating intelligently across your organization."
              impactMetric="10x growth"
              impactLabel="in agent deployment scale within first year"
              icon={Network}
              gradientFrom="#ecfdf5"
              gradientTo="#f0fdfa"
              borderColor="#a7f3d0"
              iconBg="#d1fae5"
              iconColor="#065f46"
            />
            <StrategyCard
              title="Developer Velocity Through Automation"
              body="From scratch org provisioning to production deployment, we automate the entire development lifecycle. Intelligent agents handle environment setup, code review, regression testing, security scanning, and deployment orchestration."
              impactMetric="70% faster"
              impactLabel="deployment cycles with end-to-end automation"
              icon={Code}
              gradientFrom="#eff6ff"
              gradientTo="#ecfeff"
              borderColor="#bfdbfe"
              iconBg="#dbeafe"
              iconColor="#1e40af"
            />
            <StrategyCard
              title="Revenue Operations on Autopilot"
              body="AI agents that handle prospecting, qualification, meeting scheduling, follow-up, and customer success workflows—turning your revenue teams into force multipliers. We architect Agent Force deployments that scale across thousands of customer interactions."
              impactMetric="3x increase"
              impactLabel="in customer touchpoints through agent automation"
              icon={TrendingUp}
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
              icon={Network}
              title="Multi-Agent Orchestration at Scale"
              body="Design and deploy thousands of specialized agents across sales, service, and engineering workflows—with intelligent routing, context sharing, and coordinated handoffs between agents. We architect agent ecosystems that scale without chaos."
            />
            <TechnicalPillarCard
              icon={Rocket}
              title="Developer Velocity Engineering"
              body="End-to-end automation of the software development lifecycle—from scratch org provisioning to automated peer review, test ops, and production deployment with built-in security gates. We eliminate the operational friction that keeps engineers from shipping."
            />
            <TechnicalPillarCard
              icon={DollarSign}
              title="Agentic Revenue Operations"
              body="AI-powered workflows that connect marketing, sales, and service into unified revenue engines—automating outreach, qualification, follow-up, and customer success at scale. We implement Agent Force with foundations that make autonomous revenue operations production-ready."
            />
            <TechnicalPillarCard
              icon={Blocks}
              title="Production-Ready AI Infrastructure"
              body="Platform foundations that make AI deployable and maintainable—clean data pipelines, integration architectures, observability, and governance frameworks that enable trust at scale. Compliance and human oversight are woven into the architecture from day one."
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
              <p className="text-xl text-gray-700">Reduction in manual processes through intelligent automation</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-10 border border-emerald-200 shadow-lg text-center">
              <p 
                className="text-6xl md:text-7xl font-bold mb-4"
                style={{ background: "linear-gradient(135deg, #ec4899, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                $11B+
              </p>
              <p className="text-xl text-gray-700">Revenue influenced by AI solutions we've designed</p>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur rounded-2xl p-8 border border-emerald-200 text-center">
            <p className="text-lg text-gray-600">
              Applied at scale within organizations—delivering AI solutions that drive real business outcomes, not just impressive demos.
            </p>
          </div>
        </div>
      </section>

      <IntentPicker 
        headline="Start Your AI Transformation."
        source="ai-automation"
        options={aiIntentOptions}
      />

      <Footer />
    </div>
  );
}
