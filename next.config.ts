import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    // Keep Turbopack rooted on this app — a parent package-lock.json otherwise steals the workspace root.
    root: projectRoot,
  },
};

export default nextConfig;
