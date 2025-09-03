// components/sections/HomeModels.tsx
"use client";

import Link from "next/link";
import { MODELS } from "@/lib/data/models";
import Button from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";

export default function HomeModels() {
  return (
    <section className="py-20 bg-[var(--lovell-bg-soft)]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lovell-logo-text)]">
            Nuestros Modelos
          </h2>
          <p className="mt-2 text-[var(--lovell-muted)]">
            Canchas deportivas diseñadas con diferentes configuraciones: desde
            opciones clásicas hasta panorámicas premium.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MODELS.map((m) => (
            <div
              key={m.id}
              className="card flex flex-col justify-between hover:shadow-brand-md transition"
            >
              {/* Imagen (si tienes en /public/images/modelos) */}
              <div className="aspect-video w-full bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={m.gallery?.[0] || `/images/modelos/${m.slug}.jpg`}
                  alt={m.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contenido */}
              <div className="mt-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-[var(--lovell-logo-text)]">
                  {m.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--lovell-muted)] flex-1">
                  {m.description}
                </p>
             

                <div className="mt-4">
                  <Link href={`/modelos/${m.slug}`}>
                    <Button size="md" rounded="full" className="w-full">
                      Ver detalles
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA extra */}
    
      </div>
    </section>
  );
}
