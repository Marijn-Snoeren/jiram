import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Ensures Turbopack resolves the correct workspace root in environments
    // that have multiple lockfiles (monorepos / shared home directories).
    root: __dirname,
  },
};

export default nextConfig;
