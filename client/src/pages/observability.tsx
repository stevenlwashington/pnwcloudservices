import { PageHeader } from "@/components/layout/page-header";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Activity } from "lucide-react";
import heroImage from "@assets/stock_images/data_dashboard_analy_aac797ea.jpg";
import { ScheduleFreeConsultationCTA } from "@/components/ScheduleFreeConsultationCTA";

export default function Observability() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <PageHeader 
        title="Observability that tells you why, not just what."
        description="Turn logs, dashboards, and signals into meaningful decisions and reliability."
        image={heroImage}
        ctaText="Assess your observability posture"
      />

      {/* What Observability Means */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">What Observability Really Means</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Most dashboards tell teams <strong>what</strong> happened.<br/>
              Few systems explain <strong>why</strong> it happened.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {["Reveal bottlenecks", "Improve incident response", "Reduce blind spots", "Tie engineering to business outcomes", "Power data for AI"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-border">
                  <Activity className="w-5 h-5 text-accent-purple" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Signals */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Tools & Signals We Work With</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {["Splunk", "DataDog", "Pendo", "Custom pipelines"].map((tool, i) => (
              <div key={i} className="p-6 bg-background border border-border rounded-xl text-center font-bold text-lg">
                {tool}
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground">
            We support logs, metrics, traces, behavioral data, product telemetry, and reliability signals.
          </p>
        </div>
      </section>

      {/* DORA Metrics Deep Dive */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">DORA Metrics Deep Dive</h2>
              <p className="text-lg text-muted-foreground mb-6">
                DORA metrics help leaders understand:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Lead time to change — how fast we can safely ship",
                  "Deployment frequency — how often value reaches customers",
                  "Change failure rate — how often releases break things",
                  "MTTR — how long recovery takes"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-foreground">
                    <span className="font-bold text-secondary">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-white border-l-4 border-secondary shadow-sm">
                <p className="font-medium">When these metrics move, the business moves: Lower costs, higher reliability, more revenue.</p>
              </div>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-xl shadow-2xl text-green-400 font-mono text-xs">
              <div className="mb-4 border-b border-gray-700 pb-2 text-white font-bold flex justify-between">
                <span>Dashboard Mockup</span>
                <span className="bg-gray-800 px-2 py-0.5 rounded text-[10px] text-gray-400">[Image placeholder — Dashboard]</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-800 p-3 rounded">Lead Time: <span className="text-white font-bold">2h</span> <span className="text-green-500">↓ 90%</span></div>
                <div className="bg-gray-800 p-3 rounded">Failure Rate: <span className="text-white font-bold">0.2%</span> <span className="text-green-500">↓ 50%</span></div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-gray-800 rounded w-full"></div>
                <div className="h-2 bg-gray-800 rounded w-3/4"></div>
                <div className="h-2 bg-gray-800 rounded w-1/2"></div>
              </div>
              <p className="mt-4 text-gray-400 italic">// Happier engineers, fewer fire drills</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-bold text-primary mb-6">Ready to improve visibility, reliability, and decisions?</h2>
          <ScheduleFreeConsultationCTA
            source="observability-cta"
            variant="secondary"
            size="lg"
            label="Assess your observability posture"
            className="h-14 px-10 text-lg rounded-xl shadow-lg"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
