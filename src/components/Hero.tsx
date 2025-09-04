'use client'
import Link from 'next/link'
import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/ui/Button'

// 👉 Coloca tus imágenes en /public/hero/
const BACKGROUNDS = [
  '/hero/1.png',
  '/hero/2.png',
  '/hero/3.png',
  '/hero/4.png',
  '/hero/5.png',
  '/hero/6.jpg',
  '/hero/7.jpg',
]

const AUTOPLAY_MS = 5000

export default function Hero() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % BACKGROUNDS.length), [])
  const prev = useCallback(() => setIndex((i) => (i - 1 + BACKGROUNDS.length) % BACKGROUNDS.length), [])
  const goTo = useCallback((i: number) => setIndex(i), [])

  // autoplay
  useEffect(() => {
    const id = setInterval(next, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [next])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          {BACKGROUNDS.map((src, i) => (
            i === index && (
              <motion.div
                key={src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
                aria-hidden
              />
            )
          ))}
        </AnimatePresence>
        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
        >
          Construimos tu cancha,
          <span className="text-[--lovell-gold]"> elevamos tu juego</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-gray-200"
        >
          Fabricación, instalación y mantenimiento de canchas de alta calidad.
          Garantía de hasta <span className="text-[--lovell-primary] font-semibold">5 años</span> y cobertura nacional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/contacto">
            <Button
              size="lg"
              rounded="full"
              className="text-white"
              style={{ background: 'var(--lovell-logo-text)' }}
            >
              Cotizar ahora
            </Button>
          </Link>

          <Link href="/modelos">
            <Button
              variant="outline"
              size="lg"
              rounded="full"
              className="border-white text-white hover:bg-white/10"
            >
              Ver modelos
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-gray-300 text-sm md:text-base"
        >
          Instalaciones en más de{' '}
          <span className="text-[--lovell-gold] font-bold">25 estados de México</span>
        </motion.div>
      </div>

      {/* Controles */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-3">
        <div className="pointer-events-auto flex items-center gap-3">
          <button onClick={prev} aria-label="Anterior" className="rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-1.5">
            ←
          </button>
          <button onClick={next} aria-label="Siguiente" className="rounded-full bg-white/10 hover:bg-white/20 text-white px-3 py-1.5">
            →
          </button>
        </div>
        <div className="pointer-events-auto flex gap-2">
          {BACKGROUNDS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir al slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'} hover:bg-white`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
