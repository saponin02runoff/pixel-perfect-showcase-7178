import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ConsultingLink } from "@/components/site/ConsultingLink";
import heroImage from "@/assets/classroom-learning.webp";
import communityClassroom from "@/assets/community-classroom.webp";
import engagedStudents from "@/assets/engaged-students.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Northbridge Foundation | Education Without Borders" },
      {
        name: "description",
        content:
          "Northbridge Foundation helps children across India get a fair chance to learn, understand, and move forward.",
      },
      { property: "og:title", content: "Northbridge Foundation | Education Without Borders" },
      {
        property: "og:description",
        content:
          "Northbridge Foundation helps children across India get a fair chance to learn, understand, and move forward.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const approach = [
  {
    title: "Make Learning Easier to Reach",
    body: "Distance, cost, and everyday circumstances keep children out of good classrooms. We work to lower those barriers.",
    icon: "M4 12h16M12 4v16",
  },
  {
    title: "Help Children Build Strong Basics",
    body: "Reading and arithmetic carry everything that comes after. Children need real support until those basics hold.",
    icon: "M4 19V6a2 2 0 0 1 2-2h6v15H6a2 2 0 0 0-2 2Zm16 0V6a2 2 0 0 0-2-2h-6v15h6a2 2 0 0 1 2 2Z",
  },
  {
    title: "Show Children More of the World",
    body: "Alumni and professionals help students see concrete pathways—and recognize that people from backgrounds like theirs can succeed.",
    icon: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0c3 3 3 15 0 18M3 12h18",
  },
  {
    title: "Pay Attention to What Works",
    body: "We watch closely, keep what helps children, and drop what does not. Honest reading of results guides the work.",
    icon: "M4 18l5-6 4 4 7-9",
  },
];

function Index() {
  return (
    <Layout>
      <section className="bg-secondary">
        <div className="container-page grid items-center gap-12 py-16 md:py-20 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Education Without Borders. Working across India.
            </p>
            <h1 className="mt-5 text-4xl leading-[1.06] sm:text-5xl xl:text-6xl">
              Real education. More open doors.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
              Northbridge Foundation works to help children across India get a fair chance to learn,
              understand, and move forward.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/approach" className="btn-accent hover:btn-accent-hover">
                See How We Work
              </Link>
              <Link to="/get-involved" hash="partner" className="btn-outline hover:bg-secondary">
                Partner With Us
              </Link>
            </div>
          </div>

          <div className="reveal">
            <img
              src={heroImage}
              alt="Students participating in an interactive classroom lesson in Gujarat, India"
              width={1800}
              height={1200}
              className="photo h-[320px] w-full shadow-sm sm:h-[420px] lg:h-[520px]"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container-page py-10 md:py-12">
          <div className="grid gap-5 border-l-4 border-accent pl-6 md:grid-cols-[1fr_auto] md:items-center md:gap-12 md:pl-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Supported by established expertise
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl">
                An initiative of <ConsultingLink />
              </h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-foreground/80">
                Northbridge Consulting provides placement support for students pursuing opportunities in the
                United States. It helps university students build stronger applications, prepare for interviews,
                and approach internships and full-time opportunities with clarity.
              </p>
            </div>
            <a
              href="https://northbridgeconsulting.org/"
              target="_blank"
              rel="noreferrer noopener"
              className="btn-outline w-fit hover:bg-secondary"
            >
              Learn more about Northbridge Consulting →
            </a>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <img
            src={communityClassroom}
            alt="Students learning together with their teachers in an Indian community classroom"
            loading="lazy"
            width={1408}
            height={1008}
            className="photo h-[300px] w-full sm:h-[400px]"
          />
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Why this work matters
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl">Children are in school. Learning is another question.</h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              According to the ASER 2024 report, only about 1 in 4 Class 3 students in Indian government
              schools can read a Class 2 level text, and only about a third of Class 5 students can do basic
              division. This is true even though over 95 percent of children are enrolled in primary school.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Getting a child through the school gate is the start. Staying there, keeping up, and making
              sense of what is taught takes more. Some children never get close to a decent classroom. Others
              sit in one every day without the support they need. We work on both ends of that, because for a
              child it is one problem, not several.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/60">
        <div className="container-page py-20 md:py-24">
          <h2 className="max-w-2xl text-3xl md:text-4xl">How we think about the work</h2>
          <p className="mt-4 max-w-2xl text-foreground/75">
            Four plain ideas guide what we take on and how we judge it.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {approach.map((item) => (
              <article key={item.title} className="surface-card p-6 transition-shadow hover:shadow-md">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="text-primary"
                >
                  <path d={item.icon} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                <h3 className="mt-4 text-lg">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-foreground/75">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/approach" className="btn-primary hover:opacity-90">
              Read our approach
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container-page grid gap-12 py-20 md:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="text-3xl text-primary-foreground md:text-4xl">
              We hold ourselves to a real standard.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/85">
              Strong programs begin with clear goals. We track whether students gain access, strengthen core
              skills, stay engaged, and develop a broader sense of what is possible for their futures.
            </p>
            <p className="mt-4 leading-relaxed text-primary-foreground/80">
              Evidence guides how we allocate resources, refine delivery, and report progress to schools,
              families, partners, and the people who place their trust in this work.
            </p>
          </div>
          <img
            src={engagedStudents}
            alt="Two students engaged in a classroom activity in India"
            loading="lazy"
            width={1408}
            height={1008}
            className="photo h-[260px] w-full sm:h-[340px]"
          />
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <h2 className="text-3xl md:text-4xl">Ways to be part of this</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Volunteer",
              body: "Teach, tutor, mentor, or take responsibility for building programs and delivering strong outcomes.",
              to: "/get-involved" as const,
              hash: "volunteer",
              label: "Volunteer with us",
            },
            {
              title: "Partner With Us",
              body: "Schools, institutions, and organizations working on education in India. We are open to serious conversations.",
              to: "/get-involved" as const,
              hash: "partner",
              label: "Start a conversation",
            },
            {
              title: "Contact Us",
              body: "Questions, ideas, or something we should know about. Write to us and a person will read it.",
              to: "/contact" as const,
              hash: "",
              label: "Get in touch",
            },
          ].map((card) => (
            <article key={card.title} className="surface-card flex flex-col p-7 transition-shadow hover:shadow-md">
              <h3 className="text-xl">{card.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-foreground/75">{card.body}</p>
              <Link
                to={card.to}
                {...(card.hash ? { hash: card.hash } : {})}
                className="mt-6 text-sm font-medium text-primary link-quiet hover:border-current"
              >
                {card.label} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary">
        <div className="container-page py-16 text-center md:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl md:text-4xl">
            Better learning grows through committed schools, educators, mentors, and partners.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-foreground/80">
            Bring your experience, reach, or resources to work that expands opportunity for students across India.
          </p>
          <Link to="/contact" className="btn-accent mt-8 hover:btn-accent-hover">
            Get In Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
}
