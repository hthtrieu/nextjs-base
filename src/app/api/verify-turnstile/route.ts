// app/api/verify-turnstile/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();

  // Ưu tiên tên bạn kiểm soát; fallback tên mặc định nếu cần
  const token =
    (form.get("turnstileToken") as string | null) ||
    (form.get("cf-turnstile-response") as string | null);

  if (!token) {
    return NextResponse.json(
      { success: false, error: "Missing token" },
      { status: 400 }
    );
  }

  const r = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY || "",
        response: token,
      }),
    }
  );

  const data = await r.json();
  return NextResponse.json(data);
}
