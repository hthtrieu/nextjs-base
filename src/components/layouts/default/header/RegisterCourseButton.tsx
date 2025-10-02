"use client";

import { Button } from "@/components/ui/button";
import { useTrans } from "@/hooks/useTrans";
import React from "react";
import { Dot } from "lucide-react";
import Link from "next/link";
export const RegisterCourseButton = ({ className }: { className?: string }) => {
  const { t } = useTrans();
  return (
    <div className={className}>
      <Button className=" h-12 rounded-3xl min-w-fit min-[1920px]:w-48 font-bold text-lg bg-sky-900 text-white hover:bg-red-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        <Link href="#contact" className="flex items-center gap-2">
          <span>{t("header.register_button")}</span>
        </Link>
      </Button>
    </div>
  );
};
