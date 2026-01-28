import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const stocksTable = pgTable("stocks", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  price: integer().notNull(),
  description: varchar({ length: 255 }).notNull(),
});
