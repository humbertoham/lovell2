// app/garantia/page.tsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { WARRANTY } from "@/lib/data/warranty";


export default function GarantiaPage() {
  return (
    <div className="relative">
      <Navbar mode="dark" />

      <main className="mx-auto max-w-5xl px-4 md:px-6 py-16">
        <header className="mb-10">
          <h1 className="text-3xl mt-24 md:text-4xl font-bold text-[var(--lovell-logo-text)]">
            Garantía Lövell
          </h1>
          <p className="mt-2 text-[var(--lovell-muted)] max-w-2xl">
            Protegemos tu inversión con una garantía integral en estructura, cristales
            y pasto sintético. Consulta aquí los alcances, exclusiones y condiciones.
          </p>
        </header>

        {/* Resumen de años */}
        <section className="grid gap-4 sm:grid-cols-3 mb-12">
          <div className="card text-center">
            <div className="text-sm text-[var(--lovell-muted)]">Estructura</div>
            <div className="text-3xl font-bold text-[var(--lovell-logo-text)]">
              {WARRANTY.structure_years} años
            </div>
          </div>
          <div className="card text-center">
            <div className="text-sm text-[var(--lovell-muted)]">Cristales</div>
            <div className="text-3xl font-bold text-[var(--lovell-logo-text)]">
              {WARRANTY.glass_years} años
            </div>
          </div>
          <div className="card text-center">
            <div className="text-sm text-[var(--lovell-muted)]">Pasto sintético</div>
            <div className="text-3xl font-bold text-[var(--lovell-logo-text)]">
              {WARRANTY.turf_years} años
            </div>
          </div>
        </section>

        {/* Detalle de cobertura / exclusiones / condiciones */}
        <section className="grid gap-8 md:grid-cols-3">
          <div className="card">
            <h2 className="text-xl font-semibold text-[var(--lovell-logo-text)]">
              Cobertura
            </h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-[var(--lovell-muted)]">
              {WARRANTY.coverage.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold text-[var(--lovell-logo-text)]">
              Exclusiones
            </h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-[var(--lovell-muted)]">
              {WARRANTY.exclusions.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold text-[var(--lovell-logo-text)]">
              Condiciones
            </h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-[var(--lovell-muted)]">
              {WARRANTY.conditions.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-[var(--lovell-muted)]">
              * La garantía aplica siempre que el uso y los mantenimientos sean los
              recomendados por Lövell.
            </p>
          </div>
        </section>

        {/* CTA sección */}
        <section className="mt-12 card bg-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-[var(--lovell-logo-text)]">
                ¿Tienes dudas sobre la garantía?
              </h3>
              <p className="text-sm text-[var(--lovell-muted)]">
                Escríbenos y te asesoramos según tu proyecto y ubicación.
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/contacto">
                <Button rounded="full">Hablar con un asesor</Button>
              </Link>
              <Link href="/mantenimiento">
                <Button variant="outline" rounded="full">
                  Ver mantenimiento
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
