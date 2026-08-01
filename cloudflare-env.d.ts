interface Fetcher {
  fetch(input: Request | string, init?: RequestInit): Promise<Response>;
}

type D1Database = import("drizzle-orm/d1").DrizzleD1Database<Record<string, never>> extends never
  ? never
  : unknown;

declare module "cloudflare:workers" {
  export const env: { DB?: D1Database };
}
