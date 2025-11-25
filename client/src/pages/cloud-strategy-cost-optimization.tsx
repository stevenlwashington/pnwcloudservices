import { PageHeader } from "@/components/layout/page-header";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { TrendingDown, Server, DollarSign, Cloud } from "lucide-react";
import heroImage from "@assets/stock_images/business_meeting_str_8fe35512.jpg";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function CloudStrategy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <PageHeader 
        title="Cloud strategy that balances cost, performance, and people."
        description="Smarter cloud usage, lower spend, and workflows that improve engineering, sales, and customer experience."
        image={heroImage}
        ctaText="Request a cost review"
        ctaLink="/contact"
      />

      {/* Why Cloud Strategy Needs a Reset */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">Why Cloud Strategy Needs a Reset</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Most companies overspend by running workloads on the wrong services, keeping legacy systems alive, and shipping inefficient workflows.
            </p>
            <p className="text-xl font-bold text-primary">We fix all of this with a strategy aligned to your business.</p>
          </div>
        </div>
      </section>

      {/* Cost Optimization */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Cost Optimization That Actually Works</h2>
              <p className="text-lg text-muted-foreground mb-6">We analyze:</p>
              <ul className="grid grid-cols-2 gap-4 mb-8">
                {["Compute patterns", "Storage footprint", "Data lifecycle", "Pipeline inefficiencies", "Duplicate tooling", "Cloud → CRM interplay"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-foreground font-medium">
                    <TrendingDown className="w-4 h-4 text-accent-orange" /> {item}
                  </li>
                ))}
              </ul>
              <div className="p-6 bg-accent-orange/10 rounded border border-accent-orange/20">
                 <p className="font-bold text-accent-orange">
                   We helped one enterprise reduce $450K+ annually in storage & compute.
                 </p>
              </div>
            </div>
            <div className="bg-background p-12 rounded-xl border border-border flex items-center justify-center">
               <DollarSign className="w-32 h-32 text-border" />
            </div>
          </div>
        </div>
      </section>

      {/* Productivity Impacts */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Productivity Impacts</h2>
          <p className="text-lg text-muted-foreground mb-12">Savings are only half the story. We also improve:</p>
          <div className="grid sm:grid-cols-4 gap-6">
            {["Engineering velocity", "Seller productivity", "Service agent workflows", "Customer experience"].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded shadow-sm border border-border font-bold text-primary">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-12 font-bold text-xl">Your cloud strategy becomes a platform advantage.</p>
        </div>
      </section>

      {/* Target Cloud Stack */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">Target Cloud Stack</h2>
          <div className="flex justify-center gap-12 items-center opacity-80">
            <div className="text-2xl font-bold flex items-center gap-2"><Cloud className="w-8 h-8" /> AWS</div>
            <div className="text-2xl font-bold flex items-center gap-2"><Server className="w-8 h-8" /> Salesforce</div>
            <span className="text-muted-foreground text-sm">(and Azure/GCP when relevant)</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background text-center border-t border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-bold text-primary mb-6">Let’s optimize your cloud for cost, performance, and people.</h2>
          <Link href="/contact">
            <Button className="bg-secondary hover:bg-secondary/90 text-white h-14 px-10 text-lg font-bold rounded-sm shadow-lg">
              Request a cloud cost review
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
