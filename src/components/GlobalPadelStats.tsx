// components/sections/GlobalPadelStats.tsx
"use client";

import { motion } from "framer-motion";
import { FiGlobe, FiMapPin, FiUsers, FiLayers } from "react-icons/fi";
import CountUp from "@/components/CountUp";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ReactNode;
};

export default function GlobalPadelStats() {
  const stats: Stat[] = [
    { label: "Países con pádel", value: 130, icon: <FiGlobe className="w-5 h-5" /> },
    { label: "Clubes", value: 19800, suffix: "+", icon: <FiMapPin className="w-5 h-5" /> },
    { label: "Canchas", value: 63000, suffix: "+", icon: <FiLayers className="w-5 h-5" /> },
    { label: "Federaciones (FIP)", value: 71, icon: <FiGlobe className="w-5 h-5" /> },
    { label: "Jugadores (amateurs)", value: 30000000, suffix: "+", icon: <FiUsers className="w-5 h-5" /> },
  ];

  return (
    <section className="py-16 bg-[var(--lovell-bg-soft)]">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lovell-logo-text)]">
            Pádel en el mundo
          </h2>
          <p className="mt-2 text-[var(--lovell-muted)]">
            Panorama global con datos oficiales: países, clubes, canchas, federaciones y jugadores.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05 }}
              className="card bg-white flex flex-col items-center text-center"
            >
              <div className="p-2 rounded-xl bg-[var(--lovell-bg-soft)] text-[var(--lovell-logo-text)]">
                {s.icon}
              </div>
              <div className="mt-3 text-3xl font-semibold text-[var(--lovell-logo-text)] tabular-nums">
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-1 text-sm text-[var(--lovell-muted)]">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="px-3 py-1 rounded-full bg-white border border-[var(--lovell-line)] text-[var(--lovell-logo-text)] text-sm">
            +27% crecimiento global de clubes vs. 2023
          </span>
          <span className="px-3 py-1 rounded-full bg-white border border-[var(--lovell-line)] text-[var(--lovell-logo-text)] text-sm">
            Proyección: ~70,000 canchas en 2026
          </span>
        </div>
      </div>
    </section>
  );
}
