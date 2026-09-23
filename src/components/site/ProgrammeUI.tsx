import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function StatusLabel({ children, future = false }: { children: ReactNode; future?: boolean }) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${
        future ? "border-border bg-muted text-foreground" : "border-primary/25 bg-primary/10 text-primary-deep"
      }`}
    >
      {children}
    </span>
  );
}

export function SourceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="font-medium text-primary underline decoration-primary/35 underline-offset-4 hover:decoration-primary"
    >
      {children}
    </a>
  );
}

export function ProgrammePathway({ compact = false }: { compact?: boolean }) {
  const programmes = [
    { name: "Learning Labs", status: "Current core programme", to: "/learning-labs" as const },
    { name: "Future Labs", status: "Future plan", to: "/future-labs" as const },
    { name: "Mentor Network", status: "Future plan", to: "/mentor-network" as const },
    { name: "Build Labs", status: "Future plan", to: "/build-labs" as const },
  ];

  return (
    <ol className={`grid gap-4 ${compact ? "md:grid-cols-4" : "md:grid-cols-2 xl:grid-cols-4"}`}>
      {programmes.map((programme, index) => (
        <li key={programme.name} className="surface-card flex min-h-40 flex-col p-5">
          <span className="font-serif text-2xl text-accent">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="mt-3 text-lg">Northbridge {programme.name}</h3>
          <p className="mt-2 text-sm font-medium text-muted-foreground">{programme.status}</p>
          <Link to={programme.to} className="mt-auto pt-5 text-sm font-medium text-primary underline underline-offset-4">
            Explore {programme.name}
          </Link>
        </li>
      ))}
    </ol>
  );
}

export function Disclosure({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="surface-card group p-5">
      <summary className="cursor-pointer list-none font-semibold text-primary-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
        <span className="flex items-center justify-between gap-4">
          {title}
          <span aria-hidden="true" className="text-xl text-primary transition-transform group-open:rotate-45">
            +
          </span>
        </span>
      </summary>
      <div className="mt-4 border-t border-border pt-4 leading-relaxed text-foreground/80">{children}</div>
    </details>
  );
}