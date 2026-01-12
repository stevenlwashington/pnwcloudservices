import heroImage from "@assets/hero-forest-nature-tech.png";

export function Hero() {
  return (
    <section className="relative min-h-screen lg:min-h-[90vh] flex items-center pt-28 pb-12 md:pt-32 lg:pt-20 overflow-hidden bg-background">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10 relative">
        
        <div className="space-y-6 lg:space-y-8 animate-in slide-in-from-bottom-5 duration-1000 fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-primary">
            Engineering <span className="text-gradient-speed">Speed</span>.<br />
            Business Confidence.
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/90 max-w-xl leading-relaxed font-medium animate-in slide-in-from-bottom-5 duration-1000 delay-200 fade-in">
            We solve the technical debt and infrastructure bottlenecks that stall your product roadmap. Get from legacy to cloud-native in months—not years.
          </p>
        </div>

        <div className="relative h-[350px] md:h-[400px] lg:h-[600px] w-full animate-in slide-in-from-right-5 duration-1000 delay-200 fade-in">
          <div className="relative rounded-3xl overflow-hidden shadow-lg h-full w-full">
            <img 
              src={heroImage} 
              alt="Enterprise Platform Architecture" 
              className="w-full h-full object-cover block"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-black/10 pointer-events-none" />
          </div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-accent-purple/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute top-12 right-12 w-48 h-48 bg-accent-orange/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}
