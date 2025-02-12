import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import type { Logger } from "drizzle-orm";
import { info } from "console";

const dbLoger: Logger = {
  logQuery(query, params) {
    info(`[Drizzle Error]`, params, query);
  },
};

config({
  path: ".env",
});
if (!process.env.DATABASE_URL) {
  throw new Error("[DATABASE_URL] tidak ada di .env");
}

const sql = neon(process.env.DATABASE_URL!, {
  fetchOptions: {
    cache: "no-store",
    connectionAttempts: 3, // Coba ulang koneksi jika gagal
  },
});

export const db = drizzle(sql, {
  logger: process.env.NODE_ENV === "development" ? dbLoger : undefined,
});
