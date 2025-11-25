import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/logo.webp";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = location === href;
    return (
      <Link href={href}>
        <a className={`text-sm font-medium transition-colors hover:text-secondary ${
          isActive ? "text-secondary font-bold" : "text-foreground"
        }`}>
          {children}
        </a>
      </Link>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled || mobileMenuOpen 
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-border" 
          : "bg-white/50 py-4 border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo & Branding - Responsive Text */}
        <Link href="/">
          <a className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="PNW Cloud Services" 
              className="h-10 w-auto object-contain"
            />
            <span className="font-heading font-bold text-lg md:text-xl text-primary tracking-tight group-hover:text-secondary transition-colors">
              <span className="hidden lg:inline">PNW Cloud Services</span>
              <span className="lg:hidden">PNW Cloud</span>
            </span>
          </a>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="relative group">
            <button className="text-foreground hover:text-secondary font-medium text-sm transition-colors flex items-center gap-1 py-2">
              Solutions
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
            </button>
            
            {/* Mega Menu Dropdown */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[600px] bg-white shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-6 grid grid-cols-2 gap-6 rounded-sm">
              
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase text-muted-foreground tracking-wider mb-2">Modernization</h4>
                <Link href="/platform-modernization">
                  <a className="block group/item">
                    <div className="font-bold text-foreground group-hover/item:text-secondary">Platform Modernization</div>
                    <div className="text-xs text-muted-foreground">Legacy to Cloud transformation</div>
                  </a>
                </Link>
                <Link href="/salesforce-crm-strategy">
                  <a className="block group/item">
                    <div className="font-bold text-foreground group-hover/item:text-secondary">Salesforce & CRM</div>
                    <div className="text-xs text-muted-foreground">Maximize your CRM investment</div>
                  </a>
                </Link>
                <Link href="/cloud-strategy-cost-optimization">
                  <a className="block group/item">
                    <div className="font-bold text-foreground group-hover/item:text-secondary">Cloud Strategy</div>
                    <div className="text-xs text-muted-foreground">Cost optimization & ROI</div>
                  </a>
                </Link>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase text-muted-foreground tracking-wider mb-2">Innovation</h4>
                <Link href="/ai-automation">
                  <a className="block group/item">
                    <div className="font-bold text-foreground group-hover/item:text-secondary">AI & Automation</div>
                    <div className="text-xs text-muted-foreground">Intelligent workflows</div>
                  </a>
                </Link>
                <Link href="/devex-devops">
                  <a className="block group/item">
                    <div className="font-bold text-foreground group-hover/item:text-secondary">DevEx & DevOps</div>
                    <div className="text-xs text-muted-foreground">Accelerate delivery</div>
                  </a>
                </Link>
                <Link href="/observability">
                  <a className="block group/item">
                    <div className="font-bold text-foreground group-hover/item:text-secondary">Observability</div>
                    <div className="text-xs text-muted-foreground">Deep system visibility</div>
                  </a>
                </Link>
              </div>
              
              <div className="col-span-2 pt-4 mt-2 border-t border-border">
                <Link href="/compliance-governance">
                  <a className="flex items-center justify-between group/item">
                    <div>
                      <div className="font-bold text-foreground group-hover/item:text-secondary">Compliance & Governance</div>
                      <div className="text-xs text-muted-foreground">TCPA, CPRA, and Data Protection</div>
                    </div>
                    <span className="text-secondary text-sm font-bold">Learn more &rarr;</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <NavLink href="/about">About</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/contact">
            <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-md px-6 py-5 font-bold text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              Schedule Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border p-0 flex flex-col shadow-xl animate-in slide-in-from-top-5 max-h-[80vh] overflow-y-auto">
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Solutions</h4>
              <Link href="/platform-modernization"><a className="block py-2 text-lg font-medium border-b border-border/50">Platform Modernization</a></Link>
              <Link href="/salesforce-crm-strategy"><a className="block py-2 text-lg font-medium border-b border-border/50">Salesforce & CRM</a></Link>
              <Link href="/ai-automation"><a className="block py-2 text-lg font-medium border-b border-border/50">AI & Automation</a></Link>
              <Link href="/devex-devops"><a className="block py-2 text-lg font-medium border-b border-border/50">DevEx & DevOps</a></Link>
              <Link href="/observability"><a className="block py-2 text-lg font-medium border-b border-border/50">Observability</a></Link>
              <Link href="/compliance-governance"><a className="block py-2 text-lg font-medium border-b border-border/50">Compliance</a></Link>
            </div>

            <div className="space-y-4 pt-4">
               <Link href="/about"><a className="block text-lg font-medium">About</a></Link>
               <Link href="/blog"><a className="block text-lg font-medium">Blog</a></Link>
               <Link href="/contact"><a className="block text-lg font-medium">Contact</a></Link>
            </div>

            <Button className="w-full bg-secondary text-white rounded-md py-6 text-lg font-bold mt-4">
              Schedule Consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
