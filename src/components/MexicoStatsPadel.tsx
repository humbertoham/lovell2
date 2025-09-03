// components/sections/MexicoStatsPadel.tsx
"use client";

import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

type YearPoint = { year: number; players?: number; courts?: number };
type GrowthPoint = { year: number; growthPct: number };
type RegionPoint = { region: string; clubs: number };

export type MexicoStatsPadelProps = {
  /** Evolución anual en México (jugadores y/o canchas).
   *  Sugerencia de escala: jugadores (miles) y canchas (unidades).
   */
  participationByYear?: YearPoint[];
  /** Crecimiento interanual (%) – si lo omites, se calcula de players */
  yoyGrowth?: GrowthPoint[];
  /** Distribución regional (porcentual) de clubes/canchas en México */
  regionalShare?: RegionPoint[];
  /** Colores opcionales */
  colors?: {
    primary?: string;
    secondary?: string;
    pie?: string[];
  };
  /** Nota/fuente al pie */
  footnote?: string;
};

const DEFAULT_COLORS = {
  primary: "var(--lovell-teal)",
  secondary: "var(--lovell-symbol)",
  pie: [
    "var(--lovell-teal)",
    "var(--lovell-symbol)",
    "var(--lovell-logo-text)",
    "#7eb6b3",
    "#8c6f3d",
  ],
};

// ======= DATOS DE EJEMPLO (ajusta a tus cifras reales) =======
const SAMPLE_MX_PARTICIPATION: YearPoint[] = [
  { year: 2020, players: 120, courts: 450 }, // jugadores (mil), canchas (unidades)
  { year: 2021, players: 170, courts: 700 },
  { year: 2022, players: 230, courts: 1050 },
  { year: 2023, players: 300, courts: 1400 },
  { year: 2024, players: 380, courts: 1800 },
];

const SAMPLE_MX_REGIONAL: RegionPoint[] = [
  { region: "Noroeste", clubs: 12 },
  { region: "Norte", clubs: 18 },
  { region: "Bajío/Occidente", clubs: 28 },
  { region: "Centro", clubs: 30 },
  { region: "Sureste", clubs: 12 },
];
// ===============================================

function computeYoY(series?: YearPoint[]): GrowthPoint[] {
  if (!series?.length) return [];
  const out: GrowthPoint[] = [];
  for (let i = 1; i < series.length; i++) {
    const prev = series[i - 1].players ?? 0;
    const curr = series[i].players ?? 0;
    const growthPct = prev ? ((curr - prev) / prev) * 100 : 0;
    out.push({ year: series[i].year, growthPct: Math.round(growthPct * 10) / 10 });
  }
  return out;
}

export default function MexicoStatsPadel({
  participationByYear = SAMPLE_MX_PARTICIPATION,
  yoyGrowth,
  regionalShare = SAMPLE_MX_REGIONAL,
  colors = DEFAULT_COLORS,
  footnote = "※ Datos de ejemplo para México. Sustituye por tus cifras oficiales cuando las tengas.",
}: MexicoStatsPadelProps) {
  const growth =
    yoyGrowth && yoyGrowth.length > 0 ? yoyGrowth : computeYoY(participationByYear);

  return (
    <section className="py-16 bg-[var(--lovell-bg-soft)]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--lovell-logo-text)]">
            Pádel en México: Tendencias
          </h2>
          <p className="mt-2 text-[var(--lovell-muted)]">
            Evolución de jugadores y canchas, crecimiento interanual y distribución regional.
          </p>
        </div>

        {/* Área: jugadores (mil) vs canchas (u) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="card bg-white"
        >
          <h3 className="text-lg font-semibold text-[var(--lovell-logo-text)] mb-2">
            Participación nacional (2020–2024)
          </h3>
          <p className="text-xs text-[var(--lovell-muted)] mb-4">
            Jugadores (miles) y canchas (unidades).
          </p>
          <div className="h-72 w-full">
            <ResponsiveContainer>
              <AreaChart data={participationByYear} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="mxGrad1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={colors.primary} stopOpacity={0.35}/>
                    <stop offset="95%" stopColor={colors.primary} stopOpacity={0.05}/>
                  </linearGradient>
                  <linearGradient id="mxGrad2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={colors.secondary} stopOpacity={0.35}/>
                    <stop offset="95%" stopColor={colors.secondary} stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#eef2f1" vertical={false} />
                <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  formatter={(v: any, n: any) =>
                    [`${v}`, n === "players" ? "Jugadores (mil)" : "Canchas (u)"]
                  }
                  labelFormatter={(l) => `Año ${l}`}
                />
                <Area
                  type="monotone"
                  dataKey="players"
                  name="Jugadores (mil)"
                  stroke={colors.primary}
                  fill="url(#mxGrad1)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="courts"
                  name="Canchas (u)"
                  stroke={colors.secondary}
                  fill="url(#mxGrad2)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Línea: crecimiento interanual */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="card bg-white"
        >
          <h3 className="text-lg font-semibold text-[var(--lovell-logo-text)] mb-2">
            Crecimiento anual de jugadores (%)
          </h3>
          <p className="text-xs text-[var(--lovell-muted)] mb-4">
            Variación interanual calculada con la serie de jugadores (miles).
          </p>
          <div className="h-72 w-full">
            <ResponsiveContainer>
              <LineChart data={growth} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="#eef2f1" vertical={false} />
                <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                <YAxis tickFormatter={(v) => `${v}%`} tick={{ fontSize: 12 }} />
                <Tooltip formatter={(v: any) => [`${v}%`, "Crecimiento"]} labelFormatter={(l) => `Año ${l}`} />
                <Line type="monotone" dataKey="growthPct" stroke={colors.primary} strokeWidth={2} dot />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Pie: distribución regional México */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card bg-white"
        >
          <h3 className="text-lg font-semibold text-[var(--lovell-logo-text)] mb-2">
            Distribución regional de clubes/canchas
          </h3>
          <p className="text-xs text-[var(--lovell-muted)] mb-4">
            Porcentaje estimado por región (Noroeste, Norte, Bajío/Occidente, Centro, Sureste).
          </p>
          <div className="h-72 w-full">
            <ResponsiveContainer>
              <PieChart>
                <Tooltip formatter={(v: any, n: any) => [`${v}%`, n]} />
                <Pie
                  data={regionalShare}
                  dataKey="clubs"
                  nameKey="region"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  label={(d: any) => `${d.payload.region} ${d.value}%`}
                >
                  {regionalShare.map((_, i) => (
                    <Cell
                      key={i}
                      fill={
                        colors.pie?.[i % (colors.pie?.length || 1)] ||
                        DEFAULT_COLORS.pie[i % DEFAULT_COLORS.pie.length]
                      }
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Nota / Fuente */}
        <p className="text-[10px] text-[var(--lovell-muted)] text-center">{footnote}</p>
      </div>
    </section>
  );
}
