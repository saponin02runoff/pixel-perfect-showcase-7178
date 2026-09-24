import { Link } from "@tanstack/react-router";
import { Layout, PageHero } from "./Layout";
import { SourceLink, StatusLabel } from "./ProgrammeUI";
import { sources } from "@/lib/programme-content";
import olderStudents from "@/assets/older-students-classroom.webp";

type FutureProgramme = {
  eyebrow: string;
  title: string;
  objective: string;
  intro: string;
  activities: readonly string[];
  principles: readonly string[];
};

export function FutureProgrammePage({ programme, kind }: { programme: FutureProgramme; kind: "future" | "mentor" | "build" }) {
  return (
    <Layout>
      <PageHero eyebrow={programme.eyebrow} title={programme.title} intro={programme.objective} badge="Future plan" />

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <StatusLabel future>Future plan</StatusLabel>
            <h2 className="mt-5 text-3xl md:text-4xl">Designed as a later programme layer</h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-foreground/80">{programme.intro}</p>
            <p className="mt-4 leading-relaxed text-foreground/80">
              This programme is not currently operational. It will be introduced only when Northbridge has the
              right partnerships, systems, safeguarding capacity and evidence to deliver it responsibly.
            </p>
          </div>
        </div>
      </section>

      {kind === "future" && (
        <section className="border-y border-border bg-muted/60">
          <div className="container-page grid gap-10 py-16 md:py-20 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl">A structured path from exploration to next steps</h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground/80">{programme.intro}</p>
            </div>
            <img src={olderStudents} alt="Older students participating in a classroom session" loading="lazy" width={600} height={593} className="photo h-[320px] w-full sm:h-[380px]" />
          </div>
        </section>
      )}

      {kind === "build" && (
        <section className="border-y border-border bg-primary text-primary-foreground">
          <div className="container-page py-14">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-primary-foreground/75">Planned pathway</p>
            <p className="mt-4 font-serif text-2xl leading-relaxed text-primary-foreground md:text-3xl">
              Learning → Project → Portfolio → Feedback → Competition / Showcase → Opportunity
            </p>
            <p className="mt-4 max-w-3xl text-primary-foreground/85">
              This pathway is aspirational, not guaranteed. A portfolio can strengthen readiness and visibility,
              but it does not automatically lead to an internship, scholarship or job.
            </p>
          </div>
        </section>
      )}

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl">Possible activities</h2>
            <ul className="mt-6 space-y-3">
              {programme.activities.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-foreground/80">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl">Implementation principles</h2>
            <ul className="mt-6 space-y-3">
              {programme.principles.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-foreground/80">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="container-page py-16 md:py-20">
          <h2 className="text-3xl">Evidence informs the plan</h2>
          <p className="mt-5 max-w-4xl leading-relaxed text-foreground/80">
            {kind === "mentor" ? (
              <>
                Research in India suggests structured life-skills and mentoring programmes can support school
                continuation for adolescent girls. These findings are context-specific and do not mean every
                mentoring model improves academic achievement. See the{" "}
                <SourceLink href={sources.mentoringEvaluation}>J-PAL evaluation and limitations</SourceLink>.
              </>
            ) : (
              <>
                National education policy supports experiential learning, practical activity and engagement with
                local experts. This alignment does not by itself establish academic or labour-market outcomes. See{" "}
                <SourceLink href={sources.holisticEducation}>NEP holistic education material</SourceLink> and the{" "}
                <SourceLink href={sources.baglessDays}>Bagless Days guidance</SourceLink>.
              </>
            )}
          </p>
          <Link to="/evidence-accountability" className="btn-outline mt-8 hover:bg-background">
            Review evidence and limitations
          </Link>
        </div>
      </section>
    </Layout>
  );
}