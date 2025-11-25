import { PageHeader } from "@/components/layout/page-header";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Cloud, LineChart, RefreshCw, Users, Layers } from "lucide-react";
import heroImage from "@assets/stock_images/data_dashboard_analy_aac797ea.jpg";

export default function SalesforceStrategy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <PageHeader 
        title="Salesforce & CRM Strategy"
        description="Maximize your CRM investment. We align your Salesforce architecture with your Go-To-Market strategy to drive revenue efficiency."
        image={heroImage}
        ctaText="Evaluate Your CRM Strategy"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Modernize your RevOps Engine</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Your CRM shouldn't just be a database—it should be an engine for growth. We integrate Salesforce with your entire data ecosystem to provide a 360-degree view of your customer.
              </p>
              
              <div className="space-y-6">
                {[
                  "Architecture & Integration Strategy",
                  "Reporting & Forecasting Modernization",
                  "Cross-channel workflows & Automations",
                  "Data Governance & CPRA Compliance"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white border border-border rounded-sm">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Integration Stack Visualization */}
            <div className="bg-white p-8 rounded-xl border border-border shadow-lg relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00A1E0] via-[#FF5D00] to-[#F7444E]"></div>
              <h3 className="font-bold text-center mb-8 text-sm uppercase tracking-widest text-muted-foreground">Unified Revenue Stack</h3>
              
              <div className="relative flex justify-center items-center h-[300px]">
                {/* Central Hub */}
                <div className="absolute z-10 w-32 h-32 bg-white rounded-full border-4 border-[#00A1E0] flex items-center justify-center shadow-xl">
                  <Cloud className="w-12 h-12 text-[#00A1E0]" />
                  <span className="absolute bottom-6 text-[10px] font-bold text-gray-500">Salesforce</span>
                </div>

                {/* Satellites */}
                {[
                  { icon: Users, color: "text-orange-500", label: "HubSpot" },
                  { icon: LineChart, color: "text-purple-600", label: "Gong" },
                  { icon: Layers, color: "text-blue-600", label: "Databricks" },
                  { icon: RefreshCw, color: "text-green-600", label: "Airbyte" },
                ].map((sat, i) => {
                  const angle = (i * 90) * (Math.PI / 180);
                  const radius = 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div 
                      key={i}
                      className="absolute w-16 h-16 bg-white rounded-full border border-gray-200 flex flex-col items-center justify-center shadow-md"
                      style={{ transform: `translate(${x}px, ${y}px)` }}
                    >
                      <sat.icon className={`w-6 h-6 ${sat.color}`} />
                      <span className="text-[8px] font-bold mt-1 uppercase">{sat.label}</span>
                    </div>
                  );
                })}
                
                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  <circle cx="50%" cy="50%" r="120" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Client Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Online Real Estate Marketplace",
                stat: "$2.5M",
                desc: "Annual revenue recovery through automated lead routing and scoring."
              },
              {
                title: "Top Cloud Computing Company",
                stat: "45%",
                desc: "Reduction in sales cycle time via AI-driven deal insights."
              },
              {
                title: "Major Telecom Carrier",
                stat: "100%",
                desc: "Data accuracy across 50M+ customer records after migration."
              }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-background rounded-sm border border-transparent hover:border-secondary/30 hover:bg-secondary/5 transition-all">
                <div className="text-5xl font-bold text-accent-purple mb-4 font-heading">{item.stat}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Helper component for the list
function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
