import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { ProgrammePathway, SourceLink, StatusLabel } from "@/components/site/ProgrammeUI";
import { sources } from "@/lib/programme-content";

export const Route = createFileRoute("/our-work")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Our Work | Northbridge Foundation" },
      { name: "description", content: "Northbridge’s phased programme pathway, beginning with Learning Labs for foundational mathematics and scientific thinking in Delhi." },
      { property: "og:title", content: "Our Work | Northbridge Foundation" },
      { property: "og:description", content: "A connected pathway: foundational learning first, then exposure, guidance and applied projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OurWork,
});

function OurWork() {
  return (
    <Layout>
      <PageHero
        eyebrow="Our Work"
        title="Foundational learning first. Wider pathways over time."
        intro="Northbridge is building a connected pathway: foundational learning first, then exposure, guidance and opportunities to apply learning."
      />

      <section className="container-page py-16 md:py-20">
        <ProgrammePathway compact />
        <p className="mt-7 max-w-4xl leading-relaxed text-foreground/80">
          Northbridge Learning Labs is our first and core programme. The remaining programmes are future plans
          that will be introduced only when the organisation has the right systems, partnerships, safeguarding
          capacity and evidence to deliver them responsibly.
        </p>
      </section>

      <section className="border-y border-border bg-muted/60">
        <div className="container-page py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <StatusLabel>Current core programme</StatusLabel>
              <h2 className="mt-5 text-3xl md:text-4xl">Northbridge Learning Labs</h2>
              <p className="mt-4 text-lg leading-relaxed text-foreground/80">
                Structured small-group support in foundational mathematics and scientific thinking for students
                in Grades 4–9 in Delhi.
              </p>
              <Link to="/learning-labs" className="btn-accent mt-8 hover:btn-accent-hover">How Learning Labs works</Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {[
                ["Assess", "Use a short individual baseline to understand current skills."],
                ["Group and teach", "Organise small groups around demonstrated learning needs, not grade alone."],
                ["Reassess and adapt", "Review progress every 6–8 weeks and adjust support."],
              ].map(([title, body]) => (
                <article key={title} className="surface-card p-5">
                  <h3 className="text-lg">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">{body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl">Why begin here?</h3>
              <p className="mt-4 leading-relaxed text-foreground/80">
                Foundational mathematics supports later learning in science, economics, data literacy and daily
                decisions. Delhi’s system-level assessment shows important competency gaps even alongside relative
                strengths. Northbridge will use local baselines to understand each participating student’s needs.
              </p>
            </div>
            <div>
              <h3 className="text-2xl">What informs the design?</h3>
              <p className="mt-4 leading-relaxed text-foreground/80">
                The programme draws on the{" "}<SourceLink href={sources.parakhDelhi}>Delhi PARAKH 2024 report</SourceLink>{" "}
                and <SourceLink href={sources.tarlSynthesis}>J-PAL’s Teaching at the Right Level synthesis</SourceLink>.
                These sources guide programme design; they are not evidence of Northbridge results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl">Future layers in the pathway</h2>
        <div className="mt-9 grid gap-6 md:grid-cols-3">
          {([
            ["Future Labs", "Exposure to education pathways, careers, universities, workplaces, research and role models.", "/future-labs" as const],
            ["Mentor Network", "Structured, safeguarded guidance for students navigating goals, education and opportunities.", "/mentor-network" as const],
            ["Build Labs", "Applied projects that help students turn learning into demonstrated capability.", "/build-labs" as const],
          ] as const).map(([title, body, to]) => (
            <article key={title} className="surface-card flex flex-col p-6">
              <StatusLabel future>Future plan</StatusLabel>
              <h3 className="mt-5 text-xl">Northbridge {title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-foreground/80">{body}</p>
              <Link to={to} className="mt-6 text-sm font-medium text-primary underline underline-offset-4">View planned programme</Link>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}