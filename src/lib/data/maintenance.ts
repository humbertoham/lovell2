// lib/data/maintenance_from_pdf.ts

export const MAINTENANCE_PDF = {
  intro: `PLAN ANUAL DE MANTENIMIENTO
Los componentes de las canchas están diseñados para recibir un mantenimiento periódico, lo que permite una buena experiencia de juego, evitar lesiones, y entregar condiciones seguras.
Al implementar un Plan Anual de Mantenimiento logras maximizar la vida útil, y obtener el mejor retorno a tu inversión. Conoce más sobre cómo diseñamos un plan a la medida de tus canchas.`,

  schedule_table: [
    { op: "Limpieza general", who: "Dueño", freq: "Semanal" },
    { op: "Redistribución de la arena", who: "Dueño", freq: "Quincenal" },
    { op: "Eliminación de hongos y musgo", who: "Dueño", freq: "Semestral" },
    { op: "Verificación de las juntas", who: "Empresa especializada", freq: "Semestral" },
    { op: "Limpieza profunda y descompactación", who: "Empresa especializada", freq: "Semestral" },
  ],

  elements_of_maintenance: {
    heading: "Elementos del Plan Anual de Mantenimiento del Pasto Sintético",
    backing: [
      "La rotura del backing se produce por esfuerzos cortantes excesivos, juntas mal ejecutadas, raíces o movimientos de dilatación/contracción en juntas.",
      "Realizar revisiones continuas de juntas para reparar de inmediato pequeños desgarros."
    ],
    fibra: [
      "Colocar advertencias de calzado en accesos para proteger la fibra.",
      "No permitir acceso con tacos de aluminio ni calzado no deportivo."
    ],
    relleno: [
      "El uso causa mala distribución del relleno y puede afectar el juego.",
      "Defectos en riegos/drenajes deterioran el pavimento deportivo."
    ]
  },

  operations: {
    heading: "Operaciones de mantenimiento",
    limpieza: [
      "Eliminar hojas, semillas, malas hierbas y restos que propicien hongos.",
      "Usar cepillo o rastrillo suave (goma/plástico) o soplador sin afectar la distribución de arena."
    ],
    redistribucion_arena: [
      "Usar cepillo ancho (dureza intermedia) para equilibrar nivel de arena.",
      "Evitar zonas con fibra totalmente cubierta o sin arena; cepillar en sentido longitudinal y transversal."
    ],
    hongos_musgo: [
      "En zonas perimetrales/sombrías puede aparecer hongos/musgo.",
      "Aplicar fungicida sin base de aceite como prevención."
    ],
    verificacion_juntas: [
      "Evaluar profundamente el estado de las juntas.",
      "Reparar separaciones detectadas de forma inmediata para evitar roturas mayores."
    ],
    limpieza_profunda: [
      "Retirar, limpiar y reinstalar la arena de relleno (empresa especializada).",
      "Mejora propiedades de juego y capacidad de drenaje."
    ]
  },

  glass: {
    heading: "Detalle de la Limpieza y Mantenimiento de Vidrios",
    inspeccion_periodica: [
      "Comprobar periódicamente que los vidrios no presenten grietas, especialmente en zonas de anclaje.",
      "Si hay grieta, no jugar hasta reemplazar el vidrio para evitar roturas por choque o cambios de temperatura."
    ],
    limpieza_periodica: [
      "Limpiar para evitar adhesión de polvo/materia orgánica que aumenta condensación.",
      "Considerar que la superficie acristalada de una pista es ~100 m².",
      "Revisar separaciones entre vidrios y pavimento (15–30 mm) y que el césped pase por debajo."
    ],
    mantenimiento_reemplazo: [
      "Las vibraciones aflojan tornillería y rompen arandelas de nylon, dejando metal en contacto con vidrio → riesgo de rotura.",
      "Inspeccionar y sustituir tornillería/elementos deteriorados."
    ],
    neoprenos: [
      "Los neoprenos evitan contacto directo vidrio-estructura y reparten esfuerzos; revisar y reemplazar piezas defectuosas."
    ],
    separacion_vidrios: [
      "El vidrio templado dilata (~9×10⁻⁶). Para 2 m puede variar ±1 mm.",
      "Separación mínima entre piezas: >3 mm; máxima: <6 mm (para no afectar el rebote).",
      "Verificar separación uniforme en toda la junta."
    ]
  },

  structure: {
    heading: "Estructuras metálicas, cierres e iluminación",
    lacados: [
      "El lacado/pintura protege la estructura; revisar golpes/arañazos/desconchones.",
      "Lijar y repintar puntualmente de forma anual para evitar oxidación."
    ],
    anclajes: [
      "Elementos portantes fijados al suelo con placas de anclaje a zuncho/solera.",
      "Verificar que no haya aflojamientos y que los paños conserven verticalidad (evitar roturas o colapsos)."
    ],
    tornilleria: [
      "Revisar presiones de atornillado en paños metálicos (2 m de ancho aprox.)."
    ],
    red_juego: [
      "Revisar mecanismos de tensado y fijación; altura centro 88 cm y extremos ≤ 92 cm."
    ],
    redes_proteccion: [
      "Revisar sistema de cogida/tensado y roturas en redes perimetrales."
    ]
  },

  illumination: {
    heading: "Iluminación",
    general: [
      "Sistemas: (1) Integrado a la estructura mediante suplementos, (2) Columna exterior.",
      "Revisar anclaje de suplementos/columnas y crucetas para evitar balanceos (previene fundido o desorientación de lámparas).",
      "Verificar correcta orientación de proyectores para evitar zonas de sombra."
    ],
    halogeno_vs_led: {
      halogeno: [
        "Vida útil aproximada: 16,000 horas.",
        "Comprobar intensidad con luxómetro y sustituir si hay pérdida de iluminación.",
        "Mantenimiento recomendado: limpieza bimestral de reflectores/cristales; revisión de circuitos para evitar puntos calientes; sustitución de lámparas/equipos de arranque cuando sea preciso."
      ],
      led: [
        "Proyectores de última generación; vida útil ~50,000 horas.",
        "Ahorro significativo y sin pérdida de iluminación; no requieren mantenimiento de lámpara como halógenos."
      ]
    },
    cubierta: [
      "Acabados y cubiertas suelen requerir muy poco mantenimiento y garantizan durabilidad.",
      "Recomendación: tejas galvanizadas y lacadas para evitar corrosión por agentes meteorológicos."
    ]
  },

  service_note: `Nuestro personal realiza el mantenimiento conforme a manuales del fabricante, con maquinaria adecuada.
Parte del plan anual incluye tareas periódicas que puede realizar el dueño de las canchas; nuestro servicio incluye entrenamiento y entrega de un manual.`,

  operational_notices: [
    "Permitir que el pasto seque tras lluvias antes de cepillar o reubicar arena.",
    "No arrastrar mobiliario pesado sobre el pasto.",
    "Programar mantenimiento semestral con empresa especializada para conservar la garantía."
  ]
};
