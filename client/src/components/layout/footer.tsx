import { Link } from "wouter";
import logo from "@assets/ChatGPT Image Nov 29, 2025, 09_22_05 PM_1764480136520.png";
import { navigation } from "@/config/navigation";
import { ContactLink } from "@/components/ContactLink";

export function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-6">
        

        {/* Navigation Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img src={logo} alt="PNW Cloud" style={{ height: '24px' }} />
            </Link>
            <p className="text-sm text-muted-foreground">
              Engineering Speed. <br />
              Business Confidence.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {navigation.footer.company.map((link, i) => (
                <li key={i}>
                  {link.label === "Contact" ? (
                    <ContactLink className="hover:text-secondary transition-colors text-muted-foreground">
                      {link.label}
                    </ContactLink>
                  ) : (
                    <Link href={link.href} className="hover:text-secondary transition-colors">{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {navigation.footer.services.map((link, i) => (
                <li key={i}><Link href={link.href} className="hover:text-secondary transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {navigation.footer.resources.map((link, i) => (
                <li key={i}><Link href={link.href} className="hover:text-secondary transition-colors">{link.label}</Link></li>
              ))}
              <li className="pt-4 font-bold text-foreground">Legal</li>
               {navigation.footer.legal.map((link, i) => (
                <li key={i}><Link href={link.href} className="hover:text-secondary transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-muted-foreground pt-8 border-t border-border">
          © 2026 Pacific Northwest Cloud Services LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
