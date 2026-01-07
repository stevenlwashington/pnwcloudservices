import { GlowCTA } from "@/components/cta/GlowCTA";

export function CTA() {
  return (
    <section className="py-24 bg-emerald-100/80 border-t border-emerald-200/50 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Let's talk about your platforms.
        </h2>
        <p className="text-xl text-foreground/80 font-medium max-w-2xl mx-auto mb-10">
          Ready to modernize? Schedule a free consultation to discuss your goals and challenges.
        </p>
        <GlowCTA
          source="home-cta"
          variant="primary"
          size="lg"
        />
      </div>
    </section>
  );
}
