// components/sections/InstallationsMarquee.tsx
"use client";

import { INSTALLATIONS } from "@/lib/data/installations";

export default function InstallationsMarquee() {
  return (
    <section className="py-16 bg-[var(--lovell-bg-soft)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--lovell-logo-text)]">
          Presencia en todo México
        </h2>
        <p className="mt-2 text-[var(--lovell-muted)]">
          Canchas instaladas en más de 20 estados de la República.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative mt-10 w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {INSTALLATIONS.map((state, idx) => (
            <span
              key={idx}
              className="mx-6 text-lg font-medium text-[var(--lovell-logo-text)]"
            >
              {state}
            </span>
          ))}
          {/* Duplicamos para que se vea continuo */}
          {INSTALLATIONS.map((state, idx) => (
            <span
              key={`dup-${idx}`}
              className="mx-6 text-lg font-medium text-[var(--lovell-logo-text)]"
            >
              {state}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
