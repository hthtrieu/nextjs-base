import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

// --- Helpers ---
function getTarget2359(now: Date) {
  const target = new Date(now);
  // Count down to 23:59:00 local time
  target.setHours(23, 59, 0, 0);
  // If we've passed 23:59 already today, target is tomorrow 23:59
  if (now.getTime() >= target.getTime()) {
    target.setDate(target.getDate() + 1);
  }
  return target;
}

function msToHMS(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return {
    hours,
    minutes,
    seconds,
    hh: String(hours).padStart(2, "0"),
    mm: String(minutes).padStart(2, "0"),
    ss: String(seconds).padStart(2, "0"),
  };
}

// --- Digit with flip animation ---
function FlipDigit({ value, label }: { value: string; label?: string }) {
  const [prev, setPrev] = useState(value);
  const [dir, setDir] = useState<"up" | "down">("down");

  useEffect(() => {
    if (value !== prev) {
      setDir(Number(value) > Number(prev) ? "up" : "down");
      const t = setTimeout(() => setPrev(value), 450);
      return () => clearTimeout(t);
    }
  }, [value, prev]);

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative h-4 w-4 sm:w-8 sm:h-8 lg:h-14 lg:w-14 select-none">
        {/* Static back plate */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-muted to-muted/70 shadow-inner" />

        {/* Animated current (front) digit */}
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={"front-" + value}
            initial={{ rotateX: dir === "down" ? 90 : -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: dir === "down" ? -120 : 120, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 26,
              mass: 0.8,
            }}
            className="absolute inset-0 grid place-items-center rounded-2xl bg-background/80 backdrop-blur text-lg sm:text-lg md:text-4xl font-bold shadow-xl [transform-style:preserve-3d]"
            aria-hidden="true"
          >
            {value}
          </motion.div>
        </AnimatePresence>

        {/* Previous (behind) for depth */}
        <motion.div
          key={"back-" + prev}
          initial={false}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 grid place-items-center rounded-2xl bg-foreground/10 text-lg sm:text-lg md:text-4xl font-bold"
          aria-hidden="true"
        >
          {prev}
        </motion.div>
      </div>
      {label ? (
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
      ) : null}
    </div>
  );
}

// --- Double digit (two FlipDigit side by side) ---
function DoubleDigits({ value, label }: { value: string; label: string }) {
  const [left, right] = value.split("");
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-end gap-1 sm:gap-2">
        <FlipDigit value={left} />
        <FlipDigit value={right} />
      </div>
      <span className="mt-1 text-xs sm:text-sm md:text-base uppercase tracking-widest text-white font-semibold">
        {label}
      </span>
    </div>
  );
}

// --- Main Countdown component ---
export default function CountdownTo2359() {
  const [now, setNow] = useState(() => new Date());
  const rafRef = useRef<number | null>(null);

  // Smooth ticker using rAF to keep transitions buttery between seconds
  useEffect(() => {
    let lastSecond = now.getSeconds();

    const tick = () => {
      const d = new Date();
      // Only update state on new second to avoid excessive renders
      if (d.getSeconds() !== lastSecond) {
        lastSecond = d.getSeconds();
        setNow(d);
      } else {
        // still set subtly every ~500ms to keep the layout responsive when tab returns
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const target = useMemo(() => getTarget2359(now), [now]);
  const remaining = useMemo(
    () => target.getTime() - now.getTime(),
    [target, now]
  );
  const { hh, mm, ss } = useMemo(() => msToHMS(remaining), [remaining]);

  // Split into double-digit groups
  const groups = [
    { v: hh, label: "Giờ" },
    { v: mm, label: "Phút" },
    { v: ss, label: "Giây" },
  ];

  const targetLabel = target.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Card className="mx-auto w-full max-w-md bg-transparent border-0 shadow-none">
      <CardContent>
        <div className="flex flex-nowrap items-center justify-center gap-2 sm:gap-4 md:gap-6 px-2">
          {groups.map((g, idx) => (
            <div key={idx} className="flex items-center gap-1 sm:gap-2">
              <DoubleDigits value={g.v} label={g.label} />
              {idx < groups.length - 1 && (
                <span className="mb-4 md:mb-4 text-lg md:text-2xl  select-none">
                  :
                </span>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
