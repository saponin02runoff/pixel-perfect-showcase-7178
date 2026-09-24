import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/privacy")({
  staticData: { sitemap: true },
  head: () => ({ meta: [
    { title: "Privacy | Northbridge Foundation" },
    { name: "description", content: "How Northbridge Foundation intends to handle personal information responsibly." },
    { property: "og:title", content: "Privacy | Northbridge Foundation" },
    { property: "og:description", content: "Northbridge Foundation privacy information." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Privacy,
});

function Privacy() { return <Layout><PageHero eyebrow="Privacy" title="Responsible handling of personal information" intro="Northbridge is developing formal privacy and data-handling practices appropriate to its programmes and communications." /><section className="container-page py-16 md:py-20"><div className="max-w-3xl space-y-8"><div><h2 className="text-2xl">Current website contact information</h2><p className="mt-4 leading-relaxed text-foreground/80">The contact form currently provides an on-screen confirmation only. A formal data collection and retention process must be approved before enquiries or programme data are stored through this website.</p></div><div><h2 className="text-2xl">Before programme delivery</h2><p className="mt-4 leading-relaxed text-foreground/80">Northbridge will need approved practices covering consent, access, storage, retention, sharing, security and deletion—especially for information relating to children.</p></div></div></section></Layout>; }