// app/modelos/page.tsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { MODELS } from "@/lib/data/models";

export const metadata = {
  title: "Modelos | Lövell",
  description:
    "Descubre todos los modelos de canchas de pádel Lövell: Classic, Semi Panoramic y Panoramic 1-4.",
};

export default function ModelosPage() {
  return (
    <div className="relative">
      <Navbar mode="dark" />

      <main className="mx-auto max-w-7xl px-4 md:px-6 py-16">
        {/* Header */}
        <header className="text-center mt-24 max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--lovell-logo-text)]">
            Modelos de canchas Lövell
          </h1>
          <p className="mt-3 text-[var(--lovell-muted)]">
            Ofrecemos diferentes configuraciones de canchas de pádel, desde
            opciones clásicas hasta panorámicas premium. Todas diseñadas con
            estándares de calidad, innovación y servicio.
          </p>
        </header>

        {/* Grid de modelos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODELS.map((m, i) => (
            <div
              key={i}
              className="card bg-white hover:shadow-brand-md transition flex flex-col"
            >
              {/* Imagen */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <Image
                  src={m.gallery?.[0] || `/images/modelos/${m.slug}.jpg`}
                  alt={m.name}
                  fill
                  className="object-cover"
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
      </main>

      <Footer />
    </div>
  );
}
