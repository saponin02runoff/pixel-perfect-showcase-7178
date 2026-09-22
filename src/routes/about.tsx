import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { ConsultingLink } from "@/components/site/ConsultingLink";
import classroom from "@/assets/engaged-students.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Northbridge Foundation" },
      {
        name: "description",
        content:
          "How Northbridge Foundation started, what we are here to do, and the values we work by across India.",
      },
      { property: "og:title", content: "About Us | Northbridge Foundation" },
      {
        property: "og:description",
        content:
          "How Northbridge Foundation started, what we are here to do, and the values we work by across India.",
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
        title="A foundation built around one plain idea."
        intro="Education should reach further and do more. That is the whole of it."
      />

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl">Built for lasting opportunity</h2>
            <p className="mt-6 leading-relaxed text-foreground/80">
              Northbridge Foundation is an initiative of <ConsultingLink />, an established firm that provides
              placement support for students pursuing opportunities in the United States. The foundation extends
              that commitment to opportunity by investing in educational access, strong learning foundations,
              mentorship, and wider horizons for students across India.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/80">
              India was the obvious place to work. Millions of children are already in classrooms, which is a
              real achievement. What happens inside those classrooms is uneven. Some children learn well.
              Many finish years of school without the basics they were meant to pick up in the first few.
              That gap is where we put our attention.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Our work is grounded in school partnerships and focused delivery. We align support with local
              priorities, set clear goals, and build programs designed to strengthen both immediate learning and
              the choices available to students over time.
            </p>
          </div>
          <img
            src={classroom}
            alt="Students engaged in a classroom activity in India"
            loading="lazy"
            width={1408}
            height={1008}
            className="photo h-[320px] w-full lg:h-full"
          />
        </div>
      </section>

      <section id="mission" className="border-y border-border bg-muted/60 scroll-mt-28">
        <div className="container-page grid gap-10 py-20 md:py-24 lg:grid-cols-2">
          <div className="surface-card p-8">
            <h2 className="text-2xl">Mission</h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">
              Northbridge Foundation works to make education easier to reach and more useful for children
              across India. We support learning that helps children build strong basics, understand the world
              around them, and have a fair chance at what comes next.
            </p>
          </div>
          <div className="surface-card p-8">
            <h2 className="text-2xl">Vision</h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">
              We want an India where every child has a real chance to learn. A place where good education
              reaches further, teaching makes sense, and children can see more possibilities for their own
              lives.
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
          <p className="mx-auto max-w-2xl text-center font-serif text-2xl leading-snug text-primary-deep md:text-3xl">
            Opportunity expands when strong learning, trusted guidance, and visible pathways come together.
          </p>
        </div>
      </section>
    </Layout>
  );
}
