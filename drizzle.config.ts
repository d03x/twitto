import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";
config({ path: ".env" });
export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  migrations: {
    prefix: "unix",
  },
  casing: "camelCase",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
