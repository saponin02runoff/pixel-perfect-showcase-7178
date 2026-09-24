import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Disclosure, SourceLink } from "@/components/site/ProgrammeUI";
import { sources } from "@/lib/programme-content";

export const Route = createFileRoute("/evidence-accountability")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Evidence & Accountability | Northbridge Foundation" },
      { name: "description", content: "The evidence informing Northbridge’s programme strategy, its limitations, and how progress will be monitored and reported." },
      { property: "og:title", content: "Evidence & Accountability | Northbridge Foundation" },
      { property: "og:description", content: "What informs our work, what we will measure, and what Northbridge must earn through implementation." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Report", name: "Evidence, accountability and learning", publisher: { "@type": "NGO", name: "Northbridge Foundation" }, url: "https://pixel-perfect-showcase-7178.lovable.app/evidence-accountability" }) }],
  }),
  component: Evidence,
});

const sourceLibrary = [
  ["PARAKH Rashtriya Sarvekshan 2024: UT Report — Delhi", "NCERT / PARAKH", "2024", "Delhi-specific system-level learning context, including Grade 6 fraction and Grade 9 mathematics findings.", sources.parakhDelhi],
  ["PARAKH Rashtriya Sarvekshan 2024: Delhi Grade 9 report", "NCERT / PARAKH", "2024", "Delhi Grade 9 mathematics and science findings.", sources.parakhDelhiGrade9],
  ["PARAKH Rashtriya Sarvekshan 2024", "NCERT / PARAKH", "2024", "National context on persistent learning gaps in mathematics and science.", sources.parakhNational],
  ["Teaching at the Right Level to accelerate learning", "J-PAL", "", "Evidence synthesis supporting level-based foundational learning.", sources.tarlSynthesis],
  ["Teaching at the Right Level to improve learning", "J-PAL", "", "Implementation insight, including the importance of support beyond materials or basic training.", sources.tarlCase],
  ["Tailoring instruction to students’ learning levels to increase learning", "J-PAL", "", "Randomized-evaluation evidence relevant to level-based instruction.", sources.tarlEvaluation],
  ["Boosting Adolescent Girls’ Agency Through Life Skills Training", "J-PAL", "", "Evidence informing the future mentoring and life-skills model.", sources.lifeSkillsBrief],
  ["Designing and Implementing Evidence-Based Life-Skills Training Programmes and Girls’ Clubs", "J-PAL", "", "Design and implementation considerations for structured mentoring and life-skills programming.", sources.lifeSkillsDesign],
  ["Providing Life Skills Training and Mentoring To Reduce School Dropout Among Girls in India", "J-PAL", "", "Important limitations, including no improvement in test scores or attendance among students already enrolled.", sources.mentoringEvaluation],
  ["Guidelines for 10 Bagless Days for Students of Class 6 to 8", "Ministry of Education, Government of India", "", "Policy support for experiential learning, local-expert engagement and practical exposure.", sources.baglessDays],
  ["Holistic Education / NEP 2020 implementation material", "Ministry of Education, Government of India", "2020", "Policy alignment for experiential, inquiry-based and practical learning.", sources.holisticEducation],
  ["Protection of Children from Sexual Offences Act, 2012", "India Code", "2012", "Child-protection and reporting obligations relevant to work with children.", sources.pocso],
  ["Vidyanjali", "Ministry of Education, Government of India", "", "Potential route for school volunteer engagement and partnerships.", sources.vidyanjali],
  ["Foundational Learning", "World Bank", "2025", "Context on why actual learning and foundational skills matter beyond years spent in school.", sources.worldBankFoundationalLearning],
  ["World Development Report 2018: Learning to Realize Education’s Promise", "World Bank", "2018", "Evidence on learning, productivity, civic participation and the limits of schooling without learning.", sources.worldDevelopmentReport],
  ["PISA 2022 Results, Volume V", "OECD", "2024", "Research on confidence, willingness to tackle challenges and deeper learning strategies.", sources.oecdConfidence],
] as const;

function Evidence() {
  return (
    <Layout>
      <PageHero eyebrow="Evidence & Accountability" title="Evidence, accountability and learning" intro="We distinguish between evidence that informs our programme design, data that helps us understand local needs, and results that Northbridge must earn through transparent implementation and evaluation." />

      <section className="container-page py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl">What informs our strategy</h2>
        <div className="mt-8 grid gap-4">
          <Disclosure title="Delhi learning context">
            <p>In the <SourceLink href={sources.parakhDelhi}>Delhi PARAKH Rashtriya Sarvekshan 2024 report</SourceLink>, 26% of Grade 6 students correctly answered items on representing and comparing commonly used fractions, while 34% correctly answered items applying fractions, ratios and decimals in daily-life situations. Delhi’s Grade 9 mathematics average was 40% correct, compared with a national average of 37%.</p>
            <p className="mt-3">The same reporting shows needs beyond mathematics. At Grade 6, students answered 59% of items on applying comprehension strategies and 61% on understanding main ideas and drawing conclusions correctly. At Grade 9, the figure for identifying main points and summarising heard or read material was 65%. These are language results from assessments administered in English, Hindi and Urdu—not English-only results.</p>
            <p className="mt-3">In science, Delhi’s Grade 9 average was 46% correct. Results included 34% for classifying matter, 36% for explaining simple electrical circuits and electricity’s effects, and 35% for distinguishing living from non-living things. At Grade 6, 38% correctly answered items on asking questions and making predictions about patterns in their environment.</p>
            <p className="mt-3"><strong>Limitation:</strong> these are broad system-level findings. They do not identify the needs of every child or school. Northbridge will conduct local baseline assessments before designing groups and instruction.</p>
          </Disclosure>
          <Disclosure title="Foundational learning approach">
            <p><SourceLink href={sources.tarlSynthesis}>J-PAL’s Teaching at the Right Level synthesis</SourceLink> reports learning gains across multiple studies. Its <SourceLink href={sources.tarlCase}>implementation case study</SourceLink> also shows that effective delivery requires implementation support, tracking and adaptation—not materials or basic training alone.</p>
          </Disclosure>
          <Disclosure title="Mentoring and life skills">
            <p><SourceLink href={sources.mentoringEvaluation}>J-PAL evidence from India</SourceLink> suggests a structured life-skills and mentoring programme reduced dropout among adolescent girls. The evidence is context-specific and is not proof that every mentoring model works or that it raises test scores.</p>
          </Disclosure>
          <Disclosure title="Experiential learning and exposure">
            <p><SourceLink href={sources.holisticEducation}>NEP holistic education material</SourceLink> and <SourceLink href={sources.baglessDays}>Bagless Days guidance</SourceLink> support experiential learning and exposure. Policy alignment does not by itself prove long-term education or labour-market outcomes.</p>
          </Disclosure>
          <Disclosure title="Why stronger foundations matter over time">
            <p><SourceLink href={sources.worldBankFoundationalLearning}>World Bank material on foundational learning</SourceLink> distinguishes actual learning from years spent in school. The <SourceLink href={sources.worldDevelopmentReport}>World Development Report 2018</SourceLink> connects education and learning with productivity, civic participation and the capacity to evaluate public decisions, while making clear that these benefits are not automatic.</p>
            <p className="mt-3"><SourceLink href={sources.oecdConfidence}>OECD research</SourceLink> connects students’ confidence in their abilities with willingness to tackle challenges and use deeper learning strategies. Northbridge can aim to strengthen confidence alongside academic skills, but must measure both rather than promise that tutoring alone will produce employment, income or civic impact.</p>
          </Disclosure>
        </div>
      </section>

      <section className="border-y border-border bg-muted/60">
        <div className="container-page py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl">How we will measure progress</h2>
          <div className="mt-8 overflow-x-auto rounded-lg border border-border bg-card">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <thead><tr className="border-b border-border bg-secondary"><th className="p-4">Area</th><th className="p-4">How Northbridge will monitor it</th></tr></thead>
              <tbody>{[
                ["Learning", "Baseline assessment, periodic reassessment and skill progression"],
                ["Participation", "Attendance, consistency of sessions and retention"],
                ["Delivery quality", "Facilitator training, observation and implementation review"],
                ["Student experience", "Student, parent or guardian, and school or community partner feedback"],
                ["Programme improvement", "Documentation of adaptations, challenges, lessons and next decisions"],
                ["Safeguarding", "Training, reporting procedures, incident review and continuous improvement"],
              ].map(([area, detail]) => <tr key={area} className="border-b border-border last:border-0"><th scope="row" className="p-4 font-semibold text-primary-deep">{area}</th><td className="p-4 text-foreground/80">{detail}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div><h2 className="text-3xl">What we will publish</h2><ul className="mt-6 space-y-3 text-foreground/80">{["Programme model and intended outcomes", "Sources that inform our work", "Key implementation updates", "Results and learning as programmes develop", "Safeguarding commitments", "Governance and financial documentation when available and appropriate"].map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />{item}</li>)}</ul></div>
          <div className="border-l-4 border-primary pl-6"><h2 className="text-3xl">What evidence cannot do</h2><p className="mt-5 leading-relaxed text-foreground/80">External research helps Northbridge make better design decisions. It cannot establish local need without assessment, guarantee implementation quality, or stand in for results from Northbridge programmes.</p></div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary">
        <div className="container-page py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl">Source library</h2>
          <p className="mt-4 max-w-3xl text-foreground/80">Every source below is public and clickable. Long addresses wrap on smaller screens.</p>
          <div className="mt-8 grid gap-5">
            {sourceLibrary.map(([title, publisher, year, use, url]) => (
              <article key={title} className="surface-card p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">{publisher}{year ? ` · ${year}` : ""}</p>
                <h3 className="mt-2 text-xl">{title}</h3>
                <p className="mt-3 leading-relaxed text-foreground/80"><strong>Why we use it:</strong> {use}</p>
                <a href={url} target="_blank" rel="noreferrer noopener" className="mt-4 block break-all text-sm font-medium text-primary underline underline-offset-4">{url}</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}