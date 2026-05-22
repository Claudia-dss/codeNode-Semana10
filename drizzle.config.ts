import { defineConfig } from "drizzle-kit";

export default defineConfig({
  // Ruta tablas 
  schema: "./src/db/schema.ts", 
  // Carpeta donde se guardarán los archivos de migración
  out: "./drizzle",

  dialect: "sqlite",
  dbCredentials: {
    url: "sqlite.db", 
  },
});