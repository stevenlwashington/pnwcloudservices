import { Quote } from "lucide-react";
import officeImage from "@assets/stock_images/diverse_business_tea_33324b70.jpg";

const testimonials = [
  {
    quote: "I felt like PNW Cloud helped make our business more productive—from the inside out.",
    author: "Larry David",
    role: "Business Owner",
    highlight: "more productive"
  },
  {
    quote: "After partnering with PNW Cloud, our business was setup to scale by making our internal operations more efficient.",
    author: "Monet Goode",
    role: "Director of Operations",
    highlight: "more efficient"
  },
  {
    quote: "We had no idea how much time we were wasting on inefficient workflows until PNW Cloud stepped in and built a system that just works.",
    author: "Channing Lee",
    role: "CTO",
    highlight: "built a system that just works"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-background/50 -z-0 skew-x-12 transform translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Image Side */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-xl">
              <img 
                src={officeImage} 
                alt="Team collaboration" 
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </div>
            {/* Decorative Box */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary hidden md:block"></div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-7 space-y-16 pt-8">
            <div className="space-y-2">
              <h2 className="text-primary text-sm font-bold uppercase tracking-widest">Success Stories</h2>
              <h3 className="text-4xl font-heading font-bold text-foreground">Don't just take our word for it.</h3>
            </div>

            <div className="space-y-12">
              {testimonials.map((item, index) => (
                <div key={index} className="group relative pl-8 border-l-4 border-transparent hover:border-secondary transition-all duration-300">
                  <Quote className="absolute -top-2 -left-3 text-secondary/20 fill-secondary w-12 h-12 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/90 mb-4">
                    {item.quote.split(item.highlight).map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="font-bold text-secondary relative inline-block">
                            {item.highlight}
                            <span className="absolute bottom-1 left-0 w-full h-2 bg-secondary/10 -z-10"></span>
                          </span>
                        )}
                      </span>
                    ))}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-px w-12 bg-border group-hover:bg-secondary transition-colors"></div>
                    <div>
                      <p className="font-bold text-foreground">{item.author}</p>
                      <p className="text-sm text-muted-foreground">{item.role}</p>
                    </div>
                  </div>
                  
                  <a href="#" className="inline-block mt-4 text-sm font-bold text-secondary hover:underline opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                    Read Story
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
