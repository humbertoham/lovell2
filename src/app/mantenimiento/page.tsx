// app/mantenimiento/page.tsx
import Navbar from "@/components/layout/Navbar";
import { MAINTENANCE_PDF as d } from "@/lib/data/maintenance";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function MantenimientoPage() {
  return (
    <div className="relative">
      <Navbar mode="dark" />
      <main className="mx-auto max-w-5xl mt-24 px-4 md:px-6 py-16 space-y-16">
        {/* Intro */}
        <header>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--lovell-logo-text)]">
            Plan Anual de Mantenimiento
          </h1>
          {d.intro && (
            <p className="mt-4 text-[var(--lovell-muted)] whitespace-pre-line">
              {d.intro}
            </p>
          )}
        </header>

        {/* Tabla de plan/frecuencias */}
        {d.schedule_table?.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-[var(--lovell-logo-text)] mb-4">
              Plan y Frecuencias
            </h2>
            <div className="overflow-hidden rounded-2xl border border-[var(--lovell-line)] bg-white">
              <table className="w-full text-sm">
                <thead className="bg-[var(--lovell-bg-soft)] text-[var(--lovell-muted)]">
                  <tr>
                    <th className="text-left px-4 py-3">Operación</th>
                    <th className="text-left px-4 py-3">Responsable</th>
                    <th className="text-left px-4 py-3">Frecuencia</th>
                  </tr>
                </thead>
                <tbody>
                  {d.schedule_table.map((row, i) => (
                    <tr key={i} className="border-t border-[var(--lovell-line)]">
                      <td className="px-4 py-3">{row.op}</td>
                      <td className="px-4 py-3">{row.who}</td>
                      <td className="px-4 py-3">{row.freq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Elementos del mantenimiento */}
        <section>
          <h2 className="text-xl font-semibold text-[var(--lovell-logo-text)] mb-4">
            {d.elements_of_maintenance.heading}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["backing", "fibra", "relleno"].map((key) => (
              <div key={key} className="card bg-white">
                <h3 className="text-lg font-semibold text-[var(--lovell-logo-text)] capitalize">
                  {key}
                </h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-[var(--lovell-muted)] space-y-1">
                  {(d.elements_of_maintenance as any)[key].map(
                    (item: string, i: number) => <li key={i}>{item}</li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Operaciones */}
        <section>
          <h2 className="text-xl font-semibold text-[var(--lovell-logo-text)] mb-4">
            {d.operations.heading}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(d.operations).map(([title, items]) => {
              if (title === "heading") return null;
              return (
                <div key={title} className="card bg-white">
                  <h3 className="text-lg font-semibold text-[var(--lovell-logo-text)] capitalize">
                    {title.replaceAll("_", " ")}
                  </h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-[var(--lovell-muted)] space-y-1">
                    {(items as string[]).map((t, i) => <li key={i}>{t}</li>)}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Vidrios */}
        <section>
          <h2 className="text-xl font-semibold text-[var(--lovell-logo-text)] mb-4">
            {d.glass.heading}
          </h2>
          {Object.entries(d.glass).map(([sub, items]) => {
            if (sub === "heading") return null;
            return (
              <div key={sub} className="mb-6">
                <h3 className="font-medium text-[var(--lovell-logo-text)] capitalize">
                  {sub.replaceAll("_", " ")}
                </h3>
                <ul className="list-disc pl-5 text-sm text-[var(--lovell-muted)] space-y-1 mt-2">
                  {(items as string[]).map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </div>
            );
          })}
        </section>

        {/* Estructura */}
        <section>
          <h2 className="text-xl font-semibold text-[var(--lovell-logo-text)] mb-4">
            {d.structure.heading}
          </h2>
          {Object.entries(d.structure).map(([sub, items]) => {
            if (sub === "heading") return null;
            return (
              <div key={sub} className="mb-6">
                <h3 className="font-medium text-[var(--lovell-logo-text)] capitalize">
                  {sub}
                </h3>
                <ul className="list-disc pl-5 text-sm text-[var(--lovell-muted)] space-y-1 mt-2">
                  {(items as string[]).map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </div>
            );
          })}
        </section>

        {/* Iluminación */}
        <section>
          <h2 className="text-xl font-semibold text-[var(--lovell-logo-text)] mb-4">
            {d.illumination.heading}
          </h2>
          <div className="card bg-white mb-6">
            <h3 className="font-medium text-[var(--lovell-logo-text)]">General</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-[var(--lovell-muted)]">
              {d.illumination.general.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </div>
          <div className="card bg-white mb-6">
            <h3 className="font-medium text-[var(--lovell-logo-text)]">Halógeno</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-[var(--lovell-muted)]">
              {d.illumination.halogeno_vs_led.halogeno.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
            <h3 className="mt-4 font-medium text-[var(--lovell-logo-text)]">LED</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-[var(--lovell-muted)]">
              {d.illumination.halogeno_vs_led.led.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </div>
          <div className="card bg-white">
            <h3 className="font-medium text-[var(--lovell-logo-text)]">Cubierta</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-[var(--lovell-muted)]">
              {d.illumination.cubierta.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </div>
        </section>

        {/* Nota de servicio */}
        <section>
          <div className="card bg-white">
            <h2 className="text-xl font-semibold text-[var(--lovell-logo-text)] mb-2">
              Servicio Lövell
            </h2>
            <p className="text-sm text-[var(--lovell-muted)] whitespace-pre-line">
              {d.service_note}
            </p>
          </div>
        </section>

        {/* Avisos */}
        {d.operational_notices?.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-[var(--lovell-logo-text)] mb-4">
              Avisos Operativos
            </h2>
            <ul className="list-disc pl-5 text-sm text-[var(--lovell-muted)] space-y-1">
              {d.operational_notices.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </section>
        )}

        {/* CTA */}
        <section className="mt-12 card bg-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-[var(--lovell-logo-text)]">
                ¿Necesitas servicio de mantenimiento?
              </h3>
              <p className="text-sm text-[var(--lovell-muted)]">
                Agenda tu mantenimiento preventivo o correctivo con nuestro equipo.
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/contacto">
                <Button rounded="full">Agendar por WhatsApp</Button>
              </Link>
              <Link href="/garantia">
                <Button variant="outline" rounded="full">Ver garantía</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
