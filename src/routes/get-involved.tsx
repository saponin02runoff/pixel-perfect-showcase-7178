import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import books from "@/assets/books.jpg";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved | Northbridge Foundation" },
      {
        name: "description",
        content:
          "Volunteer your time and skills, or partner with Northbridge Foundation as a school, institution, or organization.",
      },
      { property: "og:title", content: "Get Involved | Northbridge Foundation" },
      {
        property: "og:description",
        content:
          "Volunteer your time and skills, or partner with Northbridge Foundation as a school, institution, or organization.",
      },
    ],
  }),
  component: GetInvolved,
});

function GetInvolved() {
  return (
    <Layout>
      <PageHero
        eyebrow="Get Involved"
        title="Two ways in."
        intro="Both start the same way. You write to us, and a person reads it and writes back."
      />

      <section id="volunteer" className="container-page scroll-mt-28 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              For individuals
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl">Volunteer</h2>
            <p className="mt-6 leading-relaxed text-foreground/80">
              This is for people who want to give time or a skill. Teachers and tutors, obviously. Also
              writers, designers, translators, researchers, and people who are simply good at getting
              ordinary things done on time.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Tell us what you are good at and roughly how much time you have. We will be straight with you
              about whether we have something useful for you right now. If we do not, we will keep in touch
              rather than invent busywork.
            </p>
            <Link to="/contact" className="btn-accent mt-8 hover:btn-accent-hover">
              Volunteer With Us
            </Link>
          </div>
          <img
            src={books}
            alt="A stack of well used schoolbooks beside an open exercise notebook"
            loading="lazy"
            width={1408}
            height={1008}
            className="photo h-[300px] w-full sm:h-[380px]"
          />
        </div>
      </section>

      <section id="partner" className="scroll-mt-28 border-y border-border bg-muted/60">
        <div className="container-page py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              For organizations
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl">Partner With Us</h2>
            <p className="mt-6 leading-relaxed text-foreground/80">
              This is for schools, institutions, companies, and organizations already working on education in
              India, or wanting to. Some partners bring reach into places we cannot get to on our own. Some
              bring teaching experience. Some bring funding or people.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/80">
              We are a young organization and we say so upfront. What we can offer is care, attention, and an
              honest account of what happens. If that fits how you work, write to us and tell us what you have
              in mind.
            </p>
            <Link to="/contact" className="btn-primary mt-8 hover:opacity-90">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-16 text-center md:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl md:text-4xl">Not sure which one fits?</h2>
        <p className="mx-auto mt-5 max-w-xl text-foreground/80">
          Write to us anyway. Describe what you have in mind and we will figure it out together.
        </p>
        <Link to="/contact" className="btn-outline mt-8 hover:bg-secondary">
          Contact Us
        </Link>
      </section>
    </Layout>
  );
}
