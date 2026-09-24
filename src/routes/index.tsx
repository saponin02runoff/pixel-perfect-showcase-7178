import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ConsultingLink } from "@/components/site/ConsultingLink";
import { ProgrammePathway, SourceLink } from "@/components/site/ProgrammeUI";
import { sources } from "@/lib/programme-content";
import heroImage from "@/assets/classroom-learning.webp";
import engagedStudents from "@/assets/engaged-students.webp";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({ meta: [
    { title: "Northbridge Foundation | Stronger Foundations. Brighter Futures." },
    { name: "description", content: "Northbridge is building structured learning, mentoring and opportunity pathways for students in Delhi." },
    { property: "og:title", content: "Northbridge Foundation | Stronger Foundations. Brighter Futures." },
    { property: "og:description", content: "Structured learning, mentoring and opportunity pathways for students in Delhi." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return <Layout>
    <section className="bg-secondary"><div className="container-page grid items-center gap-12 py-16 md:py-20 lg:grid-cols-2 lg:gap-16">
      <div className="reveal"><p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Better education. A stronger nation.</p><h1 className="mt-5 text-4xl leading-[1.06] sm:text-5xl xl:text-6xl">Stronger foundations. Brighter futures.</h1><p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">Northbridge is building structured learning, mentoring and opportunity pathways for students in Delhi.</p><div className="mt-8 flex flex-wrap gap-3"><Link to="/our-work" className="btn-accent hover:btn-accent-hover">Explore Our Work</Link><Link to="/get-involved" hash="partner" className="btn-outline hover:bg-background">Partner With Us</Link></div></div>
      <img src={heroImage} alt="Students taking part in an interactive classroom lesson" width={1800} height={1200} className="photo h-[320px] w-full shadow-sm sm:h-[420px] lg:h-[520px]" />
    </div></section>

    <section className="border-b border-border bg-background"><div className="container-page py-10 md:py-12"><div className="grid gap-5 border-l-4 border-accent pl-6 md:grid-cols-[1fr_auto] md:items-center md:gap-12 md:pl-8"><div><p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Supported by established expertise</p><h2 className="mt-3 text-2xl md:text-3xl">An initiative of <ConsultingLink /></h2><p className="mt-3 max-w-3xl leading-relaxed text-foreground/80">Northbridge Consulting is a career development consulting firm serving students across 40+ universities in the United States.</p></div><a href="https://northbridgeconsulting.org/" target="_blank" rel="noreferrer noopener" className="btn-outline w-fit hover:bg-secondary">Learn more about Northbridge Consulting →</a></div></div></section>

    <section className="container-page py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Why Learning Labs comes first</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Strong foundations open the door to everything that follows.</h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/80">When students move forward without secure foundations, later lessons become harder to understand. Gaps in reading, mathematics and scientific reasoning can compound as schoolwork becomes more demanding.</p>
          <p className="mt-4 leading-relaxed text-foreground/80">Learning Labs is the first programme Northbridge is preparing to launch because these skills support further study, everyday problem-solving and the ability to keep learning throughout life.</p>
        </div>
        <div className="border-l-4 border-accent pl-6 md:pl-8">
          <h3 className="text-2xl md:text-3xl">The evidence points to a clear starting point</h3>
          <p className="mt-4 leading-relaxed text-foreground/80">Delhi’s 2024 PARAKH results show important competency gaps as students move into higher grades. They are system-level findings—not a judgement about every child or school—but they show why direct assessment and targeted support matter.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/learning-labs" className="btn-primary hover:opacity-90">Explore Learning Labs</Link>
            <Link to="/evidence-accountability" className="btn-outline hover:bg-secondary">View all evidence and limitations</Link>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {([
          ["26%", "Mathematics", "Grade 6 items on representing and comparing commonly used fractions", sources.parakhDelhi],
          ["34%", "Mathematics", "Grade 6 items applying fractions, ratios and decimals in daily life", sources.parakhDelhi],
          ["59%", "Reading and language", "Grade 6 items applying comprehension strategies, including inference and prediction", sources.parakhDelhi],
          ["46%", "Science", "Delhi’s average correct response rate in the Grade 9 science assessment", sources.parakhDelhiGrade9],
        ] as const).map(([figure, area, label, href]) => <article key={`${area}-${figure}`} className="surface-card flex flex-col p-6"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{area}</p><p className="mt-3 font-serif text-4xl text-primary-deep">{figure}</p><p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">{label}</p><SourceLink href={href}>View source</SourceLink></article>)}
      </div>
      <p className="mt-6 max-w-5xl text-sm leading-relaxed text-muted-foreground">PARAKH language results were drawn from assessments administered in English, Hindi and Urdu; they are not English-only results. Northbridge will assess students directly before deciding what support they need.</p>
    </section>

    <section className="border-y border-border bg-secondary">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:gap-16">
          <div><p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">From learning to possibility</p><h2 className="mt-4 text-3xl md:text-4xl">Why fixing the foundation matters</h2><p className="mt-5 leading-relaxed text-foreground/80">Reading, writing, mathematics and scientific reasoning help students understand later lessons, solve problems and make informed decisions. Stronger skills can widen future choices—but no single programme can guarantee grades, employment, income or civic impact.</p></div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              ["Learn", "Build the prerequisite skills needed to engage with more demanding lessons."],
              ["Grow", "Develop confidence through progress that students can see and explain."],
              ["Contribute", "Prepare for further study, dignified work and meaningful participation in community life."],
            ].map(([title, body]) => <article key={title}><h3 className="text-xl">{title}</h3><p className="mt-3 leading-relaxed text-foreground/80">{body}</p></article>)}
          </div>
        </div>
        <p className="mt-10 max-w-5xl text-sm leading-relaxed text-muted-foreground">This long-term case is informed by <SourceLink href={sources.worldBankFoundationalLearning}>World Bank evidence on foundational learning</SourceLink>, the <SourceLink href={sources.worldDevelopmentReport}>World Development Report 2018</SourceLink> and <SourceLink href={sources.oecdConfidence}>OECD research on confidence and learning</SourceLink>. These sources inform Northbridge’s direction; they do not prove Northbridge outcomes.</p>
      </div>
    </section>

    <section className="border-b border-border bg-muted/60"><div className="container-page py-16 md:py-20"><h2 className="text-3xl md:text-4xl">Start with what each student knows</h2><p className="mt-4 max-w-3xl leading-relaxed text-foreground/80">Students in the same grade can have very different learning needs. Learning Labs will use a simple cycle to make support specific, measurable and adaptable.</p><div className="mt-9 grid gap-6 md:grid-cols-3">{[["01", "Assess", "Understand each student’s current learning level."], ["02", "Teach", "Provide small-group support targeted to demonstrated learning needs."], ["03", "Track progress", "Use regular assessment and attendance data to improve the programme."]].map(([number, title, body]) => <article key={title} className="surface-card p-6"><span className="font-serif text-2xl text-accent">{number}</span><h3 className="mt-3 text-xl">{title}</h3><p className="mt-3 leading-relaxed text-foreground/80">{body}</p></article>)}</div><Link to="/learning-labs" className="btn-primary mt-9 hover:opacity-90">How Learning Labs works</Link></div></section>

    <section className="container-page py-16 md:py-20"><h2 className="text-3xl md:text-4xl">Our programme pathway</h2><p className="mt-4 max-w-3xl text-foreground/80">Learning Labs is the current core programme. Future programmes are clearly marked and will follow only when Northbridge is ready to deliver them responsibly.</p><div className="mt-9"><ProgrammePathway /></div></section>

    <section className="bg-primary text-primary-foreground"><div className="container-page grid gap-12 py-16 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-16"><div><h2 className="text-3xl text-primary-foreground md:text-4xl">Our commitment</h2><ul className="mt-6 grid gap-3 text-primary-foreground/85">{["Evidence-informed design", "Student-centred learning", "Safeguarding and responsible practice", "Measurable progress", "Continuous learning and improvement"].map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />{item}</li>)}</ul><Link to="/evidence-accountability" className="btn-accent mt-8 hover:btn-accent-hover">Evidence & Accountability</Link></div><img src={engagedStudents} alt="Students engaged in a classroom learning activity" loading="lazy" width={1408} height={1008} className="photo h-[280px] w-full sm:h-[350px]" /></div></section>

    <section className="container-page py-16 md:py-20"><h2 className="text-3xl md:text-4xl">Get involved</h2><div className="mt-9 grid gap-6 md:grid-cols-3">{([
      ["Schools and community partners", "Work with Northbridge to strengthen—not duplicate—support for students.", "Start a conversation", "partner"],
      ["Volunteers and mentors", "Register interest for future roles once training, safeguarding and supervision systems are ready.", "Register your interest", "volunteer"],
      ["Supporters and funders", "Help build and test a careful, evidence-informed model for students in Delhi.", "Connect with Northbridge", "support"],
    ] as const).map(([title, body, label, hash]) => <article key={title} className="surface-card flex flex-col p-7"><h3 className="text-xl">{title}</h3><p className="mt-3 flex-1 leading-relaxed text-foreground/80">{body}</p><Link to="/get-involved" hash={hash} className="mt-6 text-sm font-medium text-primary underline underline-offset-4">{label} →</Link></article>)}</div></section>
  </Layout>;
}