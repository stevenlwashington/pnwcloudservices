import { PageHeader } from "@/components/layout/page-header";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Check, DollarSign, TrendingDown } from "lucide-react";
import heroImage from "@assets/stock_images/business_meeting_str_8fe35512.jpg";

export default function CloudStrategy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <PageHeader 
        title="Cloud Strategy & Cost Optimization"
        description="Stop wasting money on idle resources. We help you right-size your infrastructure and optimize your cloud spend for maximum ROI."
        image={heroImage}
        ctaText="Analyze Your Spend"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
             <div className="bg-accent-purple/10 p-8 rounded-xl text-center border border-accent-purple/20">
                <div className="text-4xl font-bold text-accent-purple mb-2">$450K</div>
                <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Annual Savings Identified</div>
             </div>
             <div className="bg-secondary/10 p-8 rounded-xl text-center border border-secondary/20">
                <div className="text-4xl font-bold text-secondary mb-2">30%</div>
                <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Infrastructure Efficiency</div>
             </div>
             <div className="bg-accent-orange/10 p-8 rounded-xl text-center border border-accent-orange/20">
                <div className="text-4xl font-bold text-accent-orange mb-2">24/7</div>
                <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Automated Governance</div>
             </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
             <div>
                <h2 className="text-3xl font-bold mb-6">Impact Across The Organization</h2>
                <div className="space-y-6">
                  {[
                    { dept: "Engineering", impact: "Focus on features, not infrastructure management." },
                    { dept: "Sales", impact: "Faster demo environments and lower COGS." },
                    { dept: "Finance", impact: "Predictable bills and clear attribution." },
                    { dept: "Customers", impact: "Better performance and reliability." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                       <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-gray-600 text-sm">
                         {i + 1}
                       </div>
                       <div>
                         <h4 className="font-bold text-foreground">{item.dept}</h4>
                         <p className="text-muted-foreground">{item.impact}</p>
                       </div>
                    </div>
                  ))}
                </div>
             </div>

             {/* Diagram Placeholder */}
             <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
                 <div className="text-center z-10">
                    <TrendingDown className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Cloud Spend Optimization</h3>
                    <div className="flex gap-4 justify-center mt-4 opacity-60">
                       <span className="font-bold">AWS</span>
                       <span className="font-bold">Salesforce</span>
                       <span className="font-bold">Azure</span>
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
