import { PageHeader } from "@/components/layout/page-header";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { GitPullRequest, Terminal, Gauge, Rocket } from "lucide-react";
import heroImage from "@assets/stock_images/devops_pipeline_infi_c0072be5.jpg";

export default function DevEx() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <PageHeader 
        title="DevEx & DevOps"
        description="Treat your internal developer platform as a product. We remove friction, automate toil, and accelerate your DORA metrics."
        image={heroImage}
        ctaText="Assess Your Pipeline"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          
          {/* DORA Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-24">
            {[
              { label: "Deployment Frequency", value: "On-Demand", icon: Rocket },
              { label: "Lead Time for Changes", value: "< 1 Hour", icon: GitPullRequest },
              { label: "Time to Restore", value: "< 30 Mins", icon: Gauge },
              { label: "Change Failure Rate", value: "< 5%", icon: Terminal },
            ].map((metric, i) => (
              <div key={i} className="p-6 bg-background border border-border rounded-sm text-center group hover:border-secondary transition-colors">
                <metric.icon className="w-8 h-8 mx-auto mb-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Pipeline Visualization */}
          <div className="mb-24">
             <h2 className="text-3xl font-bold text-center mb-12">End-to-End Delivery Pipeline</h2>
             <div className="relative bg-background p-12 rounded-xl border border-border shadow-inner overflow-hidden">
                {/* Pipeline Line */}
                <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-200 -translate-y-1/2 z-0"></div>
                
                <div className="relative z-10 flex justify-between items-center">
                   {[
                     { step: "Code", tool: "VSCode / GitLab" },
                     { step: "Build", tool: "Functionize" },
                     { step: "Deploy", tool: "Gearset" },
                     { step: "Monitor", tool: "Splunk / Datadog" },
                   ].map((phase, i) => (
                     <div key={i} className="flex flex-col items-center bg-white p-4 rounded-lg border border-border shadow-sm w-40 text-center">
                        <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold mb-3">
                          {i + 1}
                        </div>
                        <div className="font-bold text-lg mb-1">{phase.step}</div>
                        <div className="text-xs text-muted-foreground">{phase.tool}</div>
                     </div>
                   ))}
                </div>
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center bg-primary/5 p-8 rounded-xl">
             <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Philosophy: Platform as a Product</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We don't just build scripts; we build internal developer platforms (IDPs) that developers love to use. By treating infrastructure as a product, we ensure high adoption and satisfaction.
                </p>
                <ul className="space-y-3">
                  {["Self-Service Environments", "Automated Compliance", "Golden Paths", "Developer Portals (Backstage)"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium">
                      <div className="w-2 h-2 bg-accent-orange rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="grid grid-cols-2 gap-4">
               {["GitLab", "Jira", "Gearset", "Slack"].map((tool, i) => (
                 <div key={i} className="bg-white p-6 flex items-center justify-center rounded shadow-sm font-bold text-gray-500">
                   {tool}
                 </div>
               ))}
             </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
