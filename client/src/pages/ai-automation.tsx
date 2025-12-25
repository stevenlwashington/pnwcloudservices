import { PageHeader } from "@/components/layout/page-header";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Bot, BarChart, FileText, Shield } from "lucide-react";
import heroImage from "@assets/stock_images/artificial_intellige_9d4db54f.jpg";
import { ScheduleFreeConsultationCTA } from "@/components/ScheduleFreeConsultationCTA";

export default function AIAutomation() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <PageHeader 
        title="AI that ships outcomes, not experiments."
        description="PNW Cloud Services helps you design and ship AI-powered workflows—sales agents, product insights, and automation—that actually move revenue, efficiency, and customer satisfaction, not just spin up another proof of concept."
        image={heroImage}
        ctaText="Explore AI Opportunities" 
      />

      {/* Section 1: Why AI has to start with your platforms */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8">Why AI has to start with your platforms</h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Most teams don’t fail at AI because the models are bad. They fail because:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-8 text-muted-foreground">
              <li>The data feeding those models is incomplete or messy</li>
              <li>The workflows around AI are bolted on instead of designed in</li>
              <li>No one is clear on how to measure success beyond “we built a cool demo”</li>
            </ul>

            <p className="text-lg font-medium text-primary mb-6">
              PNW Cloud Services starts with your <strong>platforms, data, and GTM systems</strong>—then layers AI in a way that is:
            </p>
            <ul className="space-y-4">
              {[
                "Grounded in clear business outcomes",
                "Respectful of compliance and governance (TCPA, CPRA, internal policies)",
                "Sustainable for your engineering and operations teams"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-border shadow-sm hover:translate-y-[-2px] transition-transform">
                  <div className="w-2 h-2 bg-accent-ai rounded-full shadow-[0_0_10px_theme(colors.accent.ai)]"></div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: AI Sales Agents */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent-ai/10 rounded-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-accent-ai" />
                </div>
                <h2 className="text-3xl font-bold text-primary">AI Sales Agents (B2B & B2C)</h2>
              </div>
              
              <h3 className="text-xl font-bold mb-4">What we build</h3>
              <p className="text-muted-foreground mb-8">
                We design AI Sales Agents that act like an always-on extension of your GTM team, not a random chatbot bolted to your website.
              </p>

              <div className="space-y-8">
                <div className="p-6 bg-background rounded-xl border border-border hover:shadow-md transition-all">
                  <h4 className="font-bold text-lg mb-3 text-accent-ai">B2B AI Sales Agents</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span className="text-accent-ai">•</span> Qualify inbound leads using existing data and behavioral signals</li>
                    <li className="flex gap-2"><span className="text-accent-ai">•</span> Route to the right reps based on territory, segment, or product line</li>
                    <li className="flex gap-2"><span className="text-accent-ai">•</span> Draft personalized outreach and follow-ups that match your tone and brand</li>
                    <li className="flex gap-2"><span className="text-accent-ai">•</span> Update Salesforce or your CRM automatically with key callouts and next steps</li>
                  </ul>
                </div>

                <div className="p-6 bg-background rounded-xl border border-border hover:shadow-md transition-all">
                  <h4 className="font-bold text-lg mb-3 text-accent-ai">B2C AI Sales Agents</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span className="text-accent-ai">•</span> Guide customers through complex product choices</li>
                    <li className="flex gap-2"><span className="text-accent-ai">•</span> Answer pre-purchase questions using trusted, curated knowledge</li>
                    <li className="flex gap-2"><span className="text-accent-ai">•</span> Hand off to human agents gracefully when needed</li>
                    <li className="flex gap-2"><span className="text-accent-ai">•</span> Capture intent and feedback to improve journeys over time</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-background p-8 rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-6">What this can achieve</h3>
                <div className="space-y-6">
                  {[
                    { title: "Faster speed-to-lead", desc: "Instant response times for every visitor." },
                    { title: "Higher conversion", desc: "Better qualification leading to closed deals." },
                    { title: "Better signal", desc: "Rich data for marketing and revenue operations." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 bg-accent-orange/20 rounded-full flex items-center justify-center flex-shrink-0 text-accent-orange font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-bold text-foreground">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Placeholder Component */}
              <div className="aspect-video bg-muted/30 rounded-xl border border-border flex items-center justify-center text-muted-foreground text-sm font-medium">
                [AI Workflow Diagram Placeholder — Coming Soon]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Product Analytics */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <BarChart className="w-8 h-8 text-accent-ai" />
              <h2 className="text-3xl font-bold">AI-Embedded Product Analytics & Insights</h2>
            </div>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              You don’t need more dashboards—you need better questions and faster answers.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-accent-ai">We help you:</h3>
                <ul className="space-y-3 text-white/70">
                  <li>• Segment users by behavior and outcome</li>
                  <li>• Identify friction in critical workflows</li>
                  <li>• Surface hidden patterns automatically</li>
                  <li>• Generate actionable narratives for leaders</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-accent-ai">Working with:</h3>
                <ul className="space-y-3 text-white/70">
                  <li>• Product analytics and telemetry</li>
                  <li>• CRM and GTM systems</li>
                  <li>• Data platforms and warehouses</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 p-6 rounded-xl border border-white/20 inline-block">
              <p className="font-bold text-lg">The goal: shorten the loop between <br/>
              <span className="text-accent-ai">signal → insight → decision → change</span>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Product Management */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="w-16 h-16 bg-accent-purple/10 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-accent-purple" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-6">AI for Product Management & Roadmapping</h2>
              <p className="text-lg text-muted-foreground mb-8">
                AI isn’t going to replace your product managers. But it can absolutely take friction out of their day.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Generate structured user stories",
                  "Draft PRDs and requirement docs",
                  "Propose roadmap options & tradeoffs",
                  "Summarize customer feedback"
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-background rounded-lg border border-border text-sm font-medium text-foreground hover:border-accent-purple/50 transition-colors">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 bg-accent-purple/5 p-8 rounded-xl border border-accent-purple/20">
               <h3 className="text-xl font-bold text-accent-purple mb-4">The Result</h3>
               <p className="text-lg font-medium text-foreground leading-relaxed">
                 It’s not “auto-pilot product management.” <br/><br/>
                 It’s <strong>more time spent talking to customers and shaping strategy</strong>, and less time wrangling documents.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: The AI Stack */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">The AI stack we work with</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            We’re vendor-aware but not vendor-locked. Depending on your environment and needs, we align the stack to your compliance, security, and platform investments.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { name: "OpenAI", desc: "General-purpose LLMs" },
              { name: "Anthropic", desc: "Safer, long-context reasoning" },
              { name: "Google Gemini", desc: "Integrated stack" },
              { name: "Glean", desc: "Enterprise search" },
              { name: "Replit", desc: "Rapid experimentation" }
            ].map((tool, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-border shadow-sm w-64 hover:border-accent-ai hover:shadow-md hover:translate-y-[-2px] transition-all">
                <div className="font-bold text-lg text-primary mb-1">{tool.name}</div>
                <div className="text-xs text-muted-foreground">{tool.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Responsible AI */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto border border-border rounded-xl p-8 md:p-12 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary via-accent-purple to-accent-orange"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <Shield className="w-8 h-8 text-accent-ai" />
              <h2 className="text-3xl font-bold text-primary">Responsible AI, by design</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              You can’t separate AI from governance anymore. Every engagement considers:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {[
                { title: "Data Governance", desc: "What data are we using?" },
                { title: "Privacy & Regulation", desc: "TCPA, CPRA, internal policies." },
                { title: "Human-in-the-loop", desc: "Where do people make final decisions?" },
                { title: "Measurement", desc: "Is this helping or hurting?" }
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-1.5 h-1.5 bg-accent-ai rounded-full mt-2 shadow-[0_0_5px_theme(colors.accent.ai)]"></div>
                  <div>
                    <div className="font-bold text-foreground">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-background p-6 rounded-xl border border-border">
              <h4 className="font-bold mb-2 text-sm uppercase tracking-wider text-muted-foreground">Our Solution Design Philosophy</h4>
              <div className="flex flex-wrap gap-4">
                <span className="px-3 py-1 bg-white border border-border rounded-full text-sm font-medium hover:border-accent-ai transition-colors">Traceable</span>
                <span className="px-3 py-1 bg-white border border-border rounded-full text-sm font-medium hover:border-accent-ai transition-colors">Tunable</span>
                <span className="px-3 py-1 bg-white border border-border rounded-full text-sm font-medium hover:border-accent-ai transition-colors">Accountable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: How we work */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
           <h2 className="text-3xl font-bold text-primary text-center mb-16">How we work with you</h2>
           <div className="grid md:grid-cols-4 gap-6">
             {[
               { step: "01", title: "Discovery & Alignment", desc: "Clarify goals, constraints, and success metrics." },
               { step: "02", title: "Design & Architecture", desc: "Define user journeys, governance, and stack." },
               { step: "03", title: "Build & Integrate", desc: "Implement workflows, integrations, and UX." },
               { step: "04", title: "Launch & Iterate", desc: "Validate impact and tune based on usage." }
             ].map((phase, i) => (
               <div key={i} className="bg-white p-6 rounded-xl border border-border relative group hover:-translate-y-1 transition-transform duration-300">
                 <div className="text-4xl font-bold text-border mb-4 group-hover:text-accent-ai/20 transition-colors">{phase.step}</div>
                 <h3 className="text-lg font-bold text-foreground mb-2">{phase.title}</h3>
                 <p className="text-sm text-muted-foreground">{phase.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-bold text-primary mb-6">Ready to turn AI into a real advantage?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            PNW Cloud Services can help you connect the dots between platforms, data, and AI so your teams move faster—and your customers feel the difference.
          </p>
          <ScheduleFreeConsultationCTA
            source="ai-automation-cta"
            variant="secondary"
            size="lg"
            label="Start a Conversation"
            className="h-14 px-10 text-lg rounded-xl shadow-lg"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
