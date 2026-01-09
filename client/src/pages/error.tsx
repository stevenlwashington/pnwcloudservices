import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Home, RefreshCw, Mail, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

interface ErrorPageProps {
  code?: number;
  title?: string;
  message?: string;
}

export default function ErrorPage({ 
  code = 500, 
  title = "Something Went Wrong",
  message = "We're experiencing technical difficulties. Our team has been notified and is working on a fix."
}: ErrorPageProps) {
  const handleRefresh = () => {
    window.location.reload();
  };

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
              {code}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <AlertTriangle className="w-16 h-16 md:w-24 md:h-24 text-accent-orange/40" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {title}
          </h1>
          <p className="text-lg text-foreground/70 mb-8 max-w-md mx-auto">
            {message}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={handleRefresh}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              data-testid="button-refresh"
            >
              <RefreshCw className="w-5 h-5" />
              Try Again
            </button>
            <Link href="/">
              <button 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
                data-testid="button-go-home"
              >
                <Home className="w-5 h-5" />
                Go to Homepage
              </button>
            </Link>
          </div>
          
          <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
            <div className="flex items-start gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-accent-orange/10 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-accent-orange" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-primary mb-2">
                  What happened?
                </h2>
                <p className="text-sm text-foreground/70 mb-4">
                  An unexpected error occurred while processing your request. This could be due to a temporary server issue or a problem with your connection.
                </p>
                <div className="space-y-2 text-sm text-foreground/60">
                  <p>You can try:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Refreshing the page</li>
                    <li>Checking your internet connection</li>
                    <li>Coming back in a few minutes</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-foreground/60 mb-3">
                If the problem persists, please contact us.
              </p>
              <Link href="/contact">
                <span 
                  className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors cursor-pointer"
                  data-testid="link-contact"
                >
                  <Mail className="w-4 h-4" />
                  Report this issue
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
