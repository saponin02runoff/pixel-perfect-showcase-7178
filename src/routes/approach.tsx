import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Our Approach | Northbridge Foundation" },
      {
        name: "description",
        content:
          "How Northbridge Foundation thinks about access, strong basics, wider horizons, and honest reading of what works.",
      },
      { property: "og:title", content: "Our Approach | Northbridge Foundation" },
      {
        property: "og:description",
        content:
          "How Northbridge Foundation thinks about access, strong basics, wider horizons, and honest reading of what works.",
      },
    ],
  }),
  component: Approach,
});

const pillars = [
  {
    title: "Make Learning Easier to Reach",
    paras: [
      "Plenty of children are kept from good learning by things that have nothing to do with ability. Distance, cost, the need to work, a family situation that leaves no room for school.",
      "We look for ways to take those obstacles down, working with the schools and people already close to those children. Reaching a child who was going to be missed matters more to us than adding numbers where support already exists.",
    ],
  },
  {
    title: "Help Children Build Strong Basics",
    paras: [
      "Reading and arithmetic carry everything that comes after them. A child who does not read well in Class 3 spends the next several years falling further behind in every subject.",
      "So we care about teaching that actually lands, and about children getting extra help before a small gap turns into a permanent one. Support given early is worth far more than remedial work given late.",
    ],
  },
  {
    title: "Show Children More of the World",
    paras: [
      "School makes more sense to a child who can picture what it leads to. Many children have never met someone doing the kind of work they might be good at.",
      "We care about the ideas, people, and experiences that widen what a child imagines for themselves. It sounds soft. It changes how hard a child is willing to work.",
    ],
  },
  {
    title: "Pay Attention to What Works",
    paras: [
      "Good intentions are common in this field. Evidence is rarer. We try to be clear-eyed about whether children are better off, and to say so plainly either way.",
      "That means keeping what helps, dropping what does not, and being willing to look slow rather than claim results we cannot back up.",
    ],
  },
];

function Approach() {
  return (
    <Layout>
      <PageHero
        eyebrow="Our Approach"
        title="Make education easier to reach. Make it worth reaching."
        intro="These are the ideas we work by. They are broad on purpose, because a child's situation rarely fits a neat category."
      />

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-x-16 gap-y-14 lg:grid-cols-2">
          {pillars.map((p, i) => (
            <article key={p.title}>
              <span className="font-serif text-2xl text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-3 text-2xl md:text-3xl">{p.title}</h2>
              {p.paras.map((text) => (
                <p key={text} className="mt-4 leading-relaxed text-foreground/80">
                  {text}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/60">
        <div className="container-page py-20 md:py-24">
          <h2 className="max-w-2xl text-3xl md:text-4xl">How we think about progress</h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-foreground/80">
            We ask a small set of questions and keep asking them. Can children get to learning that is worth
            their time. Do they understand the basics, and can they use them outside a test. Do they feel
            supported by the adults around them. Can they see more possibilities for their own future than
            they could a year ago.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-foreground/80">
            Some of that is countable and some of it is not. We would rather sit with an honest, partial
            picture than reach for a number that flatters us. As the work grows, so will what we can say about
            it.
          </p>
        </div>
      </section>

      <section className="container-page py-16 text-center md:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl md:text-4xl">Want to work on this with us?</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/get-involved" className="btn-accent hover:btn-accent-hover">
            Get Involved
          </Link>
          <Link to="/contact" className="btn-outline hover:bg-secondary">
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
}
