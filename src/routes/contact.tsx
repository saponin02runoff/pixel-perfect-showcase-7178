import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Layout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Northbridge Foundation" },
      {
        name: "description",
        content:
          "Reach Northbridge Foundation about volunteering, partnership, media, or general questions about our work in India.",
      },
      { property: "og:title", content: "Contact | Northbridge Foundation" },
      {
        property: "og:description",
        content:
          "Reach Northbridge Foundation about volunteering, partnership, media, or general questions about our work in India.",
      },
    ],
  }),
  component: Contact,
});

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=30+N+Gould+St+Ste+N%2C+Sheridan%2C+WY+82801";

const fieldClass =
  "mt-2 w-full rounded-md border border-input bg-card px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/25";

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title="Write to us."
        intro="Tell us what you have in mind. Keep it short if you like. A person reads every message."
      />

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="surface-card p-7 md:p-9">
            {sent ? (
              <div className="py-10 text-center">
                <h2 className="text-2xl">Thank you. Your message is on its way.</h2>
                <p className="mx-auto mt-4 max-w-md text-foreground/75">
                  We read everything that comes in and reply as soon as we reasonably can. If it is urgent,
                  the phone number on this page is the faster route.
                </p>
                <button className="btn-outline mt-8 hover:bg-secondary" onClick={() => setSent(false)}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input id="name" name="name" required className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input id="email" name="email" type="email" required className={fieldClass} />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <input id="phone" name="phone" type="tel" className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="subject" className="text-sm font-medium">
                      Area of interest
                    </label>
                    <select id="subject" name="subject" className={fieldClass} defaultValue="General Inquiry">
                      <option>General Inquiry</option>
                      <option>Volunteer</option>
                      <option>Partnership</option>
                      <option>Media</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={6} required className={fieldClass} />
                </div>

                <button type="submit" className="btn-accent hover:btn-accent-hover">
                  Send Message
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-8">
            <div>
              <h2 className="text-xl">Phone</h2>
              <a
                href="tel:+16467389271"
                className="mt-2 inline-block text-lg text-primary link-quiet hover:border-current"
              >
                (646) 738-9271
              </a>
            </div>
            <div>
              <h2 className="text-xl">Registered office</h2>
              <p className="mt-2 leading-relaxed text-foreground/80">
                30 N Gould St Ste N
                <br />
                Sheridan, WY 82801
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-outline mt-4 hover:bg-secondary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.7" />
                </svg>
                Open in Google Maps
              </a>
            </div>
            <div>
              <h2 className="text-xl">Where we work</h2>
              <p className="mt-2 leading-relaxed text-foreground/80">
                Across India. Our work is with children, schools, and communities there.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
