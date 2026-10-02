import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/tochimasu",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
