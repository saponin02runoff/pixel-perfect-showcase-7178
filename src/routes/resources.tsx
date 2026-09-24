import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/resources")({
  staticData: { sitemap: true },
  head: () => ({ meta: [
    { title: "Updates & Resources | Northbridge Foundation" },
    { name: "description", content: "Northbridge Foundation programme resources, evidence and future implementation updates." },
    { property: "og:title", content: "Updates & Resources | Northbridge Foundation" },
    { property: "og:description", content: "Programme resources, evidence and future implementation updates." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Resources,
});

function Resources() { return <Layout><PageHero eyebrow="Updates & Resources" title="Clear information as the work develops." intro="Programme documentation, evidence sources and implementation learning will be shared here as they become available." /><section className="container-page py-16 md:py-20"><div className="grid gap-6 md:grid-cols-2"><article className="surface-card p-7"><p className="text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">Available now</p><h2 className="mt-3 text-2xl">Evidence and source library</h2><p className="mt-4 leading-relaxed text-foreground/80">Review the research, policy guidance, limitations and monitoring framework informing Northbridge’s programme strategy.</p><Link to="/evidence-accountability" className="btn-outline mt-7 hover:bg-secondary">Open evidence library</Link></article><article className="surface-card p-7"><p className="text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">To be published</p><h2 className="mt-3 text-2xl">Programme updates</h2><p className="mt-4 leading-relaxed text-foreground/80">Northbridge intends to publish key implementation updates, results and learning as programmes develop. No programme results are available yet.</p></article></div></section></Layout>; }