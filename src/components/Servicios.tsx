// components/sections/Servicios.tsx
"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import Button from "@/components/ui/Button";
import Link from "next/link";

const SERVICIOS = [
  {
    title: "Asesoría",
    desc: "Orientación experta en diseño, planeación y ejecución de proyectos deportivos.",
  },
  {
    title: "Branding",
    desc: "Personalización de canchas, colores, logotipos y faldones según la identidad de tu club o empresa.",
  },
  {
    title: "Business Plan",
    desc: "Planes financieros y de operación para rentabilizar proyectos deportivos.",
  },
  {
    title: "Construcción",
    desc: "Obra civil, cimentación y preparación de superficies para canchas deportivas.",
  },
  {
    title: "Mantenimientos preventivos",
    desc: "Planes anuales de inspección, limpieza y corrección para maximizar la vida útil de tu inversión.",
  },
  {
    title: "Fabricación e instalación",
    desc: "Producción propia y montaje de canchas de pádel y otras disciplinas, garantizando calidad y seguridad.",
  },
];

const DEPORTES = [
  "Fútbol",
  "Tenis",
  "Pádel",
  "Pickleball",
  "Básquetbol",
  "Voleibol",
  "Béisbol",
  "Fútbol Americano",
  "Squash",
  "Bádminton",
  "Tiro con arco",
];

export default function Servicios() {
  return (
    <section className="py-16 mt-24 bg-[var(--lovell-bg-soft)]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lovell-logo-text)]">
            Nuestros Servicios
          </h2>
          <p className="mt-2 text-[var(--lovell-muted)]">
            En Lövell acompañamos a nuestros clientes en todas las etapas del
            proyecto: desde la planeación y el branding, hasta la construcción,
            instalación y mantenimiento.
          </p>
        </div>

        {/* Servicios */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICIOS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card bg-white flex flex-col"
            >
              <div className="flex items-center gap-2 mb-2">
                <FiCheckCircle className="text-[var(--lovell-teal)] w-5 h-5" />
                <h3 className="text-lg font-semibold text-[var(--lovell-logo-text)]">
                  {s.title}
                </h3>
              </div>
              <p className="text-sm text-[var(--lovell-muted)]">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Deportes */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[var(--lovell-logo-text)] text-center mb-6">
            Nos especializamos en
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {DEPORTES.map((d, i) => (
              <motion.div
                key={d}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="card bg-white text-center py-4"
              >
                <span className="text-[var(--lovell-logo-text)] text-sm font-medium">
                  {d}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="card bg-white text-center py-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--lovell-logo-text)]">
            ¿Listo para llevar tu proyecto al siguiente nivel?
          </h3>
          <p className="mt-2 text-[var(--lovell-muted)] max-w-2xl mx-auto">
            Agenda una asesoría personalizada o solicita una cotización sin compromiso.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/modelos">
              <Button size="lg" rounded="full">
                Ver modelos
              </Button>
            </Link>
            <Link href="/contacto">
              <Button variant="outline" size="lg" rounded="full">
                Hablar con un asesor
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
