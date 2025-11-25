import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { ServicesGrid } from "@/components/home/services-grid";
import { Highlights } from "@/components/home/highlights";
import { BlogTeaser } from "@/components/home/blog-teaser";
import { CTA } from "@/components/home/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-secondary/20 selection:text-secondary-foreground">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ServicesGrid />
        <Highlights />
        <BlogTeaser />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
