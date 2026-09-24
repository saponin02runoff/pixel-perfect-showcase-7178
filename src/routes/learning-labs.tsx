import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Disclosure, SourceLink, StatusLabel } from "@/components/site/ProgrammeUI";
import { sources } from "@/lib/programme-content";

export const Route = createFileRoute("/learning-labs")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Northbridge Learning Labs | Foundational Learning in Delhi" },
      { name: "description", content: "Northbridge Learning Labs provides structured small-group foundational mathematics and scientific thinking support for students in Grades 4–9 in Delhi." },
      { property: "og:title", content: "Northbridge Learning Labs | Northbridge Foundation" },
      { property: "og:description", content: "Learning starts at the level each student has reached." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LearningLabs,
});

const strands = [
  ["Number sense", "Place value, estimation, comparison, number relationships and mental maths"],
  ["Arithmetic operations", "Addition, subtraction, multiplication, division and their use in real problems"],
  ["Fractions and decimals", "Fractions as quantities, number-line positions, division, ratios and daily-life applications"],
  ["Ratios and percentages", "Proportional reasoning, percentages, discounts, data interpretation and financial numeracy"],
  ["Problem-solving", "Reading a question, identifying information, choosing a method and explaining reasoning"],
  ["English reading and writing", "Direct assessment of comprehension, vocabulary and written expression, with support where a student’s baseline shows a need"],
  ["Scientific thinking", "Observation, prediction, classification, measurement, evidence, variables and explanation"],
  ["Grade-linked science", "Matter, living systems, force, energy, environment and data after prerequisites are secure"],
];

function LearningLabs() {
  return (
    <Layout>
      <PageHero
        eyebrow="Northbridge Learning Labs"
        badge="Current core programme"
        title="Learning starts at the level each student has reached."
        intro="Structured small-group support in mathematics, English and scientific thinking for students in Grades 4–9 in Delhi."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div><StatusLabel>Current core programme</StatusLabel><h2 className="mt-5 text-3xl">A route back into grade-level learning</h2></div>
          <div>
            <p className="text-lg leading-relaxed text-foreground/80">
              Learning Labs is not generic tuition, homework completion or syllabus coverage. It is designed to
              identify each student’s current learning level, teach prerequisite concepts they have missed, and
              help them re-enter grade-level learning with greater confidence.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/80">
              Students are not grouped only by grade. Support is organised around demonstrated learning needs in
               number sense, operations, fractions, decimals, ratios, percentages, problem-solving, English reading
               and writing, graph interpretation and scientific reasoning.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="container-page grid gap-10 py-16 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Why foundations matter</p>
            <h2 className="mt-4 text-3xl md:text-4xl">The skills that make later learning possible</h2>
          </div>
          <div className="space-y-4 leading-relaxed text-foreground/80">
            <p>Reading, writing, mathematics and scientific reasoning help students understand later lessons, solve problems and keep learning as their studies become more demanding.</p>
            <p><SourceLink href={sources.worldBankFoundationalLearning}>World Bank evidence on foundational learning</SourceLink> distinguishes learning from simply spending time in school. Its wider research links stronger skills and additional schooling with future earnings, while cautioning that these broad findings are not a prediction of results from Northbridge.</p>
            <p>Northbridge aims to help students build academic skill and confidence so they have more ways to pursue meaningful work, earn with dignity and contribute to their communities. These are long-term aspirations. We will measure learning and student experience rather than promise that one programme will produce employment, income or civic outcomes.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/60">
        <div className="container-page py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl">What students learn</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {strands.map(([title, body]) => <Disclosure key={title ?? "strand"} title={title ?? "Learning area"}><p>{body}</p></Disclosure>)}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl">How Learning Labs works</h2>
        <div className="mt-9 grid gap-6 md:grid-cols-3">
          {[
            ["01", "Assess", "A short individual baseline identifies current strengths and prerequisite gaps."],
            ["02", "Group and teach", "Students learn in small groups organised around demonstrated competency, with discussion, practice and formative checks."],
            ["03", "Reassess and adapt", "Parallel tasks every 6–8 weeks show what is changing and when students should move between groups."],
          ].map(([number, title, body]) => (
            <article key={title} className="surface-card p-6"><span className="font-serif text-2xl text-accent">{number}</span><h3 className="mt-3 text-xl">{title}</h3><p className="mt-3 leading-relaxed text-foreground/80">{body}</p></article>
          ))}
        </div>
        <div className="mt-10 border-l-4 border-accent pl-6">
          <h3 className="text-xl">Initial operating hypothesis</h3>
          <p className="mt-3 max-w-4xl leading-relaxed text-foreground/80">
            A group size of 8–15 students per facilitator is an initial operating hypothesis, not a fixed claim or
            proven ideal ratio. Northbridge will review participation, feedback and learning progression as the
            model develops. Sessions are intended to run regularly across an academic term, with attendance,
            facilitator consistency and progression tracked over time.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="container-page py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl">Why teach at the level students have reached?</h2>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-foreground/80">
            Children often sit in the same grade but have very different learning needs. Evidence from India and
            other settings shows that teaching children at their current learning level can help them catch up.
            See <SourceLink href={sources.tarlSynthesis}>J-PAL’s evidence synthesis</SourceLink>, the{" "}
            <SourceLink href={sources.tarlCase}>implementation case study</SourceLink> and the{" "}
            <SourceLink href={sources.tarlEvaluation}>randomized-evaluation summary</SourceLink>.
          </p>
          <p className="mt-4 max-w-4xl leading-relaxed text-foreground/80">
            This evidence informs Northbridge’s design. It does not establish that Northbridge has achieved the same results.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl">How we will measure progress</h2>
        <div className="mt-9 overflow-x-auto rounded-lg border border-border bg-card">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead><tr className="border-b border-border bg-muted"><th className="p-4">Area</th><th className="p-4">What we will monitor</th></tr></thead>
            <tbody>
              {[
                ["Inputs", "Facilitator training, learning materials, session delivery and student attendance"],
                ["Outputs", "Students assessed, sessions delivered, regular participation, facilitators trained and observed"],
                ["Short-term outcomes", "Progress in identified prerequisite skills, participation and ability to solve targeted problems"],
                ["Programme learning", "Baseline assessment, periodic reassessment, attendance review and documented adaptations"],
              ].map(([area, detail]) => <tr key={area} className="border-b border-border last:border-0"><th scope="row" className="p-4 font-semibold text-primary-deep">{area}</th><td className="p-4 text-foreground/80">{detail}</td></tr>)}
            </tbody>
          </table>
        </div>
        <p className="mt-5 max-w-4xl text-sm leading-relaxed text-muted-foreground">Targets will not be published until they are approved. Northbridge intends to report what worked, what did not, and what it learns.</p>
      </section>

      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="container-page py-16 md:py-20">
          <h2 className="text-3xl text-primary-foreground">Evidence and limitations</h2>
          <p className="mt-5 max-w-4xl leading-relaxed text-primary-foreground/85">
            Northbridge’s initial design is informed by Delhi’s{" "}<SourceLink href={sources.parakhDelhi}>PARAKH Rashtriya Sarvekshan 2024 findings</SourceLink>{" "}
            and by rigorous evidence on level-based instruction. These sources inform our approach; they do not
            guarantee outcomes. We will assess and report our own results as the programme develops.
          </p>
          <Link to="/evidence-accountability" className="btn-accent mt-8 hover:btn-accent-hover">View sources and limitations</Link>
        </div>
      </section>
    </Layout>
  );
}