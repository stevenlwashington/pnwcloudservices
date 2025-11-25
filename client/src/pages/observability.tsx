import { PageHeader } from "@/components/layout/page-header";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Activity, AlertTriangle, CheckCircle, Search } from "lucide-react";
import heroImage from "@assets/stock_images/data_dashboard_analy_aac797ea.jpg"; // Reusing dashboard image

export default function Observability() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <PageHeader 
        title="Observability"
        description="Move beyond simple monitoring. Gain deep visibility into your system's health to reduce MTTR and improve reliability."
        image={heroImage}
        ctaText="Assess Your Posture"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
             <h2 className="text-3xl font-bold mb-4">Why Metrics Matter</h2>
             <p className="text-muted-foreground">
               In modern distributed systems, "up" or "down" isn't enough. You need to know *why* something is happening before your customers do.
             </p>
          </div>

          {/* Dashboard Mockup */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-2xl border border-gray-800 mb-20 text-gray-300 font-mono text-xs overflow-hidden">
            <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
               <div className="font-bold text-white text-lg">System Health Overview</div>
               <div className="flex gap-4">
                 <span className="text-green-400 flex items-center gap-2"><CheckCircle className="w-3 h-3" /> All Systems Operational</span>
               </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Metric 1 */}
              <div className="bg-gray-800 p-4 rounded border border-gray-700">
                <div className="text-gray-400 mb-2">Lead Time to Change</div>
                <div className="text-2xl font-bold text-white mb-2">45m</div>
                <div className="h-16 flex items-end gap-1">
                   {[40, 35, 50, 45, 60, 45, 40, 30].map((h, i) => (
                     <div key={i} style={{ height: `${h}%` }} className="w-full bg-blue-500/50 rounded-t hover:bg-blue-400 transition-colors"></div>
                   ))}
                </div>
              </div>

              {/* Metric 2 */}
              <div className="bg-gray-800 p-4 rounded border border-gray-700">
                <div className="text-gray-400 mb-2">Change Failure Rate</div>
                <div className="text-2xl font-bold text-green-400 mb-2">0.4%</div>
                <div className="h-16 flex items-end gap-1">
                   {[2, 5, 1, 0, 10, 2, 1, 0].map((h, i) => (
                     <div key={i} style={{ height: `${h * 5}%` }} className="w-full bg-green-500/50 rounded-t hover:bg-green-400 transition-colors"></div>
                   ))}
                </div>
              </div>

              {/* Metric 3 */}
              <div className="bg-gray-800 p-4 rounded border border-gray-700">
                <div className="text-gray-400 mb-2">MTTR</div>
                <div className="text-2xl font-bold text-white mb-2">12m</div>
                <div className="h-16 flex items-end gap-1">
                   {[60, 40, 30, 20, 15, 25, 10, 12].map((h, i) => (
                     <div key={i} style={{ height: `${h}%` }} className="w-full bg-purple-500/50 rounded-t hover:bg-purple-400 transition-colors"></div>
                   ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6 grid md:grid-cols-2 gap-6">
               <div className="bg-gray-800 p-4 rounded border border-gray-700 h-48 flex items-center justify-center text-gray-500">
                 [Log Stream Visualization Placeholder]
               </div>
               <div className="bg-gray-800 p-4 rounded border border-gray-700 h-48 flex items-center justify-center text-gray-500">
                 [Trace Waterfall Placeholder]
               </div>
            </div>
          </div>

          {/* Tools */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {["Splunk", "Datadog", "Pendo", "New Relic"].map((tool, i) => (
               <div key={i} className="flex items-center justify-center text-xl font-bold text-gray-400 border border-gray-200 h-24 rounded-lg">
                 {tool}
               </div>
             ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
