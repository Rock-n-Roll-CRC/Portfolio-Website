import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  typedRoutes: true,

  experimental: {
    typedEnv: true,
  },
};

export default nextConfig;
