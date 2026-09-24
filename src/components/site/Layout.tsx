import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  badge,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  badge?: string;
}) {
  return (
    <section className="bg-secondary">
      <div className="container-page py-16 md:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">{eyebrow}</p>
        {badge && (
          <span className="mt-4 inline-flex rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-foreground">
            {badge}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.1] md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-foreground/80">{intro}</p>
      </div>
    </section>
  );
}
