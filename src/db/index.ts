import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "./schema";


const sqlite = new Database("sqlite.db");

//motor que usamos para el Route Handler de Gemini
export const db = drizzle(sqlite, { schema });