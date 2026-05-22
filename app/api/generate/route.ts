import { GoogleGenerativeAI } from "@google/generative-ai";
import { db } from "@/db"; // Tu configuración de Drizzle
import { podcastNotes } from "@/db/schema";
import { auth } from "@/lib/auth"; // Tu configuración de better-auth
import { headers } from "next/headers";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  // 1. Verificar sesión con better-auth
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return new Response("No autorizado", { status: 401 });
  }

  const { url, transcription } = await req.json();

  try {
    // 2. Llamada a la API externa (Gemini) [1]
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Genera notas estructuradas y un resumen del siguiente contenido de podcast: ${transcription}`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const summary = response.text();

    // 3. Persistencia en SQLite con Drizzle [1]
    const newNote = await db.insert(podcastNotes).values({
      userId: session.user.id,
      sourceUrl: url,
      summary: summary,
      createdAt: new Date(),
    }).returning();

    return Response.json(newNote);

  } catch (error) {
    return new Response("Error procesando la IA", { status: 500 });
  }
}
