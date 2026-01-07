import { Link } from "wouter";
import { Calendar, ArrowRight } from "lucide-react";

const RECENT_POSTS = [
  {
    slug: "future-of-ai-in-enterprise",
    title: "The Future of AI in the Enterprise: Beyond the Hype",
    date: "Nov 15, 2025",
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "platform-engineering-101",
    title: "Platform Engineering 101: Treating Infrastructure as a Product",
    date: "Nov 02, 2025",
    category: "DevEx",
    image: "https://images.unsplash.com/photo-1667372393119-c8f4307048f7?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "salesforce-data-cloud",
    title: "Unlocking Customer Insights with Salesforce Data Cloud",
    date: "Oct 28, 2025",
    category: "Salesforce",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  }
];

function AnimatedLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link 
      href={href} 
      className={`group/link inline-flex items-center font-bold text-secondary transition-colors hover:text-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:ring-offset-2 rounded-sm ${className}`}
    >
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary origin-left scale-x-0 transition-transform duration-200 ease-out group-hover/link:scale-x-100 group-focus-visible/link:scale-x-100" />
      </span>
      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 ease-out group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

export function BlogTeaser() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">Platform Insights</h2>
            <p className="text-foreground/80 font-medium">How we think about platforms, AI enablement, and delivery at scale.</p>
          </div>
          <AnimatedLink href="/blog">View all posts</AnimatedLink>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {RECENT_POSTS.map((post, i) => (
            <Link 
              key={i} 
              href={`/blog/${post.slug}`} 
              className="group relative block"
              data-testid={`blog-card-${post.slug}`}
            >
              {/* Gradient glow effect - only visible on hover */}
              <div 
                className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-500 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-60 motion-reduce:transition-none"
                aria-hidden="true"
              />
              
              {/* Card content */}
              <div className="relative bg-white rounded-2xl border border-border shadow-sm transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none overflow-hidden">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="object-cover w-full h-full transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 text-primary px-2.5 py-1 text-xs font-bold uppercase rounded shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" /> 
                    <time>{post.date}</time>
                  </div>
                  <h3 className="text-lg font-bold text-primary transition-colors duration-200 group-hover:text-foreground line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="pt-2">
                    <span className="inline-flex items-center text-sm font-semibold text-secondary">
                      <span className="relative">
                        Read post
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary origin-left scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
