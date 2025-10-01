import React from "react";
import ContactForm from "./ContactForm";
import { useTrans } from "@/hooks/useTrans";
import { cn } from "@/lib/utils";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { OfferBlock } from "./OfferBlock";

export const Contact = () => {
  // const { t } = useTrans();
  return (
    <div>
      <h2 className="font-bold text-xl md:text-4xl text-sky-800 text-center mb-4 md:mb-8">
        {"Đăng ký để nhận tư vấn"}
      </h2>
      <MaxWidthWrapper className="bg-white rounded-3xl  ">
        <div className="flex flex-col md:flex-row justify-between gap-4 p-8 rounded-2xl bg-sky-800 backdrop-blur-md shadow-lg supports-[backdrop-filter]">
          <div className="w-full md:w-1/2 text-justify md:text-left">
            <OfferBlock />
          </div>
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
