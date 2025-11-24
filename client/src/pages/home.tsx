import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Testimonials } from "@/components/sections/testimonials";
import { Services } from "@/components/sections/services";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-secondary/20 selection:text-secondary-foreground">
      <Navbar />
      <main>
        <Hero />
        <Testimonials />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
