import Link from "next/link";

function Sep() {
  return (
    <span className="text-gray-300" aria-hidden="true">
      |
    </span>
  );
}

export default function SeriesNav({ partLabel, previous, next, className = "mb-6" }) {
  return (
    <nav aria-label="Series" className={`flex flex-wrap items-center gap-x-3 gap-y-2 ${className}`}>
      <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">{partLabel}</span>
      {previous ? (
        <>
          <Sep />
          <Link href={previous.href} className="text-sm font-semibold text-[#c8102e] hover:underline">
            {previous.label}
          </Link>
        </>
      ) : null}
      {next ? (
        <>
          <Sep />
          {next.href ? (
            <Link href={next.href} className="text-sm font-semibold text-[#c8102e] hover:underline">
              {next.label}
            </Link>
          ) : (
            <span className="text-sm text-gray-500">{next.label}</span>
          )}
        </>
      ) : null}
    </nav>
  );
}
