import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import heroImage from "@assets/stock_images/toy_superhero_figure_1e4fd77d.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 md:order-1 space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-primary">
            Make Smarter AI and Cloud Investments At Scale
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            When results matter, people turn to Pacific Northwest Cloud Services. 
            For nearly 20 years, we've helped diverse industries unlock their full 
            potential through technology. Need expert help? We can guide you through 
            the challenges of AI and cloud computing, keeping your business goals in mind.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-none h-14 px-8 text-lg shadow-sm group">
              <BookOpen className="mr-2 h-5 w-5" />
              Read Guide
            </Button>
            
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-none h-14 px-8 text-lg bg-transparent">
              Why PNW Cloud
            </Button>
          </div>
        </div>

        {/* Image Content */}
        <div className="order-1 md:order-2 relative h-full w-full min-h-[400px] md:min-h-[600px] animate-in slide-in-from-right-10 duration-1000 fade-in delay-200">
          <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent z-10 mix-blend-overlay"></div>
          <img 
            src={heroImage} 
            alt="Hero Visualization" 
            className="w-full h-full object-cover object-center shadow-2xl"
            style={{ clipPath: "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)" }}
          />
          {/* Decorative Element */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 -z-10 rounded-full blur-2xl"></div>
          <div className="absolute -top-6 -right-6 w-48 h-48 bg-primary/10 -z-10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
