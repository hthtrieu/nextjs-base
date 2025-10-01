// components/TurnstileWidget.tsx
"use client";

import { useEffect, useState } from "react";

export default function TurnstileWidget() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      className="cf-turnstile"
      data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
      data-theme="light" // tuỳ chọn
    />
  );
}
