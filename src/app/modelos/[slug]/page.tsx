// app/modelos/[slug]/page.tsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { MODELS } from "@/lib/data/models";
import Link from "next/link";
import { notFound } from "next/navigation";
import Carousel from "@/components/ui/Carousel";

export async function generateStaticParams() {
  return MODELS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const model = MODELS.find((m) => m.slug === params.slug);
  if (!model) return {};
  return {
    title: `${model.name} | Lövell`,
    description: model.description,
  };
}

export default function ModeloPage({ params }: { params: { slug: string } }) {
  const model = MODELS.find((m) => m.slug === params.slug);
  if (!model) return notFound();

  const images =
    model.gallery && model.gallery.length > 0
      ? model.gallery
      : [`/images/modelos/${model.slug}.jpg`];

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
              <Link href="/cotizador">
                <Button rounded="full">Cotizar este modelo</Button>
              </Link>
              <Link href="/contacto">
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
            <Link href="/cotizador">
              <Button size="lg" rounded="full">
                Cotizar ahora
              </Button>
            </Link>
            <Link href="/contacto">
              <Button size="lg" variant="outline" rounded="full">
                Hablar con asesor
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
