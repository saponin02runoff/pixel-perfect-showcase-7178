import { Link } from "@tanstack/react-router";
import { ConsultingLink } from "./ConsultingLink";
import { Logo } from "./Logo";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=30+N+Gould+St+Ste+N%2C+Sheridan%2C+WY+82801";

function MapPin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 shrink-0">
      <path
        d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 bg-primary-deep text-primary-foreground">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm text-primary-foreground/75">
              Education Without Borders. Working across India since 2026.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">About</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
              <li>
                <Link to="/about" className="link-quiet hover:border-current">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/about" hash="mission" className="link-quiet hover:border-current">
                  Mission and Vision
                </Link>
              </li>
              <li>
                <Link to="/approach" className="link-quiet hover:border-current">
                  Our Approach
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">
              Get Involved
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
              <li>
                <Link to="/get-involved" hash="volunteer" className="link-quiet hover:border-current">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link to="/get-involved" hash="partner" className="link-quiet hover:border-current">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link-quiet hover:border-current">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground">Connect</h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li>
                <a href="tel:+16467389271" className="link-quiet hover:border-current">
                  (646) 738-9271
                </a>
              </li>
              <li className="flex gap-2">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Open our address in Google Maps"
                  className="flex gap-2 hover:text-primary-foreground"
                >
                  <MapPin />
                  <span>30 N Gould St Ste N, Sheridan, WY 82801</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-2 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/70">
          <p>
            Northbridge Foundation is an independent nonprofit initiative connected to{" "}
            <ConsultingLink />.
          </p>
          <p>© 2026 Northbridge Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
