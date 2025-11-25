import { Navbar } from "@/components/layout/navbar";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/layout/footer";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-in slide-in-from-bottom-5 duration-500">Let's Connect</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in slide-in-from-bottom-5 duration-500 delay-100">
            Ready to modernize your business? Our team is here to help you navigate your cloud journey.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8 lg:col-span-1 animate-in slide-in-from-left-5 duration-700">
               <div className="bg-background p-8 rounded-xl border border-border space-y-6">
                 <div className="flex items-start gap-4">
                   <Mail className="w-6 h-6 text-secondary mt-1" />
                   <div>
                     <h3 className="font-bold text-lg">Email Us</h3>
                     <a href="mailto:hello@pnwcloudservices.com" className="text-muted-foreground hover:text-secondary">hello@pnwcloudservices.com</a>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <Phone className="w-6 h-6 text-secondary mt-1" />
                   <div>
                     <h3 className="font-bold text-lg">Call Us</h3>
                     <p className="text-muted-foreground">+1 (555) 123-4567</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <MapPin className="w-6 h-6 text-secondary mt-1" />
                   <div>
                     <h3 className="font-bold text-lg">Location</h3>
                     <p className="text-muted-foreground">Seattle, WA<br/>Serving clients globally</p>
                   </div>
                 </div>
               </div>

               <div className="bg-primary text-white p-8 rounded-xl">
                 <h3 className="font-bold text-lg mb-4">Why PNW Cloud?</h3>
                 <ul className="space-y-3 text-sm opacity-90">
                   <li>✓ Free 20-minute consultation</li>
                   <li>✓ Vendor Agnostic Approach</li>
                   <li>✓ Enterprise-Grade Security</li>
                   <li>✓ Proven ROI Focus</li>
                 </ul>
               </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 animate-in slide-in-from-right-5 duration-700">
               <div className="bg-white p-8 rounded-xl border border-border shadow-sm">
                 <h3 className="text-2xl font-bold text-primary mb-6">Send us a message</h3>
                 <ContactForm />
               </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
