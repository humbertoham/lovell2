import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import GlobalPadelStats from "@/components/GlobalPadelStats";
import Hero from "@/components/Hero";
import HomeModels from "@/components/HomeModels";
import InstallationsMarquee from "@/components/InstallationsMarquee";
import Servicios from "@/components/Servicios";
import MexicoStatsPadel from "@/components/MexicoStatsPadel";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Servicios/>
   <GlobalPadelStats/>
   <MexicoStatsPadel
  participationByYear={[
    { year: 2020, players: 750, courts: 1200 },  // jugadores (mil), canchas (u)
    { year: 2021, players: 850, courts: 1350 },
    { year: 2022, players: 920, courts: 1500 },
    { year: 2023, players: 1_000, courts: 1700 },
    { year: 2024, players: 1_100, courts: 1900 },
  ]}
  regionalShare={[
    { region: "Noroeste", clubs: 15 },
    { region: "Norte", clubs: 20 },
    { region: "Bajío/Occidente", clubs: 25 },
    { region: "Centro", clubs: 30 },
    { region: "Sureste", clubs: 10 },
  ]}
  footnote="Datos estimados basados en estadísticas internacionales y reportes federativos en México."
/>

   <HomeModels/>
   <InstallationsMarquee/>
   <FinalCTA
  title="¿Listo para cotizar tu cancha?"
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
