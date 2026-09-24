import { createFileRoute } from "@tanstack/react-router";
import { FutureProgrammePage } from "@/components/site/FutureProgrammePage";
import { futureProgrammes } from "@/lib/programme-content";

export const Route = createFileRoute("/mentor-network")({
  staticData: { sitemap: true },
  head: () => ({ meta: [
    { title: "Northbridge Mentor Network — Future Plan" },
    { name: "description", content: "A planned structured, safeguarded mentoring model for a defined group of students." },
    { property: "og:title", content: "Northbridge Mentor Network — Future Plan" },
    { property: "og:description", content: "Sustained guidance designed around clear boundaries, supervision and student safety." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <FutureProgrammePage programme={futureProgrammes.mentor} kind="mentor" />,
});