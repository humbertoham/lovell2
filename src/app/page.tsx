import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import GlobalPadelStats from "@/components/GlobalPadelStats";
import Hero from "@/components/Hero";
import HomeModels from "@/components/HomeModels";
import InstallationsMarquee from "@/components/InstallationsMarquee";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Hero/>
   <GlobalPadelStats/>
   <HomeModels/>
   <InstallationsMarquee/>
   <FinalCTA
  title="¿Listo para cotizar tu cancha de pádel?"
  subtitle="Te asesoramos a elegir el modelo ideal para tu proyecto."
  primaryHref="/contacto"
  secondaryHref="/modelos"
/>
<FAQ
  items={[
    {
      q: "¿Qué base necesito para instalar una cancha?",
      a: "Generalmente se requiere losa o solera con especificaciones de nivelación y anclaje.",
    },
    {
      q: "¿Cuánto tardan en entregar e instalar?",
      a: "5 semanas de fabricación + 1 semana de instalación (dependiendo del clima).",
    },
    {
      q: "¿Qué incluye la garantía?",
      a: "Estructura 5 años; cristales 4; pasto 4; siempre que se dé mantenimiento según lo recomendado.",
    },
    {
      q: "¿Ofrecen mantenimiento?",
      a: "Sí, contamos con planes de mantenimiento preventivo y correctivo para maximizar la vida útil de tu cancha.",
    },
  ]}
/>

   </>
  );
}
