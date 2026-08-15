import Link from "next/link";
import Image from "next/image";

export default function PageHero({
  title,
  subtitle,
  image = "/hero.webp",
  crumbs = [],
}) {
  return (
    <section className="relative min-h-[55vh] lg:min-h-[60vh] w-full flex flex-col justify-end pb-14 md:pb-16 pt-32 bg-[#0c150b] overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        priority
        quality={75}
        sizes="100vw"
        className="object-cover object-center z-0 pointer-events-none"
      />
      <div className="absolute inset-0 bg-black/55 z-10" />
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/70 z-10" />

      <div className="relative z-20 w-full max-w-[min(85.5%,100rem)] mx-auto text-white flex flex-col gap-5">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-label font-normal tracking-widest uppercase text-white/70"
        >
          <Link href="/" className="hover:text-[#dfd0bd] transition-colors">
            Inicio
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <span className="text-white/40">/</span>
              {c.href ? (
                <Link
                  href={c.href}
                  className="hover:text-[#dfd0bd] transition-colors"
                >
                  {c.label}
                </Link>
              ) : (
                <span className="text-[#dfd0bd]">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="text-h1 font-black uppercase tracking-display">
          {title}
        </h1>

        {subtitle ? (
          <p className="text-body font-normal text-white/90 max-w-2xl">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
