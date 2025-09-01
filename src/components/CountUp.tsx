// components/shared/CountUp.tsx
"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  end: number;          // valor final
  durationMs?: number;  // duración de la animación
  once?: boolean;       // si solo debe ejecutarse una vez
  prefix?: string;
  suffix?: string;
  className?: string;
  formatter?: (n: number) => string; // formateo opcional
};

export default function CountUp({
  end,
  durationMs = 1200,
  once = true,
  prefix = "",
  suffix = "",
  className,
  formatter = (n) => n.toLocaleString(),
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && (!once || !hasRun)) {
          // animación
          let raf = 0;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / durationMs);
            // easing suave (easeOutCubic)
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.round(end * eased));
            if (t < 1) {
              raf = requestAnimationFrame(tick);
            } else {
              setHasRun(true);
              if (once) io.disconnect();
            }
          };
          raf = requestAnimationFrame(tick);
          return () => cancelAnimationFrame(raf);
        }
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [end, durationMs, once, hasRun]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatter(value)}
      {suffix}
    </span>
  );
}
