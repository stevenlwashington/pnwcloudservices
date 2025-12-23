import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import logo from "@assets/ChatGPT Image Nov 29, 2025, 09_22_05 PM_1764480136520.png";
import { navigation } from "@/config/navigation";
import { ConsultationModal } from "@/components/consultation-modal";
import { NewsletterSignup } from "@/components/newsletter-signup";

export function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-6">
        

        {/* Navigation Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <img src={logo} alt="PNW Cloud" style={{ height: '50px' }} className="mb-6" />
            <p className="text-sm text-muted-foreground mb-6">
              Smarter Cloud Decisions. <br />
              Better Business Outcomes.
            </p>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-foreground mb-3">Join our Community</h4>
              <NewsletterSignup />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {navigation.footer.company.map((link, i) => (
                <li key={i}><Link href={link.href}><a className="hover:text-secondary transition-colors">{link.label}</a></Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {navigation.footer.services.map((link, i) => (
                <li key={i}><Link href={link.href}><a className="hover:text-secondary transition-colors">{link.label}</a></Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {navigation.footer.resources.map((link, i) => (
                <li key={i}><Link href={link.href}><a className="hover:text-secondary transition-colors">{link.label}</a></Link></li>
              ))}
              <li className="pt-4 font-bold text-foreground">Legal</li>
               {navigation.footer.legal.map((link, i) => (
                <li key={i}><Link href={link.href}><a className="hover:text-secondary transition-colors">{link.label}</a></Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-muted-foreground pt-8 border-t border-border">
          © 2025 Pacific Northwest Cloud Services LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
