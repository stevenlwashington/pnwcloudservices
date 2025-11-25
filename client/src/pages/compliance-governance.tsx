import { PageHeader } from "@/components/layout/page-header";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Shield, FileCheck, Lock, AlertOctagon } from "lucide-react";
import heroImage from "@assets/stock_images/security_shield_digi_4d0236e6.jpg";

export default function ComplianceGovernance() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <PageHeader 
        title="Compliance & Governance"
        description="Navigate the complex regulatory landscape with confidence. We operationalize compliance for TCPA, CPRA, and GDPR."
        image={heroImage}
        ctaText="Book Compliance Evaluation"
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             
             <div className="space-y-8">
                <div className="bg-white p-6 border-l-4 border-accent-orange shadow-sm">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <AlertOctagon className="text-accent-orange" />
                    Regulatory Risk Reduction
                  </h3>
                  <p className="text-muted-foreground">
                    Non-compliance can cost billions. We implement automated guardrails that protect your business without slowing down innovation.
                  </p>
                  <div className="mt-4 text-2xl font-bold text-primary">$1B+ <span className="text-sm font-normal text-muted-foreground">Potential risk mitigated</span></div>
                </div>

                <div className="space-y-4">
                   <h3 className="text-2xl font-bold text-primary">Compliance Philosophy</h3>
                   <p className="text-muted-foreground leading-relaxed">
                     Compliance isn't just a checkbox; it's a competitive advantage. By building privacy and security into your architecture by design, you build trust with your customers.
                   </p>
                </div>
             </div>

             <div className="grid gap-6">
                {[
                  { title: "TCPA & CPRA", desc: "Automated consent management workflows.", icon: FileCheck },
                  { title: "AI Governance", desc: "Safety frameworks for LLM deployment.", icon: Shield },
                  { title: "Data Protection", desc: "Encryption and access control at scale.", icon: Lock },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm border border-border hover:border-secondary transition-colors">
                     <div className="bg-primary/5 p-3 rounded-full">
                       <item.icon className="w-6 h-6 text-primary" />
                     </div>
                     <div>
                       <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                       <p className="text-muted-foreground text-sm">{item.desc}</p>
                     </div>
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
