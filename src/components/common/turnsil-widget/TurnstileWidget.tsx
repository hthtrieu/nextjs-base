// components/TurnstileWidget.tsx
"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: any) => string;
      reset: (id?: string) => void;
      remove: (id?: string) => void;
    };
  }
}

export default function TurnstileWidget() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  // Chỉ render ở client để tránh hydration mismatch
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!mounted || !containerRef.current) return;
    if (!window.turnstile) return; // script chưa load, sẽ render sau khi script sẵn sàng

    // Render widget chủ động
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
      callback: (token: string) => {
        // ✅ luôn ghi vào hidden input của bạn
        if (inputRef.current) inputRef.current.value = token;
      },
      "error-callback": () => {
        if (inputRef.current) inputRef.current.value = "";
      },
      "expired-callback": () => {
        if (inputRef.current) inputRef.current.value = "";
        window.turnstile?.reset(widgetIdRef.current || undefined);
      },
      // theme: "auto", // tùy chọn
      // action: "contact_form", // tùy chọn
    });

    return () => {
      if (widgetIdRef.current) window.turnstile?.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      {/* Hidden input do bạn kiểm soát → tên ổn định */}
      <input ref={inputRef} name="turnstileToken" type="hidden" />
      {/* Nơi Turnstile sẽ được render */}
      <div ref={containerRef} />
    </>
  );
}
