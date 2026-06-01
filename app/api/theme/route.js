import { NextResponse } from "next/server";

let currentTheme = "light";

export async function GET() {
  return NextResponse.json({
    mode: currentTheme,
  });
}

export async function POST(request) {
  const { mode } = await request.json();

  currentTheme = mode;

  return NextResponse.json({
    mode: currentTheme,
  });
}