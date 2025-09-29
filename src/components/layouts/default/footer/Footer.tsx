import React from "react";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="w-full bg-sky-800 py-16">
      <MaxWidthWrapper className="mb-8">
        <div className="rounded-2xl overflow-x-hidden">
          <img
            src="/assets/backgrounds/map.png"
            alt="map"
            // width={100}
            // height={100}
            className="w-full h-full object-cover"
          />
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="text-white ">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-between">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex flex-col items-center md:items-start md:justify-between gap-y-1.5">
              <Link href="/">
                <img
                  src="/assets/icons/logo.jpg"
                  alt="logo"
                  // width={100}
                  // height={100}
                  className="h-16 w-auto rounded-2xl"
                />
              </Link>
              <span className="text-xs">
                {"To be Your wings to be the future!"}
              </span>
            </div>

            <div className="md:hidden" id="social-sm">
              <div className="flex gap-x-4">
                <Link
                  href="https://www.facebook.com/profile.php?id=100057569344901"
                  target="_blank"
                >
                  <img
                    src="/assets/icons/facebook.svg"
                    className="w-6 h-6"
                    alt="facebook"
                  />
                </Link>
                <Link href="https://www.tiktok.com/" target="_blank">
                  <img
                    src="/assets/icons/tiktok.svg"
                    className="w-6 h-6"
                    alt="tiktok"
                  />
                </Link>
                <Link href="https://zalo.me/0939027417" target="_blank">
                  <img
                    src="/assets/icons/zalo.svg"
                    className="w-6 h-6"
                    alt="zalo"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center md:text-left" id="contact">
            <div className="flex flex-col gap-y-1.5 text-sm md:text-base">
              <h3 className="text-xl underline">Liên hệ</h3>
              <span>Email: centerstarfish34@gmail.com</span>
              <span>Phone: 0939027417</span>
              <span>Địa chỉ: 44 Nguyễn Thần Hiến, Ngữ Hành Sơn, Đà Nẵng</span>
            </div>
          </div>
          <div className="hidden md:block" id="social-md">
            <div className="flex gap-x-4">
              <Link href="https://www.facebook.com/profile.php?id=100057569344901">
                <img
                  src="/assets/icons/facebook.svg"
                  className="w-6 h-6 md:w-8 md:h-8"
                  alt="facebook"
                />
              </Link>
              <Link href="https://www.tiktok.com/">
                <img
                  src="/assets/icons/tiktok.svg"
                  className="w-8 h-8"
                  alt="tiktok"
                />
              </Link>
              <Link href="https://www.linkedin.com/">
                <img
                  src="/assets/icons/zalo.svg"
                  className="w-8 h-8 text-white"
                  alt="zalo"
                />
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
