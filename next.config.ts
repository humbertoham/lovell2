import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["img.youtube.com"], // 👈 habilita cargar miniaturas de YouTube
  },
};

export default nextConfig;
