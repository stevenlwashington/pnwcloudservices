import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Home, ArrowLeft, Search, Mail } from "lucide-react";
import { Link } from "wouter";

const quickLinks = [
  { label: "Platform Modernization", href: "/platform-modernization" },
  { label: "AI Automation", href: "/ai-automation" },
  { label: "DevEx & DevOps", href: "/devex-devops" },
  { label: "Salesforce & CRM", href: "/salesforce-crm-strategy" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative mb-8">
            <div 
              className="text-[120px] md:text-[180px] font-bold leading-none"
              style={{ 
                background: "linear-gradient(135deg, #1a3a2f 0%, #2d5a47 50%, #1a3a2f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                opacity: 0.15
              }}
            >
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="w-16 h-16 md:w-24 md:h-24 text-primary/20" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-foreground/70 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/">
              <button 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                data-testid="button-go-home"
              >
                <Home className="w-5 h-5" />
                Go to Homepage
              </button>
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
              data-testid="button-go-back"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
          
          <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
            <h2 className="text-lg font-bold text-primary mb-4">
              Explore Our Services
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span 
                    className="block p-3 text-sm font-medium text-foreground/80 bg-background rounded-lg hover:bg-primary/5 hover:text-primary transition-colors cursor-pointer"
                    data-testid={`link-${link.href.slice(1)}`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-foreground/60 mb-3">
                Need help? We're here for you.
              </p>
              <Link href="/contact">
                <span 
                  className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors cursor-pointer"
                  data-testid="link-contact"
                >
                  <Mail className="w-4 h-4" />
                  Contact our team
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
