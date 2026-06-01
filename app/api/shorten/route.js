import { NextResponse } from "next/server";
import { nanoid } from "nanoid";

import { db } from "@/db/index";
import { urls } from "@/db/schema";

export async function POST(request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: "URL requerida" },
        { status: 400 }
      );
    }

    const code = nanoid(6);

    await db.insert(urls).values({
      originalUrl: url,
      shortCode: code,
    });

    return NextResponse.json({
      shortUrl: `${process.env.BASE_URL}/${code}`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al generar URL" },
      { status: 500 }
    );
  }
}