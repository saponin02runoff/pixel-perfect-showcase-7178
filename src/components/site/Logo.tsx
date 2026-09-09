import { Link } from "@tanstack/react-router";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "light" ? "text-primary-foreground" : "text-primary-deep";
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${color}`} aria-label="Northbridge Foundation home">
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M3 22c5.5-9 20.5-9 26 0"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path d="M8 22v6M16 17.6V28M24 22v6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="16" cy="7" r="3" fill="currentColor" />
      </svg>
      <span className="font-serif text-lg font-semibold leading-none tracking-tight sm:text-xl">
        Northbridge <span className="font-normal">Foundation</span>
      </span>
    </Link>
  );
}
