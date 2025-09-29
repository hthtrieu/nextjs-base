"use client";

import ReactWrapperBalancer from "react-wrap-balancer";

import { useTrans } from "@/hooks/useTrans";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { RegisterCourseButton } from "../layouts/default/header/RegisterCourseButton";

export const Hero = ({ data }: { data: any }) => {
  const { t } = useTrans();

  return (
    <section
      className={`bg-base absolute z-40 h-screen max-h-[745px] bg-cover w-full bg-center ${
        !data?.homeBanner ? "bg-home-hero" : ""
      }`}
      style={{ backgroundImage: `url(${data?.homeBanner})` }}
    >
      <div className="h-full pt-[var(--header-height)]">
        <MaxWidthWrapper className="h-full max-w-screen-2xl">
          <div className="grid h-full grid-rows-12 grid-cols-12">
            {/* <div
              className={cn(
                "bg-base relative z-0 md:col-span-4",
                "max-lg:hidden"
              )}
            ></div> */}
            <div
              className={cn(
                "border border-opacity-20 bg-white bg-opacity-50 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-3xl md:p-4",
                "row-span-4 col-span-4 row-start-2 col-start-5",
                "max-lg:!col-span-8 max-lg:!row-span-4 max-lg:!row-start-3 max-lg:!col-start-3"
              )}
            >
              <div className="flex h-full flex-col justify-center gap-y-2 md:gap-y-12">
                <div className="text-white text-center">
                  <p
                    className={cn(
                      "text-[32px] font-semibold  text-shadow-[2px_2px_0_rgba(0,0,0,0.6)]",
                      "max-lg:text-center",
                      "max-md:text-[28px]"
                    )}
                  >
                    <ReactWrapperBalancer>
                      {t("home.hero.slogan")}
                    </ReactWrapperBalancer>
                  </p>
                  <p
                    className={cn(
                      "text-2xl font-normal text-shadow-[2px_2px_0_rgba(0,0,0,0.6)] ",
                      "max-lg:text-center"
                    )}
                  >
                    <ReactWrapperBalancer>
                      {t("home.hero.slogan_en")}
                    </ReactWrapperBalancer>
                  </p>
                </div>
                <div className="w-full flex justify-center">
                  <RegisterCourseButton />
                </div>
              </div>
            </div>
            {/* <div
              className={cn(
                "md:row-span-2 md:row-start-10 md:col-span-2 md:col-start-6 w-full flex justify-center"
                // "max-lg:!col-span-1"
              )}
            >
              <RegisterCourseButton className="w-full" />
            </div> */}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};
