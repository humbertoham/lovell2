'use client'
import { useEffect, useState, useCallback } from 'react'
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Generar array de 36 imágenes numeradas
const PROJECTS = Array.from({ length: 45 }, (_, i) => ({
  src: `/proyectos/${i + 1}.jpeg`,
}));

export default function ProyectosPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(() => {
    if (openIndex === null) return;
    setOpenIndex((i) => (i! + 1) % PROJECTS.length);
  }, [openIndex]);
  const prev = useCallback(() => {
    if (openIndex === null) return;
    setOpenIndex((i) => (i! - 1 + PROJECTS.length) % PROJECTS.length);
  }, [openIndex]);

  // Teclas: ← → Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (openIndex === null) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openIndex, close, next, prev]);

  // Bloquear scroll del body al abrir el lightbox
  useEffect(() => {
    if (openIndex !== null) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = original; };
    }
  }, [openIndex]);

  return (
    <div className="relative">
      <Navbar mode="dark" />

      <main className="mx-auto max-w-7xl px-4 md:px-6 py-16">
        {/* Header */}
        <header className="text-center mt-24 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--lovell-logo-text)]">
            Nuestros Proyectos
          </h1>
          <p className="mt-3 text-[var(--lovell-muted)] max-w-2xl mx-auto">
            Galería de algunas canchas instaladas en México.
          </p>
        </header>

        {/* Galería */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => setOpenIndex(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.02 }}
              className="group relative overflow-hidden rounded-2xl shadow-brand-md focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label={`Abrir foto ${i + 1}`}
            >
              <Image
                src={p.src}
                alt={`Proyecto ${i + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
                priority={i < 3}
              />
            </motion.button>
          ))}
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            aria-modal
            role="dialog"
          >
            <motion.div
              className="relative mx-4 w-full max-w-6xl"
              initial={{ scale: 0.98, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.98, y: 10, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Imagen grande */}
              <div className="relative aspect-[16/9] md:aspect-[21/9] bg-black/30 rounded-2xl overflow-hidden">
                <Image
                  src={PROJECTS[openIndex].src}
                  alt={`Proyecto ${openIndex + 1} ampliado`}
                  fill
                  sizes="(max-width: 768px) 90vw, 70vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Controles */}
              <div className="absolute inset-x-0 -bottom-14 flex items-center justify-center gap-4 md:gap-6">
                <button
                  onClick={prev}
                  className="rounded-full px-4 py-2 md:px-5 md:py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm md:text-base"
                  aria-label="Anterior"
                >
                  ← Anterior
                </button>
                <span className="text-white/80 text-sm md:text-base select-none">
                  {openIndex + 1} / {PROJECTS.length}
                </span>
                <button
                  onClick={next}
                  className="rounded-full px-4 py-2 md:px-5 md:py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm md:text-base"
                  aria-label="Siguiente"
                >
                  Siguiente →
                </button>
              </div>

              <button
                onClick={close}
                className="absolute -top-10 right-2 md:right-0 md:-top-12 rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-1.5"
                aria-label="Cerrar"
                title="Cerrar (Esc)"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}