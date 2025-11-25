import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/logo.webp";
import { navigation } from "@/config/navigation";
import { ConsultationModal } from "@/components/consultation-modal";

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

  const NavLink = ({ href, children, className }: { href: string; children: React.ReactNode, className?: string }) => {
    const isActive = location === href;
    return (
      <Link href={href}>
        <a className={`text-sm font-medium transition-colors hover:text-secondary ${
          isActive ? "text-secondary font-bold" : "text-foreground"
        } ${className}`}>
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
        <div className="hidden lg:flex items-center gap-8 animate-in fade-in duration-500">
          {navigation.main.map((item, index) => (
            item.children ? (
              <div key={index} className="relative group">
                <button className="text-foreground hover:text-secondary font-medium text-sm transition-colors flex items-center gap-1 py-2">
                  {item.label}
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                
                {/* Mega Menu Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[300px] bg-white shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-4 rounded-xl origin-top">
                  <div className="space-y-2">
                    {item.children.map((child, childIndex) => (
                      <Link key={childIndex} href={child.href}>
                        <a className="block group/item p-2 hover:bg-background rounded-lg transition-colors">
                          <div className="font-medium text-sm text-foreground group-hover/item:text-secondary">{child.label}</div>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink key={index} href={item.href}>{item.label}</NavLink>
            )
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <ConsultationModal>
            <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-lg px-6 py-5 font-semibold text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              Schedule a Consultation
            </Button>
          </ConsultationModal>
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
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border p-0 flex flex-col shadow-xl animate-in slide-in-from-right duration-300 max-h-[80vh] overflow-y-auto">
          <div className="p-6 space-y-6">
            {navigation.main.map((item, index) => (
              <div key={index} className="space-y-2">
                {item.children ? (
                  <>
                    <h4 className="text-xs font-bold uppercase text-muted-foreground tracking-wider mb-2">{item.label}</h4>
                    {item.children.map((child, childIndex) => (
                      <Link key={childIndex} href={child.href}>
                         <a className="block py-2 text-lg font-medium border-b border-border/50">{child.label}</a>
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link href={item.href}>
                    <a className="block text-lg font-medium border-b border-border/50 py-2">{item.label}</a>
                  </Link>
                )}
              </div>
            ))}

            <ConsultationModal>
              <Button className="w-full bg-secondary text-white rounded-lg py-6 text-lg font-bold mt-4">
                Schedule a Consultation
              </Button>
            </ConsultationModal>
          </div>
        </div>
      )}
    </nav>
  );
}
