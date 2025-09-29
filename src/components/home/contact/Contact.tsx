"use client";
import React from "react";
import ContactForm from "./ContactForm";
import { useTrans } from "@/hooks/useTrans";
import { cn } from "@/lib/utils";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";

export const Contact = () => {
  const { t } = useTrans();
  return (
    <div>
      <h1 className="font-bold text-xl md:text-4xl text-sky-800 text-center mb-4 md:mb-8">
        {t("contact.title")}
      </h1>
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row justify-between gap-4 p-8">
          <div className="w-full md:w-1/2 text-justify md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            reiciendis odit delectus unde beatae tempore sint veritatis
            praesentium iste perspiciatis ullam laboriosam amet, sed magni atque
            maiores, consequuntur explicabo fugiat?
          </div>
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
