import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-8 text-lg">
              Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
              <p>
                At PNW Cloud Services ("we," "our," or "us"), we value your privacy and are committed to protecting your personal data. 
                This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website 
                (www.pnwcloudservices.com) or engage with our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
              <p className="mb-4">We collect information that you voluntarily provide to us, including:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Personal Identification Information:</strong> Name, email address, phone number, company name, and job title when you fill out our contact forms or newsletter signup.</li>
                <li><strong>Communication Data:</strong> Any messages or details you provide in the "How can we help?" or "Message" fields.</li>
              </ul>
              <p>
                We also automatically collect certain technical data when you visit our site, such as IP addresses, browser type, 
                and device information, to improve website performance and security.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use your data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your inquiries and schedule consultations.</li>
                <li>To send you newsletters or updates (only if you have opted in).</li>
                <li>To improve our website functionality and user experience.</li>
                <li>To comply with legal obligations and prevent fraud.</li>
              </ul>
              <p className="mt-4 font-semibold text-primary">
                We do not sell, rent, or trade your personal information to third parties.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">4. Third-Party Processors</h2>
              <p className="mb-4">We use trusted third-party services to handle specific functions:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Formspree:</strong> We use Formspree to process and deliver form submissions securely. 
                  Please review <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Formspree's Privacy Policy</a> for more details.
                </li>
                <li>
                  <strong>Cloudflare Turnstile / reCAPTCHA:</strong> We may use these services to protect our site from spam and abuse. 
                  These services may collect hardware and software information (e.g., device and application data) to ensure you are not a bot.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">5. Data Retention & Security</h2>
              <p className="mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, 
                including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
              <p>
                We implement reasonable security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. 
                However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">6. Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion of your data ("Right to be Forgotten").</li>
                <li>Opt-out of marketing communications at any time.</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us via our contact form.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">7. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Effective Date."
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us through our 
                <a href="/contact" className="text-secondary hover:underline ml-1">contact page</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
