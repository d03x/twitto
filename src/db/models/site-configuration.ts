import { integer, text, boolean, pgTable } from "drizzle-orm/pg-core";

export const siteConfiguration = pgTable("site-configurations", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});
