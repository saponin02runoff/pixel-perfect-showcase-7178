export function ConsultingLink({ className = "" }: { className?: string }) {
  return (
    <a
      href="https://northbridgeconsulting.org/"
      target="_blank"
      rel="noreferrer noopener"
      className={`link-quiet hover:border-current ${className}`}
    >
      Northbridge Consulting
    </a>
  );
}
