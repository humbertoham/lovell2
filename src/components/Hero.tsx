"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import  Button  from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/hero.png')", // 👉 coloca una imagen de cancha panorámica
      }}
    >
      {/* Overlay oscuro para mejor legibilidad */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
        >
          Canchas de Pádel <span className="text-[--lovell-gold]">LÖVELL</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-gray-200"
        >
          Fabricación, instalación y mantenimiento de canchas de pádel de alta calidad.  
          Con garantía hasta <span className="text-[--lovell-primary] font-semibold">5 años</span> y presencia en todo México.
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
              className=" text-white hover:bg-white"
              style={{ background: "var(--lovell-logo-text)" }}
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
          Instalaciones en más de{" "}
          <span className="text-[--lovell-gold] font-bold">20 estados de México</span>
        </motion.div>
      </div>
    </section>
  );
}
