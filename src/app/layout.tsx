import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Wix_Madefor_Text,
  Wix_Madefor_Display,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";
import { getServerTranslations } from "@/i18n";
import { getLocale } from "@/i18n/utils";
import TranslationsProvider from "@/components/providers/TranslationsProvider";
import { SuspenseMotion } from "@/components/common/Suspense";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const wixMadeforText = Wix_Madefor_Text({
//   variable: "--font-wix-madefor-text",
//   subsets: ["latin"],
// });

const wixMadeforDisplay = Wix_Madefor_Display({
  variable: "--font-wix-madefor-display",
  subsets: ["latin"],
});
const wixMadeforText = localFont({
  src: [
    {
      path: "../fonts/WixMadeforText-VariableFont_wght.ttf",
      style: "normal",
    },
  ],
  variable: "--font-wix-madefor-text",
});

export const metadata: Metadata = {
  title: "Starfish English Center",
  description: "To be Your wings to be the future",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const { resources } = await getServerTranslations(locale);
  return (
    <>
      <html lang="en">
        <body
          className={`${wixMadeforDisplay.variable} ${wixMadeforText.variable} antialiased relative flex min-h-screen flex-col overflow-x-hidden`}
        >
          {/* <TranslationsProvider locale={locale} resources={resources}> */}
          <TranslationsProvider locale={locale} resources={resources}>
            <Suspense
              fallback={
                <>
                  <SuspenseMotion />
                </>
              }
            >
              {children}{" "}
            </Suspense>
          </TranslationsProvider>
          {/* <TranslationsProvider/> */}
        </body>
      </html>
    </>
  );
}
