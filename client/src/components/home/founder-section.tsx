import { User } from "lucide-react";

export function FounderSection() {
  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Founded by Platform Engineers
            </h2>
            <p className="text-lg text-foreground/70 font-medium max-w-2xl mx-auto">
              PNW Cloud Services was founded by engineers who've built and operated platforms at enterprise scale. We don't sell frameworks—we ship systems alongside your team.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white border border-border rounded-xl p-6 shadow-sm max-w-sm text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">Steven Washington</h3>
              <p className="text-secondary font-semibold mb-2">Founder</p>
              <p className="text-foreground/70 text-sm font-medium">
                15+ years platform, CRM, and DevOps leadership
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
