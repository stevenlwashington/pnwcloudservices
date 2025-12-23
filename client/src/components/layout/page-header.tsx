import { Button } from "@/components/ui/button";
import { ConsultationModal } from "@/components/consultation-modal";

interface PageHeaderProps {
  title: string;
  description: string;
  image?: string;
  ctaText?: string;
  ctaLink?: string; // Kept for compatibility but will prioritize modal trigger for main CTA
}

export function PageHeader({ title, description, image, ctaText = "Schedule a Free Consultation", ctaLink }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tight mb-6 animate-in slide-in-from-bottom-5 duration-500">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-8 animate-in slide-in-from-bottom-5 duration-700 delay-100">
            {description}
          </p>
          <div className="animate-in slide-in-from-bottom-5 duration-700 delay-200">
            <ConsultationModal>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl px-8 py-6 text-lg font-bold shadow-md hover:shadow-xl transition-all hover:scale-105 hover:bg-primary/85">
                {ctaText}
              </Button>
            </ConsultationModal>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent -z-10"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl -z-10"></div>
      
      {image && (
        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-1/3 h-2/3 rounded-l-3xl overflow-hidden shadow-2xl opacity-90 animate-in slide-in-from-right-20 duration-1000">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
        </div>
      )}
    </section>
  );
}
