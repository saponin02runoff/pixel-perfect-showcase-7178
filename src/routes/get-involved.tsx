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
          "Partnership and interest pathways for Delhi schools, community organisations, volunteers, mentors, supporters and funders.",
      },
      { property: "og:title", content: "Get Involved | Northbridge Foundation" },
      {
        property: "og:description",
        content:
          "Partnership and interest pathways for Delhi schools, community organisations, volunteers, mentors, supporters and funders.",
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
        title="Build careful, useful support with us."
        intro="Schools, community organisations, volunteers, supporters and funders can help Northbridge develop an evidence-informed model for students in Delhi."
      />

      <section id="volunteer" className="container-page scroll-mt-28 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              For individuals
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl">Volunteer</h2>
            <p className="mt-6 leading-relaxed text-foreground/80">
               Northbridge will recruit and train teachers, tutors, and experienced leaders when programme systems,
               safeguarding processes and supervision capacity are ready.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/80">
               Register your interest by sharing your relevant experience and availability. Contact does not confirm
               placement; student-facing roles will begin only after appropriate onboarding and safeguards are in place.
            </p>
            <Link to="/contact" className="btn-accent mt-8 hover:btn-accent-hover">
               Register Your Interest
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
               Northbridge is seeking opportunities to learn alongside schools and community organisations in Delhi.
               We are interested in partnerships that strengthen, rather than duplicate, existing support for students.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/80">
               A partnership conversation can explore student needs, local priorities, practical delivery,
               responsibilities, safeguarding and how learning progress would be understood.
            </p>
            <Link to="/contact" className="btn-primary mt-8 hover:opacity-90">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

      <section id="support" className="container-page scroll-mt-28 py-20 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">For supporters and funders</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Support responsible programme development</h2>
          <p className="mt-6 leading-relaxed text-foreground/80">Support can help Northbridge build and test a careful, evidence-informed model for students in Delhi. We will prioritise transparent reporting and responsible use of resources as the organisation develops.</p>
          <p className="mt-4 leading-relaxed text-foreground/80">Northbridge does not currently make tax-deductibility, CSR eligibility or online donation claims on this website.</p>
          <Link to="/contact" className="btn-primary mt-8 hover:opacity-90">Connect With Northbridge</Link>
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
