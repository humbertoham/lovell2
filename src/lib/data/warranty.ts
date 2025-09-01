// lib/data/warranty.ts

export interface Warranty {
  structure_years: number;
  glass_years: number;
  turf_years: number;
  coverage: string[];
  exclusions: string[];
  conditions: string[];
}

export const WARRANTY: Warranty = {
  structure_years: 5,
  glass_years: 4,
  turf_years: 4,
  coverage: [
    "Estructura metálica: fabricación, soldaduras, pintura y anclajes",
    "Cristales templados: desprendimientos, fisuras y defectos de instalación",
    "Pasto sintético: defectos de fabricación, costuras y adhesivos",
  ],
  exclusions: [
    "Daños ocasionados por fenómenos naturales (inundaciones, sismos, etc.)",
    "Accidentes, vandalismo o incendios",
    "Uso inadecuado, negligencia o químicos abrasivos",
  ],
  conditions: [
    "Garantía válida solo con uso y mantenimiento adecuados",
    "Los mantenimientos deben realizarse de acuerdo a las recomendaciones de Lövell",
    "La reparación o sustitución será determinada exclusivamente por Lövell durante la vigencia",
  ],
};
