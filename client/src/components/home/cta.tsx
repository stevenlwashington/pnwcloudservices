import { ScheduleFreeConsultationCTA } from "@/components/ScheduleFreeConsultationCTA";
import { useContactModal } from "@/contexts/ContactModalContext";

export function CTA() {
  const { openContactModal } = useContactModal();

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-multiply"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's talk about your platforms.
        </h2>
        <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto mb-10">
          Ready to modernize? Schedule a free consultation to discuss your goals and challenges.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <ScheduleFreeConsultationCTA
            source="home-cta"
            variant="primary"
            size="lg"
            className="h-14 px-10 text-lg rounded-xl shadow-lg hover:shadow-xl bg-secondary hover:bg-secondary/90"
          />
          <button
            onClick={() => openContactModal()}
            className="h-14 px-10 text-lg rounded-xl font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
            data-testid="button-contact-cta"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
