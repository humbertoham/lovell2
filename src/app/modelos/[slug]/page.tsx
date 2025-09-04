import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { MODELS } from "@/lib/data/models";
import Link from "next/link";
import { notFound } from "next/navigation";
import Carousel from "@/components/ui/Carousel";
import Image from "next/image";

export async function generateStaticParams() {
  return MODELS.map((m) => ({ slug: m.slug }));
}


// Imágenes de postes de luminarias disponibles
const POSTES_IMAGES = [
  "/renders/postes/1.png",
  "/renders/postes/2.png",
  "/renders/postes/3.png",
  "/renders/postes/4.png",
];

// Paleta de colores de pasto disponibles
const TURF_COLORS: { name: string; hex: string }[] = [
  { name: "Azul", hex: "#1e3a8a" },
  { name: "Verde", hex: "#15803d" },
  { name: "Rojo", hex: "#b91c1c" },
  { name: "Negro", hex: "#111827" },
  { name: "Rosa", hex: "#FF1D8D" },
  { name: "Terracota", hex: "#E2725B" },
];

export default async function ModeloPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const model = MODELS.find((m) => m.slug === slug);
  if (!model) return notFound();

  const images =
    model.gallery && model.gallery.length > 0
      ? model.gallery
      : Array.from({ length: 4 }, (_, i) => `/renders/modelos/${model.slug}/${i + 1}.jpg`);

  return (
    <div className="relative">
      <Navbar mode="dark" />

      <main className="mx-auto  max-w-6xl px-4 md:px-6 py-16">
        {/* Hero */}
        <section className="grid mt-24 lg:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--lovell-logo-text)]">
              {model.name}
            </h1>
            <p className="mt-4 text-[var(--lovell-muted)]">{model.description}</p>

            <div className="mt-6 flex gap-3">
              <Link href="/contacto">
                <Button rounded="full">Cotizar este modelo</Button>
              </Link>
               <Link href="https://api.whatsapp.com/send/?phone=525555006260&text=Hola+L%C3%B6vell+%EF%BF%BD+Me+interesa+una+cancha+de+p%C3%A1del%2C+%C2%BFme+puedes+dar+m%C3%A1s+informaci%C3%B3n%3F&type=phone_number&app_absent=0">
                <Button variant="outline" rounded="full">
                  Hablar con un asesor
                </Button>
              </Link>
            </div>
          </div>

          {/* Carousel de imágenes */}
          <Carousel images={images} altPrefix={model.name} />
        </section>

        {/* Especificaciones */}
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="card bg-white">
            <h3 className="text-lg font-semibold text-[var(--lovell-logo-text)]">Estructura</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-[var(--lovell-muted)] space-y-1">
              {model.structure.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
          <div className="card bg-white">
            <h3 className="text-lg font-semibold text-[var(--lovell-logo-text)]">Iluminación</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-[var(--lovell-muted)] space-y-1">
              {model.lighting.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </div>
          <div className="card bg-white">
            <h3 className="text-lg font-semibold text-[var(--lovell-logo-text)]">Césped</h3>
            <p className="mt-2 text-sm text-[var(--lovell-muted)]">{model.turf}</p>
          </div>
        </section>

        {/* Postes de luminarias disponibles */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--lovell-logo-text)] mb-4">
            Postes de luminarias disponibles
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {POSTES_IMAGES.map((src, i) => (
              <div key={i} className="relative aspect-[3/4] w-full overflow-hidden rounded-xl shadow bg-white">
                <Image
                  src={src}
                  alt={`Poste ${i + 1}`}
                  fill
                  className="object-contain p-4"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Colores de pasto disponibles + Pintura/Personalización */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--lovell-logo-text)] mb-4">
            Colores de pasto disponibles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TURF_COLORS.map((c) => (
              <div key={c.name} className="flex items-center gap-3 card bg-white">
                <span
                  className="inline-block h-6 w-6 rounded-md border"
                  style={{ backgroundColor: c.hex, borderColor: "#e5e7eb" }}
                  aria-hidden
                />
                <span className="text-sm text-[var(--lovell-logo-text)] font-medium">{c.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="card bg-white">
              <h3 className="text-lg font-semibold text-[var(--lovell-logo-text)]">Pintura</h3>
              <p className="mt-2 text-sm text-[var(--lovell-muted)]">
                100% de la cancha con pintura electrostática horneada.
              </p>
            </div>
            <div className="card bg-white">
              <h3 className="text-lg font-semibold text-[var(--lovell-logo-text)]">Personalización</h3>
              <p className="mt-2 text-sm text-[var(--lovell-muted)]">
                Incluimos faldones elaborados con lámina de acero inoxidable, esquineros y placas de acero
                personalizadas con el logotipo del cliente.
              </p>
            </div>
          </div>
        </section>

        {/* Extras */}
        {model.addons?.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-[var(--lovell-logo-text)] mb-4">Extras disponibles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {model.addons.map((a) => (
                <div key={a.id} className="card bg-[var(--lovell-bg-soft)]">
                  <h3 className="font-medium text-[var(--lovell-logo-text)]">{a.name}</h3>
                  {a.description && (
                    <p className="mt-1 text-sm text-[var(--lovell-muted)]">{a.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Final */}
        <section className="card bg-white text-center py-12">
          <h3 className="text-xl font-semibold text-[var(--lovell-logo-text)]">
            ¿Listo para cotizar el modelo {model.name}?
          </h3>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contacto">
              <Button size="lg" rounded="full">
                Cotizar ahora
              </Button>
            </Link>
            <Link href="https://api.whatsapp.com/send/?phone=525555006260&text=Hola+L%C3%B6vell+%EF%BF%BD+Me+interesa+una+cancha+de+p%C3%A1del%2C+%C2%BFme+puedes+dar+m%C3%A1s+informaci%C3%B3n%3F&type=phone_number&app_absent=0">
              <Button size="lg" variant="outline" rounded="full">
                Hablar con asesor
              </Button>
            </Link>
          </div>
        </section>
      </main>

    </div>
  );
}