import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/stock_images/futuristic_construct_f8e13174.jpg";
import { ConsultationModal } from "@/components/consultation-modal";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10 relative">
        
        <div className="space-y-8 animate-in slide-in-from-bottom-5 duration-1000 fade-in">
          <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest rounded-full mb-2">
            Pacific Northwest Cloud Services
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-primary">
            <span className="text-gradient-hero">Enterprise platforms that power AI,</span><br/>
            efficiency, and growth.
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-xl leading-relaxed animate-in slide-in-from-bottom-5 duration-1000 delay-200 fade-in">
            Helping companies modernize platforms, scale GTM systems, improve DevEx, and embed AI responsibly.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 animate-in slide-in-from-bottom-5 duration-1000 delay-300 fade-in">
            <ConsultationModal>
              <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-xl h-14 px-8 text-lg font-semibold shadow-sm transition-all hover:translate-y-[-2px]">
                Schedule a Consultation
              </Button>
            </ConsultationModal>
          </div>
        </div>

        <div className="relative h-[600px] w-full hidden lg:block animate-in slide-in-from-right-5 duration-1000 delay-200 fade-in">
           <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent z-10"></div>
           <img 
            src={heroImage} 
            alt="Enterprise Platform Architecture" 
            className="w-full h-full object-cover rounded-l-3xl shadow-2xl opacity-90"
          />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent-purple/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute top-12 right-12 w-48 h-48 bg-accent-orange/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}
