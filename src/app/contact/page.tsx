import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact | Get in Touch",
  description:
    "Contact Quantum Wellness Warrior. Located in Hilo on Hawaii's Big Island. Reach out with questions about programs, applications, or partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative py-24 md:py-32 lg:py-40 sacred-geometry-bg">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white-fire tracking-wide">
            <span className="text-quantum-gold">Contact</span>
          </h1>
          <p className="mt-6 text-lg text-silver-mist/80 max-w-2xl mx-auto leading-relaxed">
            Have a question? Ready to take the next step? We read every message
            personally.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-volcanic-ash/30">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-white-fire tracking-wide mb-8">
                Send a Message
              </h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="space-y-10">
              <div>
                <h2 className="font-heading text-2xl font-bold text-white-fire tracking-wide mb-8">
                  Find Us
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-quantum-gold mb-2 font-heading">
                      Location
                    </h3>
                    <p className="text-silver-mist/80">
                      Hilo, Big Island
                      <br />
                      Hawai&apos;i, USA 96720
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-quantum-gold mb-2 font-heading">
                      Email
                    </h3>
                    <p className="text-silver-mist/80">
                      info@quantumwellnesswarrior.com
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-quantum-gold mb-2 font-heading">
                      Response Time
                    </h3>
                    <p className="text-silver-mist/70 text-sm">
                      We respond to all inquiries within 48 hours. For program
                      applications, use the{" "}
                      <a
                        href="/apply"
                        className="text-quantum-gold hover:text-quantum-gold/80 underline underline-offset-4"
                      >
                        application form
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-quantum-gold mb-4 font-heading">
                  Big Island, Hawai&apos;i
                </h3>
                <div className="aspect-[4/3] rounded-lg bg-volcanic-ash border border-quantum-gold/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-3xl text-quantum-gold/20 mb-2">
                      &#x1F30B;
                    </div>
                    <p className="text-xs text-muted-foreground italic">
                      Google Maps embed — Hilo, Big Island
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Exact location shared upon program acceptance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
