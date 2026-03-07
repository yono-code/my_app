import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages: https://yono-code.github.io/my_app/
  basePath: "/my_app",
  assetPrefix: "/my_app/",
};

export default nextConfig;
