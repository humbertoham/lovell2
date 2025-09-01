// components/sections/FinalCTA.tsx
"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

interface FinalCTAProps {
  title: string;
  subtitle?: string;
  primaryHref: string;
  secondaryHref?: string;
}

export default function FinalCTA({
  title,
  subtitle,
  primaryHref,
  secondaryHref,
}: FinalCTAProps) {
  return (
    <section className="relative py-20">
      {/* Fondo degradado de marca */}
      <div className="absolute inset-0 brand-gradient" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg text-white/90">{subtitle}</p>
        )}

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link href={primaryHref}>
            <Button
              size="lg"
              rounded="full"
              className="bg-white text-[var(--lovell-logo-text)] hover:bg-white/90"
            >
              Cotizar ahora
            </Button>
          </Link>

          {secondaryHref && (
            <Link href={secondaryHref}>
              <Button
                variant="outline"
                size="lg"
                rounded="full"
                className="border-white text-white hover:bg-white/10"
              >
                Ver modelos
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
