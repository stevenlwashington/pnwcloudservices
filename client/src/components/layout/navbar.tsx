import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/logo.webp";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="PNW Cloud Services" 
              className="h-12 w-auto object-contain"
            />
          </a>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about"><a className="text-foreground hover:text-secondary font-medium transition-colors">About</a></Link>
          <div className="relative group">
            <button className="text-foreground hover:text-secondary font-medium transition-colors flex items-center gap-1">
              What We Do
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {/* Dropdown placeholder - simple hover */}
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-none border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 p-2">
              <Link href="/services"><a className="block px-4 py-2 hover:bg-background text-sm">Services</a></Link>
              <Link href="/guide"><a className="block px-4 py-2 hover:bg-background text-sm">Our Guide</a></Link>
            </div>
          </div>
          <Link href="/blog"><a className="text-foreground hover:text-secondary font-medium transition-colors">Blog</a></Link>
          <Link href="/contact"><a className="text-foreground hover:text-secondary font-medium transition-colors">Let's Connect</a></Link>
        </div>

        {/* Icons & CTA */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 text-foreground/80">
            <a href="#" className="hover:text-secondary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Facebook size={20} /></a>
          </div>
          <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-none px-6 py-5 font-medium shadow-none">
            Schedule Free Consultation
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border p-6 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
          <Link href="/about"><a className="text-lg font-medium">About</a></Link>
          <Link href="/services"><a className="text-lg font-medium">What We Do</a></Link>
          <Link href="/blog"><a className="text-lg font-medium">Blog</a></Link>
          <Link href="/contact"><a className="text-lg font-medium">Let's Connect</a></Link>
          <div className="h-px bg-border my-2"></div>
          <Button className="w-full bg-secondary text-white rounded-none py-6">
            Schedule Free Consultation
          </Button>
        </div>
      )}
    </nav>
  );
}
