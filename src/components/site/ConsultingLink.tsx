export function ConsultingLink({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://northbridgeconsulting.org/"
      target="_blank"
      rel="noreferrer noopener"
      className={`font-medium text-primary underline decoration-primary/45 underline-offset-4 transition-colors hover:text-primary-deep hover:decoration-current ${className}`}
    >
      Northbridge Consulting
    </a>
  );
}
