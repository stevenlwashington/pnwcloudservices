import { PageHeader } from "@/components/layout/page-header";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Link, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  // In a real app, we'd fetch the post content based on the slug.
  // For this prototype, we'll just render a generic template with the slug as title context.

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <article className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <Link href="/blog">
            <a className="inline-flex items-center text-muted-foreground hover:text-secondary mb-8 font-medium text-sm transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </a>
          </Link>

          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wide">
                Technology
              </span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Nov 15, 2025</span>
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> Steven Washington</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              The Future of Enterprise Technology: A Deep Dive into {slug?.replace(/-/g, ' ')}
            </h1>
          </div>

          <div className="aspect-video rounded-xl overflow-hidden mb-12 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" 
              alt="Blog Hero" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Sidebar / Share */}
            <div className="lg:col-span-2">
               <div className="sticky top-32 space-y-4">
                 <p className="text-xs font-bold uppercase text-muted-foreground tracking-widest mb-4">Share</p>
                 <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary transition-all">
                   <Share2 className="w-4 h-4" />
                 </button>
               </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-10 prose prose-lg prose-headings:font-bold prose-headings:text-primary prose-p:text-muted-foreground prose-a:text-secondary max-w-none">
              <p className="lead text-xl text-foreground font-medium">
                As organizations navigate the complexities of modern digital transformation, the need for robust, scalable, and intelligent systems has never been greater.
              </p>
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <h2>The Shift to Platform Engineering</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <blockquote>
                "The future belongs to those who can bridge the gap between legacy systems and cloud-native innovation."
              </blockquote>

              <h3>Key Takeaways</h3>
              <ul>
                <li>Modernize your data estate first.</li>
                <li>Treat your internal developer platform as a product.</li>
                <li>Automate compliance to reduce risk.</li>
              </ul>

              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to modernize your stack?</h2>
          <p className="text-muted-foreground mb-8">
            Schedule a consultation with our experts to discuss your specific challenges.
          </p>
          <Link href="/contact">
            <Button className="bg-secondary text-white px-8 py-6 text-lg font-bold rounded-md hover:bg-secondary/90">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
