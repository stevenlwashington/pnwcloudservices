import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Terms of Use</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-8 text-lg">
              Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the website of PNW Cloud Services ("we," "our," or "us"), you accept and agree to be bound by these Terms of Use. 
                If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">2. Use of Services</h2>
              <p className="mb-4">
                Our website and services are intended for business and professional use. You agree to use our site only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.
              </p>
              <p>Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">3. Intellectual Property</h2>
              <p>
                All content, trademarks, logos, and service marks displayed on this site are our property or the property of other third parties. 
                You are not permitted to use these Marks without our prior written consent or the consent of such third party which may own the Marks.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">4. Disclaimer of Warranties</h2>
              <p>
                The information provided on this website is for general informational purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">5. Limitation of Liability</h2>
              <p>
                In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">6. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will do so by posting and drawing attention to the updated terms on the Site. Your decision to continue to visit and make use of the Site after such changes have been made constitutes your formal acceptance of the new Terms of Use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Use, please contact us through our <a href="/contact" className="text-secondary hover:underline">contact page</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
