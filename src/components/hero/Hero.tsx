import ReactWrapperBalancer from "react-wrap-balancer";

import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";

import { cn } from "@/lib/utils";
import { RegisterCourseButton } from "../layouts/default/header/RegisterCourseButton";
import { HeroSlide } from "./slides";
import { Button } from "../ui/button";
import Link from "next/link";
export const Hero = ({
  data,
  isFirst,
}: {
  data: HeroSlide;
  isFirst: boolean;
}) => {
  const { title, description, image, ctaText, ctaHref } = data;
  return (
    <section
      className={`bg-base absolute z-40 h-screen max-h-[745px] bg-cover w-full bg-center ${
        !data?.image ? "bg-home-hero" : ""
      }`}
      style={{ backgroundImage: `url(${data?.image})` }}
    >
      <div className="h-full pt-[var(--header-height)]">
        <MaxWidthWrapper className="h-full max-w-screen-2xl">
          <div className="grid h-full grid-rows-12 grid-cols-12">
            <div
              className={cn(
                "border border-opacity-20 bg-white bg-opacity-50 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-3xl md:p-4",
                "row-span-4 col-span-4 row-start-2 col-start-5",
                "max-lg:!col-span-6 max-lg:!row-span-4 max-lg:!row-start-2 max-lg:!col-start-4",
                "max-md:!col-span-9 max-md:!row-span-4 max-md:!row-start-2 max-md:!col-start-2"
              )}
            >
              <div className="flex h-full flex-col justify-center gap-y-2 md:gap-y-4">
                <div className="text-white text-center">
                  {isFirst ? (
                    <h1
                      className={cn(
                        "text-4xl font-semibold text-shadow-[2px_2px_0_rgba(0,0,0,0.6)]",
                        "max-md:text-lg"
                      )}
                    >
                      {"Trung tâm ngoại ngữ Starfish"}
                    </h1>
                  ) : (
                    <h2
                      className={cn(
                        "text-4xl font-semibold text-shadow-[2px_2px_0_rgba(0,0,0,0.6)]",
                        "max-md:text-lg"
                      )}
                    >
                      {"Trung tâm ngoại ngữ Starfish"}
                    </h2>
                  )}

                  <h3
                    className={cn(
                      "text-2xl font-normal text-shadow-[2px_2px_0_rgba(0,0,0,0.6)] ",
                      "max-md:text-center text-base"
                    )}
                  >
                    {description}
                  </h3>
                  {/* {ctaText && ctaHref && (
                    <a
                      href={ctaHref}
                      className="mt-5 inline-block rounded-xl bg-white/90 px-4 py-2 text-black"
                    >
                      {ctaText}
                    </a>
                  )} */}
                </div>
                <div className="w-full flex justify-center">
                  {/* <RegisterCourseButton /> */}
                  <Button className="h-12 rounded-3xl min-w-fit min-[1920px]:w-48 font-bold text-lg bg-sky-900 text-white hover:bg-red-700 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                    <Link
                      href={ctaHref || "#"}
                      className="flex items-center gap-2"
                    >
                      <span>{ctaText}</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};
