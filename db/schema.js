import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const urls = sqliteTable("urls", {
    id: integer("id").primaryKey({ autoIncrement: true }),

    originalUrl: text("original_url").notNull(),

    shortCode: text("short_code")
        .notNull()
        .unique(),

    createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
});

export const theme = sqliteTable("theme",{
    id: integer("id").primaryKey({ autoIncrement: true }),

    mode: text("mode").default("light"),
});