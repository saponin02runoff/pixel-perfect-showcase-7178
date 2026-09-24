import { createFileRoute } from "@tanstack/react-router";
import { FutureProgrammePage } from "@/components/site/FutureProgrammePage";
import { futureProgrammes } from "@/lib/programme-content";

export const Route = createFileRoute("/build-labs")({
  staticData: { sitemap: true },
  head: () => ({ meta: [
    { title: "Northbridge Build Labs — Future Plan" },
    { name: "description", content: "A planned applied-learning programme helping students turn learning into meaningful projects and portfolios." },
    { property: "og:title", content: "Northbridge Build Labs — Future Plan" },
    { property: "og:description", content: "A planned pathway from learning to projects, feedback and demonstrated capability." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <FutureProgrammePage programme={futureProgrammes.build} kind="build" />,
});