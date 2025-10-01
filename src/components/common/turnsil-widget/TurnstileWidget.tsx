// components/TurnstileWidget.tsx
"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: any) => string;
      reset: (id?: string) => void;
      remove: (id?: string) => void;
    };
  }
}

const BREAKPOINT = 300; // < 300px dùng compact, >= 300px dùng flexible

export default function TurnstileWidget() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const hostRef = useRef<HTMLDivElement | null>(null);
  const hiddenRef = useRef<HTMLInputElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const currentSizeRef = useRef<"compact" | "flexible">(null);

  // Render + re-render theo width
  useEffect(() => {
    if (!wrapperRef.current || !hostRef.current) return;

    const renderWithSize = (size: "compact" | "flexible") => {
      // dọn widget cũ
      if (widgetIdRef.current) window.turnstile?.remove(widgetIdRef.current);
      hostRef.current!.innerHTML = ""; // tránh chồng DOM

      widgetIdRef.current = window.turnstile!.render(hostRef.current!, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
        size, // 👈 flexible / compact (theo width)
        theme: "auto",
        callback: (token: string) => {
          if (hiddenRef.current) hiddenRef.current.value = token || "";
        },
        "expired-callback": () => {
          if (hiddenRef.current) hiddenRef.current.value = "";
          window.turnstile?.reset(widgetIdRef.current || undefined);
        },
        "error-callback": () => {
          if (hiddenRef.current) hiddenRef.current.value = "";
        },
      });

      currentSizeRef.current = size;
    };

    const chooseSize = (w: number) => (w < BREAKPOINT ? "compact" : "flexible");

    const ensureRendered = () => {
      const w = wrapperRef.current!.clientWidth;
      const nextSize = chooseSize(w);

      // lần đầu hoặc khi đổi size -> re-render
      if (!currentSizeRef.current || currentSizeRef.current !== nextSize) {
        renderWithSize(nextSize);
      }
    };

    // chờ script nếu chưa sẵn sàng
    const waitForTurnstile = () => {
      if (window.turnstile) {
        ensureRendered();
        // re-render khi đổi kích thước
        const ro = new ResizeObserver(() => ensureRendered());
        ro.observe(wrapperRef.current!);
        return () => ro.disconnect();
      } else {
        const id = setInterval(() => {
          if (window.turnstile) {
            clearInterval(id);
            ensureRendered();
            const ro = new ResizeObserver(() => ensureRendered());
            ro.observe(wrapperRef.current!);
          }
        }, 120);
        return () => clearInterval(id);
      }
    };

    const cleanup = waitForTurnstile();

    return () => {
      if (typeof cleanup === "function") cleanup();
      if (widgetIdRef.current) window.turnstile?.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="w-full max-w-full mx-auto flex items-center justify-start md:justify-between"
    >
      <input ref={hiddenRef} name="turnstileToken" type="hidden" />
      <div ref={hostRef} />
    </div>
  );
}
