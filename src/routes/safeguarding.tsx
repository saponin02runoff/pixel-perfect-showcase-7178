import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { SourceLink } from "@/components/site/ProgrammeUI";
import { sources } from "@/lib/programme-content";

export const Route = createFileRoute("/safeguarding")({
  staticData: { sitemap: true },
  head: () => ({ meta: [
    { title: "Safeguarding & Responsible Practice | Northbridge Foundation" },
    { name: "description", content: "Northbridge’s commitments for child protection, consent, supervision, reporting and responsible data practice before programme delivery begins." },
    { property: "og:title", content: "Safeguarding & Responsible Practice | Northbridge Foundation" },
    { property: "og:description", content: "The systems Northbridge is establishing before programme delivery begins." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Safeguarding,
});

function Safeguarding() {
  const commitments = ["A child-protection policy and code of conduct", "Training for volunteers and staff before contact with students", "Guardian consent and student assent", "Clear rules for communication and supervision", "A designated safeguarding lead", "Reporting and referral processes", "Responsible data handling and privacy practices", "Compliance with applicable child-protection law"];
  return <Layout>
    <PageHero eyebrow="Safeguarding" title="Responsible practice comes before programme delivery." intro="Northbridge is establishing the systems needed to work with students safely, respectfully and accountably before programme delivery begins." />
    <section className="container-page py-16 md:py-20"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"><div><h2 className="text-3xl md:text-4xl">Systems we intend to maintain</h2><p className="mt-5 leading-relaxed text-foreground/80">These are commitments under development, not claims that every policy, role or process is already in place.</p></div><ul className="grid gap-4 sm:grid-cols-2">{commitments.map((item) => <li key={item} className="surface-card flex gap-3 p-5"><span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" /><span className="leading-relaxed">{item}</span></li>)}</ul></div></section>
    <section className="border-y border-border bg-muted/60"><div className="container-page py-16 md:py-20"><h2 className="text-3xl">Before volunteers or mentors work with students</h2><p className="mt-5 max-w-4xl leading-relaxed text-foreground/80">Northbridge will define recruitment, training, supervision, consent, communication, incident reporting and referral procedures. Mentoring will not be treated as therapy or crisis counselling, and private or unlogged inappropriate communication will not be permitted.</p></div></section>
    <section className="container-page py-16 md:py-20"><h2 className="text-3xl">Legal context</h2><p className="mt-5 max-w-4xl leading-relaxed text-foreground/80">Programme policies will need to reflect applicable child-protection and reporting obligations, including the <SourceLink href={sources.pocso}>Protection of Children from Sexual Offences Act, 2012</SourceLink>. Formal policy and legal review remain required before delivery.</p></section>
  </Layout>;
}