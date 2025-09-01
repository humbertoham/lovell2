// app/proyectos/page.tsx
'use client'
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { motion } from "framer-motion";



// Ejemplo de proyectos, reemplaza `src` con tus imágenes reales en /public/proyectos
const PROJECTS = [
  {
    title: "Cancha Classic",
    location: "CDMX",
    src: "/proyectos/classic-1.jpg",
  },
  {
    title: "Cancha Semi Panoramic",
    location: "Guadalajara, Jalisco",
    src: "/proyectos/semi-1.jpg",
  },
  {
    title: "Cancha Panoramic 1",
    location: "Monterrey, Nuevo León",
    src: "/proyectos/panoramic1-1.jpg",
  },
  {
    title: "Cancha Panoramic 2",
    location: "Puebla, Puebla",
    src: "/proyectos/panoramic2-1.jpg",
  },
  {
    title: "Cancha Panoramic 3",
    location: "Querétaro",
    src: "/proyectos/panoramic3-1.jpg",
  },
  {
    title: "Cancha Panoramic 4",
    location: "Yucatán",
    src: "/proyectos/panoramic4-1.jpg",
  },
];

export default function ProyectosPage() {
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
            Descubre algunos de los proyectos de canchas deportivas que hemos
            instalado en diferentes estados de México.
          </p>
        </header>

        {/* Galería */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl shadow-brand-md"
            >
              <Image
                src={p.src}
                alt={p.title}
                width={600}
                height={400}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-semibold">{p.title}</h3>
                <p className="text-white/80 text-sm">{p.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      
    </div>
  );
}
