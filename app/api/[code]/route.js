import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

import { db } from "../../../db/index";
import { urls } from "../../../db/schema";

export async function GET(request, { params }) {
  try {
    const code = params.code;

    const result = await db
      .select()
      .from(urls)
      .where(eq(urls.shortCode, code));

    if (result.length === 0) {
      return NextResponse.json(
        { error: "URL no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.redirect(result[0].originalUrl);
  } catch (error) {
    return NextResponse.json(
      { error: "Error en la redirección" },
      { status: 500 }
    );
  }
}