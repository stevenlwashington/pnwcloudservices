import { Link } from "wouter";
import { Layout, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StartHere() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-secondary font-bold uppercase tracking-wider text-sm">Start Here</span>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-border rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Layout className="w-8 h-8 text-primary" />
              </div>
              
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Platform Modernization
                </h2>
                <p className="text-lg text-foreground/80 font-medium">
                  Modernize the foundation your products run on.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  We help organizations modernize legacy platforms into secure, scalable foundations—so every team above the stack can ship faster with confidence.
                </p>
                
                <div className="pt-4">
                  <Link href="/platform-modernization">
                    <Button 
                      size="lg" 
                      className="bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-xl h-12 px-6"
                      data-testid="button-explore-platform-modernization"
                    >
                      Explore Platform Modernization
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
