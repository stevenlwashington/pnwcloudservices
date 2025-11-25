import { PageHeader } from "@/components/layout/page-header";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const BLOG_POSTS = [
  {
    slug: "future-of-ai-in-enterprise",
    title: "The Future of AI in the Enterprise: Beyond the Hype",
    excerpt: "How practical AI applications are reshaping workflows in 2025 and beyond. It's not just about chatbots anymore.",
    category: "AI",
    author: "Steven Washington",
    date: "Nov 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "platform-engineering-101",
    title: "Platform Engineering 101: Treating Infrastructure as a Product",
    excerpt: "Why the shift from DevOps to Platform Engineering is critical for scaling developer velocity and satisfaction.",
    category: "DevEx",
    author: "Steven Washington",
    date: "Nov 02, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1667372393119-c8f4307048f7?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "salesforce-data-cloud",
    title: "Unlocking Customer Insights with Salesforce Data Cloud",
    excerpt: "A deep dive into integrating disparate data sources to create a true 360-degree view of your customer.",
    category: "Salesforce",
    author: "Steven Washington",
    date: "Oct 28, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "leadership-in-tech",
    title: "Leading Through Technical Change",
    excerpt: "Strategies for CTOs and engineering leaders to manage cultural shifts during major platform migrations.",
    category: "Leadership",
    author: "Steven Washington",
    date: "Oct 15, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
  }
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-background border-b border-border">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest rounded-full mb-6">
            The PNW Cloud Blog
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Insights for the Modern Enterprise</h1>
          <p className="text-xl text-muted-foreground">
            Thoughts on cloud strategy, AI, and platform engineering from our team of experts.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {["All", "AI", "DevEx", "Salesforce", "Leadership", "PNW Cloud Updates"].map((cat, i) => (
              <button 
                key={i}
                className={`px-6 py-2 rounded-full text-sm font-bold border transition-all ${
                  i === 0 
                    ? "bg-primary text-white border-primary" 
                    : "bg-white text-muted-foreground border-border hover:border-secondary hover:text-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {BLOG_POSTS.map((post, i) => (
              <Link key={i} href={`/blog/${post.slug}`}>
                <a className="group block">
                  <div className="relative overflow-hidden rounded-xl aspect-video mb-6">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-primary px-3 py-1 text-xs font-bold uppercase rounded-sm shadow-sm">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors leading-tight">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm font-bold text-secondary pt-2">
                      Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-24 bg-primary rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Ahead of the Curve</h2>
              <p className="text-white/70 mb-8">
                Join 5,000+ tech leaders receiving our weekly insights on cloud modernization and AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input placeholder="Enter your business email" className="bg-white border-white h-12" />
                <Button className="bg-accent-orange hover:bg-accent-orange/90 text-white h-12 px-8 font-bold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
