import { createFileRoute } from "@tanstack/react-router";
import { FutureProgrammePage } from "@/components/site/FutureProgrammePage";
import { futureProgrammes } from "@/lib/programme-content";

export const Route = createFileRoute("/future-labs")({
  staticData: { sitemap: true },
  head: () => ({ meta: [
    { title: "Northbridge Future Labs — Future Plan" },
    { name: "description", content: "A planned programme for structured career, education and role-model exposure for students." },
    { property: "og:title", content: "Northbridge Future Labs — Future Plan" },
    { property: "og:description", content: "A structured future pathway for exploration, reflection and next-step planning." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <FutureProgrammePage programme={futureProgrammes.future} kind="future" />,
});