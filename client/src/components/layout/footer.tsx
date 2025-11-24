import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import logo from "@assets/logo.webp";

export function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-6">
        
        {/* CTA Section */}
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

          <div className="bg-background p-8 space-y-6 border border-border">
            <h3 className="text-xl font-bold text-primary mb-4">Schedule Appointment</h3>
            
            <div className="space-y-4">
              {[
                { title: "Free Consultation", duration: "30 minutes", price: "Free" },
                { title: "Basic Service", duration: "1 hour", price: "$99.00" },
                { title: "Advanced Service", duration: "1 hour", price: "$199.00" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white border border-border hover:border-secondary transition-colors group cursor-pointer">
                  <div>
                    <h4 className="font-bold text-foreground group-hover:text-secondary transition-colors">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.duration} • {item.price}</p>
                  </div>
                  <Button size="sm" className="bg-primary text-white rounded-none opacity-0 group-hover:opacity-100 transition-opacity">
                    Book
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-border mb-16"></div>

        {/* Links & Newsletter */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <img src={logo} alt="PNW Cloud" className="h-12 mb-6" />
            <p className="text-sm text-muted-foreground">
              Smarter Cloud Decisions. <br />
              Better Business Outcomes.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/about"><a className="hover:text-secondary">About</a></Link></li>
              <li><Link href="/services"><a className="hover:text-secondary">Services</a></Link></li>
              <li><Link href="/careers"><a className="hover:text-secondary">Careers</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-secondary">Contact</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/privacy"><a className="hover:text-secondary">Privacy Policy</a></Link></li>
              <li><Link href="/terms"><a className="hover:text-secondary">Terms of Service</a></Link></li>
              <li><Link href="/security"><a className="hover:text-secondary">Security</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Join our Community</h4>
            <div className="space-y-3">
              <Input placeholder="Email Address" className="rounded-none bg-background border-border" />
              <Button className="w-full bg-secondary text-white rounded-none hover:bg-secondary/90">
                Sign Up
              </Button>
              <p className="text-xs text-muted-foreground">
                Protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-muted-foreground pt-8 border-t border-border">
          © 2025 Pacific Northwest Cloud Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
