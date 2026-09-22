import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import mentoring from "@/assets/student-mentoring.webp";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
        intro="Contribute expertise, leadership, or institutional support to expand opportunity for students."
      />

      <section id="volunteer" className="container-page scroll-mt-28 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              For individuals
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl">Volunteer</h2>
            <p className="mt-6 leading-relaxed text-foreground/80">
              We welcome teachers, tutors, mentors, and experienced leaders who can build programs, guide teams,
              and take ownership of outcomes. Volunteers should bring relevant experience, dependable follow-through,
              and a commitment to working respectfully with students, educators, and schools.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Tell us about your teaching, mentoring, or leadership experience, the responsibilities you are
              prepared to own, and the time you can commit. We match qualified volunteers with clearly defined
              roles and shared expectations.
            </p>
            <Link to="/contact" className="btn-accent mt-8 hover:btn-accent-hover">
              Volunteer With Us
            </Link>
          </div>
          <img
            src={mentoring}
            alt="A student receiving focused guidance from a mentor"
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
              We work with schools, institutions, companies, and organizations committed to strengthening
              education in India. Partners may contribute local reach, teaching expertise, student services,
              mentors, program capacity, or funding aligned with clear educational priorities.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Each partnership begins with shared goals, defined responsibilities, and a practical delivery
              plan. We value sustained collaboration, responsible implementation, and clear communication about
              student progress.
            </p>
            <Link to="/contact" className="btn-primary mt-8 hover:opacity-90">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-16 text-center md:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl md:text-4xl">Have another way to contribute?</h2>
        <p className="mx-auto mt-5 max-w-xl text-foreground/80">
          Share your proposal, relevant experience, and the outcome you want to help advance. Our team will
          review the opportunity and respond with the most appropriate next step.
        </p>
        <Link to="/contact" className="btn-outline mt-8 hover:bg-secondary">
          Contact Us
        </Link>
      </section>
    </Layout>
  );
}
