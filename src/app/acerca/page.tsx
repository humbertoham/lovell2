// app/nosotros/page.tsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { INSTALLATIONS } from "@/lib/data/installations";
import { WARRANTY } from "@/lib/data/warranty";

export const metadata = {
  title: "Nosotros | Lövell",
  description:
    "Lövell: soluciones profesionales en instalación de superficies deportivas. Calidad, innovación y servicio.",
};

const SPORTS = [
  "FUTBOL",
  "TENIS",
  "PADEL",
  "PICKLEBALL",
  "BASQUETBOL",
  "VOLIBOL",
  "BEISBOL",
  "FUTBOL AMERICANO",
  "SQUASH",
  "BADMINTON",
  "TIRO CON ARCO",
];

export default function AboutPage() {
  const statesCount = INSTALLATIONS.length;
  const maxWarrantyYears = Math.max(
    WARRANTY.structure_years,
    WARRANTY.glass_years,
    WARRANTY.turf_years
  );

  return (
    <div className="relative">
      <Navbar mode="dark" />

      <main className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Hero */}
        <section className="pt-16 mt-24 md:pt-24 pb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block text-xs tracking-wider uppercase text-[var(--lovell-teal)] mb-3">
                Sobre nosotros
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-[var(--lovell-logo-text)] leading-tight">
                Soluciones profesionales en instalaciones deportivas
              </h1>
              <p className="mt-4 text-[var(--lovell-muted)]">
                En Lövell nos enfocamos en resolver las necesidades del mercado con base en
                tres ejes: <b>Calidad</b>, <b>Innovación</b> y <b>Servicio</b>.
              </p>

              <div className="mt-6 flex gap-3">
                <Link href="/modelos">
                  <Button rounded="full">Ver modelos</Button>
                </Link>
                <Link href="/contacto">
                  <Button variant="outline" rounded="full">
                    Cotizar proyecto
                  </Button>
                </Link>
              </div>
            </div>

            {/* Imagen/placeholder */}
            <div className="relative">
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-[var(--lovell-bg-soft)] border border-[var(--lovell-line)]" />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-brand-md px-4 py-3">
                <div className="text-sm text-[var(--lovell-muted)]">
                  Presencia en <b className="text-[var(--lovell-logo-text)]">{statesCount}+ estados</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Ejes */}
        <section className="py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Calidad",
                desc:
                  "Materiales y procesos certificados para garantizar desempeño y durabilidad.",
              },
              {
                title: "Innovación",
                desc:
                  "Diseño y mejora continua en sistemas de estructura, vidrio, césped e iluminación.",
              },
              {
                title: "Servicio",
                desc:
                  "Acompañamiento integral: diseño, fabricación, envío, instalación y mantenimiento.",
              },
            ].map((i) => (
              <div key={i.title} className="card bg-white">
                <div className="h-1.5 w-14 rounded-full mb-3" style={{ background: "var(--lovell-symbol)" }} />
                <h3 className="text-lg font-semibold text-[var(--lovell-logo-text)]">
                  {i.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--lovell-muted)]">{i.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Misión / Visión */}
        <section className="py-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card bg-white">
              <h3 className="text-xl font-semibold text-[var(--lovell-logo-text)]">Misión</h3>
              <p className="mt-2 text-[var(--lovell-muted)]">
                Colaborar a la profesionalización de los deportes a través de la mejora continua
                en la construcción de instalaciones deportivas.
              </p>
            </div>
            <div className="card bg-white">
              <h3 className="text-xl font-semibold text-[var(--lovell-logo-text)]">Visión</h3>
              <p className="mt-2 text-[var(--lovell-muted)]">
                Llegar a ser una empresa referente en la instalación de instalaciones deportivas
                en México y en el mundo.
              </p>
            </div>
          </div>
        </section>

        {/* Especialidades */}
        <section className="py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--lovell-logo-text)]">
            Especialistas en múltiples disciplinas
          </h2>
          <p className="mt-2 text-[var(--lovell-muted)]">
            Diseñamos y construimos superficies para diferentes disciplinas, ajustando
            especificaciones y acabados según la normativa y el uso.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {SPORTS.map((s) => (
              <div key={s} className="card bg-[var(--lovell-bg-soft)]">
                <span className="text-[var(--lovell-logo-text)] text-sm font-medium">{s}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Confianza / Datos (garantía + cobertura) */}
        <section className="py-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card bg-white text-center">
              <div className="h-1.5 w-14 rounded-full mx-auto mb-3" style={{ background: "var(--lovell-teal)" }} />
              <div className="text-3xl font-bold text-[var(--lovell-logo-text)]">
                {maxWarrantyYears} años
              </div>
              <p className="mt-1 text-sm text-[var(--lovell-muted)]">
                Garantía máxima (estructura)
              </p>
            </div>

            <div className="card bg-white text-center">
              <div className="h-1.5 w-14 rounded-full mx-auto mb-3" style={{ background: "var(--lovell-symbol)" }} />
              <div className="text-3xl font-bold text-[var(--lovell-logo-text)]">
                {statesCount}+
              </div>
              <p className="mt-1 text-sm text-[var(--lovell-muted)]">
                Estados con instalaciones en México
              </p>
            </div>

            <div className="card bg-white text-center">
              <div className="h-1.5 w-14 rounded-full mx-auto mb-3" style={{ background: "var(--lovell-teal)" }} />
              <div className="text-3xl font-bold text-[var(--lovell-logo-text)]">Equipo experto</div>
              <p className="mt-1 text-sm text-[var(--lovell-muted)]">
                Fabricación, logística e instalación conforme a manuales de fabricante
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 relative">
          <div className="absolute inset-0 brand-gradient rounded-3xl opacity-90" />
          <div className="relative z-10 card bg-transparent border-none text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold">¿Listo para empezar tu proyecto?</h3>
            <p className="mt-2 text-white/90 max-w-2xl mx-auto">
              Te acompañamos desde la planificación hasta la instalación y el mantenimiento.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/cotizador">
                <Button size="lg" rounded="full" className="bg-white text-[var(--lovell-logo-text)] hover:bg-white/90">
                  Cotizar ahora
                </Button>
              </Link>
              <Link href="/mantenimiento">
                <Button variant="outline" size="lg" rounded="full" className="border-white text-white hover:bg-white/10">
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
