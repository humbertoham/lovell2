// lib/data/models.ts
export type Currency = "MXN" | "USD";

export interface Addon {
  id: string;
  name: string;
  description?: string;
}

export interface ModelVariant {
  id: string;
  name: string;
  slug: string;
  description: string;
  structure: string[];
  lighting: string[];
  turf: string;
  addons: Addon[];
  gallery: string[];
}

export const MODELS: ModelVariant[] = [
  {
    id: "classic",
    name: "Classic",
    slug: "classic",
    description:
      "Estructura robusta con bastidores metálicos y vidrio templado de 10 mm. Opción tradicional y confiable.",
    structure: [
      "Vidrio templado 10 mm (18 piezas de 3x2 m)",
      "Postes soporte cristal 2”x3” (12 piezas, 3 m)",
      "Malla galvanizada calibre 8 patrón 4.5x4.5 cm sobre bastidor 3”x1.5”",
      "Postes y red central con sistema de tensión externo",
    ],
    lighting: [
      "4 postes en V (6 m total)",
      "8 lámparas LED de 150W (2 por poste)",
    ],
    turf: "Pasto sintético fibrilado/monofilamento 12 mm, 1,300 g, colores azul, verde o rojo",
    addons: [
      {
        id: "branding",
        name: "Branding y placas personalizadas",
        description: "Faldones, placas y acabados con logotipo del cliente",
      },
    ],
    gallery: ["/images/modelos/classic.jpg"],
  },
  {
    id: "semi-panoramic",
    name: "Semi Panoramic",
    slug: "semi-panoramic",
    description:
      "Mayor visibilidad para espectadores gracias a costillas de cristal en cabeceras. Equilibrio entre diseño y funcionalidad.",
    structure: [
      "Vidrio templado 10 mm (18 piezas de 3x2 m)",
      "12 costillas de cristal templado de 12 mm (25 cm x 3 m) en cabeceras",
      "Malla galvanizada calibre 8 sobre bastidor 3”x1.5”",
      "Postes y red central con sistema de tensión",
    ],
    lighting: [
      "4 postes en V",
      "8 lámparas LED de 150W",
    ],
    turf: "Pasto sintético fibrilado/monofilamento 12 mm, 1,300 g, colores azul, verde o rojo",
    addons: [
      {
        id: "branding",
        name: "Branding y placas personalizadas",
      },
    ],
    gallery: ["/images/modelos/semi-panoramic.jpg"],
  },
  {
    id: "panoramic-1",
    name: "Panoramic 1",
    slug: "panoramic-1",
    description:
      "Modelo 100% panorámico con vidrios de 12 mm en cabeceras, ideal para canchas centrales.",
    structure: [
      "Vidrio templado 12 mm (18 piezas de 3x2 m)",
      "Malla galvanizada calibre 8 sobre bastidor 3”x1.5”",
      "Postes y red central",
    ],
    lighting: [
      "4 postes en V",
      "8 lámparas LED de 150W",
    ],
    turf: "Pasto sintético 12 mm, 1,300 g, colores azul, verde o rojo",
    addons: [
      {
        id: "branding",
        name: "Branding y placas personalizadas",
      },
    ],
    gallery: ["/images/modelos/panoramic-1.jpg"],
  },
  {
    id: "panoramic-2",
    name: "Panoramic 2",
    slug: "panoramic-2",
    description:
      "Panorámica con esquineros tubulares de 2'' cédula 30 (3 m) para refuerzo y estética.",
    structure: [
      "Vidrio templado 12 mm (18 piezas de 3x2 m)",
      "Esquineros 3 m en tubular 2” céd. 30",
      "Malla galvanizada calibre 8 sobre bastidor 3”x1.5”",
      "Postes y red central",
    ],
    lighting: [
      "4 postes en V",
      "8 lámparas LED de 150W",
    ],
    turf: "Pasto sintético 12 mm, 1,300 g",
    addons: [
      {
        id: "branding",
        name: "Branding y placas personalizadas",
      },
    ],
    gallery: ["/images/modelos/panoramic-2.jpg"],
  },
  {
    id: "panoramic-3",
    name: "Panoramic 3",
    slug: "panoramic-3",
    description:
      "Panorámica con marco superior 4x4 cal.14, inferior 6x2 cal.14 y esquineros 4x4 para mayor protección de cristales.",
    structure: [
      "Vidrio templado 12 mm (18 piezas de 3x2 m)",
      "Marco superior 4”x4” cal.14; inferior 6”x2” cal.14",
      "Esquineros 4”x4” para protección de cristales",
      "Malla galvanizada calibre 8 sobre bastidor 3”x1.5”",
      "Postes y red central",
    ],
    lighting: [
      "4 postes en V",
      "8 lámparas LED de 150W",
    ],
    turf: "Pasto sintético 12 mm, 1,300 g",
    addons: [
      {
        id: "branding",
        name: "Branding y placas personalizadas",
      },
    ],
    gallery: ["/images/modelos/panoramic-3.jpg"],
  },
  {
    id: "panoramic-4",
    name: "Panoramic 4",
    slug: "panoramic-4",
    description:
      "Panorámica con estructura 6x6 cal.14 y postes 6x6 en cabeceras para máxima resistencia.",
    structure: [
      "Vidrio templado 12 mm (18 piezas de 3x2 m)",
      "Marco superior 6”x6” cal.14; inferior 6”x2” cal.14",
      "Postes cabecera 6”x6”",
      "Malla galvanizada calibre 8 sobre bastidor 3”x1.5”",
      "Postes y red central",
    ],
    lighting: [
      "4 postes en V",
      "8 lámparas LED de 150W",
    ],
    turf: "Pasto sintético 12 mm, 1,300 g",
    addons: [
      {
        id: "branding",
        name: "Branding y placas personalizadas",
      },
    ],
    gallery: ["/images/modelos/panoramic-4.jpg"],
  },
];
