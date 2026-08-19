import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages can only serve static files. Keep the existing vinext/Sites
  // build unchanged, and enable Next.js static export only in the Pages job.
  ...(process.env.GITHUB_PAGES === "true"
    ? {
        output: "export" as const,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
