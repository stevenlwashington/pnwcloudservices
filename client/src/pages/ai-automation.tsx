import { PageHeader } from "@/components/layout/page-header";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Bot, BrainCircuit, Sparkles, Workflow } from "lucide-react";
import heroImage from "@assets/stock_images/artificial_intellige_9d4db54f.jpg";

export default function AIAutomation() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <PageHeader 
        title="AI-Powered Productivity & Automation"
        description="Deploy intelligent agents and automate complex workflows. We help you harness the power of LLMs to drive tangible business outcomes, safely and securely."
        image={heroImage}
        ctaText="Discuss AI Opportunities"
      />

      {/* Capabilities Matrix */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bot className="w-6 h-6 text-accent-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">AI Sales Agents</h3>
                  <p className="text-muted-foreground">Autonomous agents for B2B and B2C outreach, qualification, and scheduling.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BrainCircuit className="w-6 h-6 text-accent-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Insight Generation</h3>
                  <p className="text-muted-foreground">Leverage tools like Glean to unlock enterprise knowledge and drive decision-making.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Workflow className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Automated Roadmaps</h3>
                  <p className="text-muted-foreground">Generate user stories and product roadmaps directly from customer feedback data.</p>
                </div>
              </div>
            </div>

            {/* Tech Stack Grid */}
            <div className="bg-white p-8 rounded-xl border border-border shadow-lg">
              <h3 className="text-center font-bold text-sm uppercase tracking-widest mb-8 text-muted-foreground">Our AI Toolkit</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["OpenAI", "Anthropic", "Gemini", "Glean", "Replit", "LangChain"].map((tool, i) => (
                  <div key={i} className="h-24 bg-gray-50 rounded-lg flex items-center justify-center border border-transparent hover:border-primary/20 hover:shadow-md transition-all cursor-default">
                    <span className="font-bold text-gray-700">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Governance Note */}
          <div className="bg-primary text-white p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-full">
                <Sparkles className="w-6 h-6 text-accent-orange" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Responsible AI & Governance</h3>
                <p className="text-white/70 text-sm">We prioritize data safety, privacy, and human-in-the-loop validation.</p>
              </div>
            </div>
            <button className="px-6 py-3 border border-white/30 hover:bg-white/10 rounded text-sm font-bold transition-colors whitespace-nowrap">
              View Governance Framework
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
