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
    { title: "Northbridge Foundation | Stronger Foundations. Wider Futures." },
    { name: "description", content: "Northbridge is building structured learning, mentoring and opportunity pathways for students in Delhi, beginning with foundational mathematics and scientific thinking." },
    { property: "og:title", content: "Northbridge Foundation | Stronger Foundations. Wider Futures." },
    { property: "og:description", content: "Structured learning and opportunity pathways for students in Delhi, beginning with foundational mathematics and scientific thinking." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return <Layout>
    <section className="bg-secondary"><div className="container-page grid items-center gap-12 py-16 md:py-20 lg:grid-cols-2 lg:gap-16">
      <div className="reveal"><p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Education pathways for students in Delhi</p><h1 className="mt-5 text-4xl leading-[1.06] sm:text-5xl xl:text-6xl">Stronger foundations. Wider futures.</h1><p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">Northbridge is building structured learning, mentoring and opportunity pathways for students in Delhi, beginning with foundational mathematics and scientific thinking.</p><div className="mt-8 flex flex-wrap gap-3"><Link to="/our-work" className="btn-accent hover:btn-accent-hover">Explore Our Work</Link><Link to="/get-involved" hash="partner" className="btn-outline hover:bg-background">Partner With Us</Link></div></div>
      <img src={heroImage} alt="Students taking part in an interactive classroom lesson" width={1800} height={1200} className="photo h-[320px] w-full shadow-sm sm:h-[420px] lg:h-[520px]" />
    </div></section>

    <section className="border-b border-border bg-background"><div className="container-page py-10 md:py-12"><div className="grid gap-5 border-l-4 border-accent pl-6 md:grid-cols-[1fr_auto] md:items-center md:gap-12 md:pl-8"><div><p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Supported by established expertise</p><h2 className="mt-3 text-2xl md:text-3xl">An initiative of <ConsultingLink /></h2><p className="mt-3 max-w-3xl leading-relaxed text-foreground/80">Northbridge Consulting helps university students build stronger applications, prepare for interviews, and approach internships and full-time opportunities in the United States with clarity.</p></div><a href="https://northbridgeconsulting.org/" target="_blank" rel="noreferrer noopener" className="btn-outline w-fit hover:bg-secondary">Learn more about Northbridge Consulting →</a></div></div></section>

    <section className="container-page py-16 md:py-20"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"><div><p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">The case for action</p><h2 className="mt-4 text-3xl md:text-4xl">Understand the need. Start with each student.</h2><p className="mt-5 leading-relaxed text-foreground/80">System-level evidence points to persistent gaps in mathematics. Northbridge will begin by identifying the skills each student needs and supporting them to build from there.</p><Link to="/evidence-accountability" className="mt-6 inline-block font-medium text-primary underline underline-offset-4">View sources and limitations</Link></div><div className="grid gap-5 sm:grid-cols-3">{[["26%", "Grade 6 items on representing and comparing common fractions"], ["34%", "Grade 6 items applying fractions, ratios and decimals in daily life"], ["40%", "Delhi Grade 9 mathematics average, compared with 37% nationally"]].map(([figure, label]) => <article key={figure} className="surface-card p-6"><p className="font-serif text-4xl text-primary-deep">{figure}</p><p className="mt-3 text-sm leading-relaxed text-foreground/80">{label}</p></article>)}</div></div><p className="mt-7 max-w-4xl text-sm leading-relaxed text-muted-foreground">Source: <SourceLink href={sources.parakhDelhi}>PARAKH Rashtriya Sarvekshan 2024: UT Report — Delhi</SourceLink>. These are broad assessment findings, not a description of every child, school or area of Delhi.</p></section>

    <section className="border-y border-border bg-muted/60"><div className="container-page py-16 md:py-20"><h2 className="text-3xl md:text-4xl">Our approach</h2><div className="mt-9 grid gap-6 md:grid-cols-3">{[["01", "Assess", "Understand each student’s current learning level."], ["02", "Teach", "Provide small-group support targeted to demonstrated learning needs."], ["03", "Track progress", "Use regular assessment and attendance data to improve the programme."]].map(([number, title, body]) => <article key={title} className="surface-card p-6"><span className="font-serif text-2xl text-accent">{number}</span><h3 className="mt-3 text-xl">{title}</h3><p className="mt-3 leading-relaxed text-foreground/80">{body}</p></article>)}</div><Link to="/learning-labs" className="btn-primary mt-9 hover:opacity-90">How Learning Labs works</Link></div></section>

    <section className="container-page py-16 md:py-20"><h2 className="text-3xl md:text-4xl">Our programme pathway</h2><p className="mt-4 max-w-3xl text-foreground/80">Learning Labs is the current core programme. Future programmes are clearly marked and will follow only when Northbridge is ready to deliver them responsibly.</p><div className="mt-9"><ProgrammePathway /></div></section>

    <section className="bg-primary text-primary-foreground"><div className="container-page grid gap-12 py-16 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-16"><div><h2 className="text-3xl text-primary-foreground md:text-4xl">Our commitment</h2><ul className="mt-6 grid gap-3 text-primary-foreground/85">{["Evidence-informed design", "Student-centred learning", "Safeguarding and responsible practice", "Measurable progress", "Continuous learning and improvement"].map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />{item}</li>)}</ul><Link to="/evidence-accountability" className="btn-accent mt-8 hover:btn-accent-hover">Evidence & Accountability</Link></div><img src={engagedStudents} alt="Students engaged in a classroom learning activity" loading="lazy" width={1408} height={1008} className="photo h-[280px] w-full sm:h-[350px]" /></div></section>

    <section className="container-page py-16 md:py-20"><h2 className="text-3xl md:text-4xl">Get involved</h2><div className="mt-9 grid gap-6 md:grid-cols-3">{([
      ["Schools and community partners", "Work with Northbridge to strengthen—not duplicate—support for students.", "Start a conversation", "partner"],
      ["Volunteers and mentors", "Register interest for future roles once training, safeguarding and supervision systems are ready.", "Register your interest", "volunteer"],
      ["Supporters and funders", "Help build and test a careful, evidence-informed model for students in Delhi.", "Connect with Northbridge", "support"],
    ] as const).map(([title, body, label, hash]) => <article key={title} className="surface-card flex flex-col p-7"><h3 className="text-xl">{title}</h3><p className="mt-3 flex-1 leading-relaxed text-foreground/80">{body}</p><Link to="/get-involved" hash={hash} className="mt-6 text-sm font-medium text-primary underline underline-offset-4">{label} →</Link></article>)}</div></section>
  </Layout>;
}