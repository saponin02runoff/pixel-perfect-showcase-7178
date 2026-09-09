import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "./Logo";

const nav = [
  { to: "/about", label: "About Us" },
  { to: "/approach", label: "Our Approach" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [barVisible, setBarVisible] = useState(true);

  return (
    <header className="sticky top-0 z-50">
      {barVisible && (
        <div className="bg-primary-deep text-primary-foreground">
          <div className="container-page flex items-center justify-between gap-4 py-2">
            <p className="text-[0.8rem] leading-snug">
              Northbridge Foundation works to make good education easier to reach across India.{" "}
              <Link to="/about" className="underline underline-offset-4">
                Learn more →
              </Link>
            </p>
            <button
              onClick={() => setBarVisible(false)}
              aria-label="Dismiss announcement"
              className="shrink-0 rounded p-1 text-sm opacity-75 transition-opacity hover:opacity-100"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-foreground/80 transition-colors hover:text-primary [&.active]:text-primary [&.active]:font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link to="/get-involved" className="btn-accent hover:btn-accent-hover">
              Get Involved
            </Link>
          </div>

          <button
            className="rounded-md border border-border p-2 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="mt-1 block h-0.5 w-5 bg-foreground" />
            <span className="mt-1 block h-0.5 w-5 bg-foreground" />
          </button>
        </div>

        {open && (
          <div className="border-t border-border bg-background lg:hidden">
            <div className="container-page flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2.5 text-sm text-foreground/85 hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/get-involved"
                onClick={() => setOpen(false)}
                className="btn-accent mt-2 hover:btn-accent-hover"
              >
                Get Involved
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
