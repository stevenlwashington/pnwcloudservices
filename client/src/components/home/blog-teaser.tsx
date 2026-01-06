import { Link } from "wouter";
import { Calendar, ArrowRight } from "lucide-react";

// Mock data - ideally shared with blog index
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

export function BlogTeaser() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">Latest Insights</h2>
            <p className="text-muted-foreground">Thinking on cloud strategy, AI, and platform engineering.</p>
          </div>
          <Link href="/blog" className="text-secondary font-bold flex items-center hover:underline">
            View all posts <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {RECENT_POSTS.map((post, i) => (
            <Link key={i} href={`/blog/${post.slug}`} className="group block">
              <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 text-primary px-2 py-1 text-xs font-bold uppercase rounded-sm shadow-sm">
                  {post.category}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {post.date}
                </div>
                <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
