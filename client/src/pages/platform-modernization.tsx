import { PageHeader } from "@/components/layout/page-header";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { CheckCircle2, Database, Layout, GitBranch, Server, ArrowRight } from "lucide-react";
import heroImage from "@assets/stock_images/futuristic_construct_f8e13174.jpg";

export default function PlatformModernization() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <PageHeader 
        title="Platform Modernization"
        description="Transform legacy systems into scalable, cloud-native architectures. We help you decouple monolithic applications and modernize your data estate."
        image={heroImage}
        ctaText="Book a Modernization Assessment"
      />

      {/* Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Layout,
                title: "App Modernization",
                desc: "Refactor monoliths into microservices using domain-driven design."
              },
              {
                icon: Database,
                title: "Data Modernization",
                desc: "Migrate legacy databases to cloud-native solutions like Snowflake and Databricks."
              },
              {
                icon: GitBranch,
                title: "Workflow Modernization",
                desc: "Automate manual business processes with event-driven architectures."
              },
              {
                icon: Server,
                title: "Architecture & Automation",
                desc: "Implement Infrastructure as Code (IaC) and self-healing systems."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-border hover:border-accent-purple/50 hover:shadow-lg transition-all duration-300 group bg-background rounded-sm">
                <div className="w-12 h-12 bg-primary/5 rounded-md flex items-center justify-center mb-6 group-hover:bg-accent-purple/10 transition-colors">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-accent-purple transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagram Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">From Legacy to Cloud-Native</h2>
            <p className="text-lg text-muted-foreground">Our proven migration framework ensures zero downtime and data integrity.</p>
          </div>

          {/* Conceptual Diagram */}
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-border relative">
            <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
              
              {/* Legacy State */}
              <div className="space-y-4 opacity-60">
                <div className="bg-gray-100 p-6 rounded-lg border border-gray-200">
                  <div className="font-mono text-sm text-gray-500 mb-2">Legacy Monolith</div>
                  <div className="h-20 bg-gray-300 rounded w-full animate-pulse"></div>
                  <div className="mt-2 h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
                <p className="text-sm font-medium text-muted-foreground">On-Premise / Legacy</p>
              </div>

              {/* Transition */}
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-full h-1 bg-gradient-to-r from-gray-300 via-accent-purple to-secondary relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full border border-accent-purple">
                    <GitBranch className="w-6 h-6 text-accent-purple" />
                  </div>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent-purple">Strangler Fig Pattern</p>
              </div>

              {/* Future State */}
              <div className="space-y-4">
                <div className="bg-secondary/5 p-6 rounded-lg border border-secondary/20 shadow-lg">
                  <div className="font-mono text-sm text-secondary mb-2">Cloud Native</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-8 bg-secondary/20 rounded w-full"></div>
                    <div className="h-8 bg-accent-purple/20 rounded w-full"></div>
                    <div className="h-8 bg-accent-orange/20 rounded w-full"></div>
                    <div className="h-8 bg-secondary/20 rounded w-full"></div>
                  </div>
                </div>
                <p className="text-sm font-medium text-primary">Microservices & Serverless</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-accent-orange/20 text-accent-orange border border-accent-orange/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  Case Study
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Modernizing a Fortune 500 Retailer</h2>
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  We helped a global retailer migrate 150+ on-premise applications to AWS, resulting in a 40% reduction in operational costs and 3x faster deployment cycles.
                </p>
                
                <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                  <div>
                    <div className="text-4xl font-bold text-accent-orange mb-1">40%</div>
                    <div className="text-sm text-white/60">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent-purple mb-1">3x</div>
                    <div className="text-sm text-white/60">Release Velocity</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-secondary mb-1">99.99%</div>
                    <div className="text-sm text-white/60">Uptime</div>
                  </div>
                </div>
              </div>
              
              {/* Visual representation of UI */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-1 border border-white/20 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-background rounded-lg p-6 h-[400px] overflow-hidden relative">
                    {/* Mock UI */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="w-32 h-4 bg-gray-200 rounded"></div>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                        <div className="w-8 h-8 bg-primary rounded-full"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="h-24 bg-secondary/10 rounded border border-secondary/20"></div>
                      <div className="h-24 bg-accent-purple/10 rounded border border-accent-purple/20"></div>
                      <div className="h-24 bg-accent-orange/10 rounded border border-accent-orange/20"></div>
                    </div>
                    <div className="h-full bg-gray-50 rounded border border-gray-100 p-4">
                      <div className="space-y-3">
                        {[1,2,3,4].map(i => (
                          <div key={i} className="flex items-center justify-between">
                             <div className="w-1/3 h-3 bg-gray-200 rounded"></div>
                             <div className="w-1/4 h-2 bg-gray-100 rounded"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
