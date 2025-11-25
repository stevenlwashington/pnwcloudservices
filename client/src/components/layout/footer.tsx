import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import logo from "@assets/logo.webp";
import { navigation } from "@/config/navigation";
import { ConsultationModal } from "@/components/consultation-modal";

export function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-6">
        
        {/* Top Section - CTA */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Ready to talk? <br />
              <span className="text-secondary">Get in touch.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-md">
              Take charge of your business future by booking an appointment with our expert consultants.
            </p>
          </div>

          <div className="bg-background p-8 space-y-6 border border-border rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-4">Schedule Appointment</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white border border-border hover:border-secondary transition-colors group cursor-pointer rounded-lg">
                <div>
                  <h4 className="font-bold text-foreground group-hover:text-secondary transition-colors">Free Consultation</h4>
                  <p className="text-sm text-muted-foreground">Free 20-minute consultation</p>
                </div>
                <ConsultationModal>
                  <Button size="sm" className="bg-secondary text-white rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Book
                  </Button>
                </ConsultationModal>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px bg-border mb-16"></div>

        {/* Navigation Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <img src={logo} alt="PNW Cloud" className="h-12 mb-6" />
            <p className="text-sm text-muted-foreground mb-6">
              Smarter Cloud Decisions. <br />
              Better Business Outcomes.
            </p>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-foreground">Join our Community</h4>
              <div className="flex gap-2 max-w-sm">
                <Input placeholder="Email Address" className="bg-background border-border h-10 rounded-lg" />
                <Button className="bg-secondary text-white hover:bg-secondary/90 h-10 rounded-lg font-semibold">
                  Sign Up
                </Button>
              </div>
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
