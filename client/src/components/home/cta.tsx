import { GlowCTA } from "@/components/cta/GlowCTA";

export function CTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-multiply"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's talk about your platforms.
        </h2>
        <p className="text-xl text-white/90 font-medium max-w-2xl mx-auto mb-10">
          Ready to modernize? Schedule a free consultation to discuss your goals and challenges.
        </p>
        <GlowCTA
          source="home-cta"
          variant="secondary"
          size="lg"
        />
      </div>
    </section>
  );
}
