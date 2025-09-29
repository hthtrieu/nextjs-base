import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Hero } from "./Hero";
export const HeroCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="h-screen max-h-[745px]">
        {/* <CarouselItem className="overflow-hidden">
          <Hero
            data={{
              title: "Home",
              description: "Home description",
              homeBanner: "/assets/backgrounds/hero1.png",
            }}
          />
        </CarouselItem> */}
        <CarouselItem className="overflow-hidden">
          <Hero
            data={{
              title: "Home",
              description: "Home description",
              homeBanner: "/assets/backgrounds/hero2.jpg",
            }}
          />
        </CarouselItem>
        <CarouselItem className="overflow-hidden">
          <Hero
            data={{
              title: "Home",
              description: "Home description",
              homeBanner: "/assets/backgrounds/hero3.png",
            }}
          />
        </CarouselItem>
      </CarouselContent>
      <div className="flex justify-between">
        <div className="absolute top-1/2 left-2 flex items-center justify-center">
          <CarouselPrevious className="relative bg-transparent left-0 -translate-x-0 hover:-translate-x-0" />
        </div>
        <div className="absolute top-1/2 right-2 flex items-center justify-center">
          <CarouselNext className="relative bg-transparent right-0 translate-x-0 hover:translate-x-0" />
        </div>
      </div>
    </Carousel>
  );
};
