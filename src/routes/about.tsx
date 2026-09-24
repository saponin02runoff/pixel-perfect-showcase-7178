import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { ConsultingLink } from "@/components/site/ConsultingLink";
import { ProgrammePathway } from "@/components/site/ProgrammeUI";
import classroom from "@/assets/students-learning-classroom.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Northbridge Foundation" },
      {
        name: "description",
        content:
          "Northbridge Foundation’s mission, values and phased education programme pathway for students in Delhi.",
      },
      { property: "og:title", content: "About Us | Northbridge Foundation" },
      {
        property: "og:description",
        content:
          "Northbridge Foundation’s mission, values and phased education programme pathway for students in Delhi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  {
    title: "Education Should Reach Everyone",
    body: "A child should not miss out on learning because of where they live or what their family can afford.",
  },
  {
    title: "Learning Has To Mean Something",
    body: "We care about whether children understand what they are taught and can use it in daily life.",
  },
  {
    title: "The World Should Feel Within Reach",
    body: "Children need more than books. They need support, ideas, and a view of the wider world.",
  },
  {
    title: "We Answer For Our Work",
    body: "We hold ourselves to a high standard. We stay honest about what is working and what needs to improve.",
  },
  {
    title: "We Work With People, Not Around Them",
    body: "Teachers, schools, families, and communities know their own lives. We listen and work alongside them.",
  },
];

function About() {
  return (
    <Layout>
      <PageHero
        eyebrow="About Us"
        title="Strong foundations create brighter possibilities."
        intro="Northbridge is building an evidence-informed education pathway that helps students strengthen their learning, confidence and capacity to shape their futures."
      />

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl">Built for lasting opportunity</h2>
            <p className="mt-6 leading-relaxed text-foreground/80">
              Northbridge Foundation is an initiative of <ConsultingLink />, a career development consulting firm
              serving students across 40+ universities in the United States. The foundation extends that
              commitment to opportunity through a phased education pathway for students in Delhi.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Northbridge begins with Learning Labs: structured small-group support for students in Grades 4–9
              whose baseline assessment shows gaps in foundational mathematics or scientific thinking.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/80">
               Future Labs, Mentor Network and Build Labs are planned later layers. They will be introduced only
               when the organisation has appropriate systems, partnerships, safeguarding capacity and evidence.
            </p>
          </div>
          <img
            src={classroom}
            alt="Students engaged in a classroom activity in India"
            loading="lazy"
            width={1920}
            height={1080}
            className="photo h-[320px] w-full lg:h-full"
          />
        </div>
      </section>

      <section id="mission" className="border-y border-border bg-muted/60 scroll-mt-28">
        <div className="container-page grid gap-10 py-20 md:py-24 lg:grid-cols-2">
          <div className="surface-card p-8">
            <h2 className="text-2xl">Mission</h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">
               Northbridge Foundation helps students build the academic foundations, confidence and practical
               capabilities to keep learning, pursue meaningful work and contribute to their communities.
            </p>
          </div>
          <div className="surface-card p-8">
            <h2 className="text-2xl">Vision</h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">
               We believe better education helps build a better nation. Our vision is a future in which students can
               earn with dignity, shape their own paths and use their abilities in service of society.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <h2 className="text-3xl md:text-4xl">What we value</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {values.map((value, i) => (
            <article key={value.title} className="surface-card p-6">
              <span className="font-serif text-2xl text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg">{value.title}</h3>
              <p className="mt-2.5 leading-relaxed text-foreground/75">{value.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary">
        <div className="container-page py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl">A deliberately phased pathway</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-foreground/80">Foundational learning comes first. Exposure, guidance and applied projects remain future plans until Northbridge is ready to deliver them responsibly.</p>
          <div className="mt-9"><ProgrammePathway compact /></div>
          <Link to="/our-work" className="btn-primary mt-9 hover:opacity-90">Explore our work</Link>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="container-page py-16 md:py-20">
          <p className="mx-auto max-w-2xl text-center font-serif text-2xl leading-snug text-primary-deep md:text-3xl">
            Opportunity expands when strong learning, trusted guidance, and visible pathways come together.
          </p>
        </div>
      </section>
    </Layout>
  );
}
