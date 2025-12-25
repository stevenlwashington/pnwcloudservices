import { ScheduleFreeConsultationCTA } from "@/components/ScheduleFreeConsultationCTA";

export function CTA() {
  return (
    <section className="py-24 bg-background border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 mix-blend-multiply"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
          Let’s talk about your platforms.
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Ready to modernize? Schedule a free consultation to discuss your goals and challenges.
        </p>
        <ScheduleFreeConsultationCTA
          source="home-cta"
          variant="primary"
          size="lg"
          className="h-16 px-12 text-xl rounded-xl shadow-lg hover:shadow-xl"
        />
      </div>
    </section>
  );
}
