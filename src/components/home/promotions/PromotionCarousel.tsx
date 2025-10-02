import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PromotionCard } from "./PromotionCard";
import mockPromotions from "./mock/promotion.json";
export const PromotionCarousel = () => {
  return (
    <div
      key={"top_students.title"}
      // transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex flex-col gap-4 md:gap-8">
        <Carousel
          opts={{
            align: "center",
            slidesToScroll: 1,
            loop: true,
            duration: 100,
            active: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {mockPromotions.map((promotion, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <div className="p-2">
                  <PromotionCard
                    promotion={{
                      name: promotion.name,
                      image: promotion.image,
                    }}
                    index={index}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-between">
            <div className="absolute top-1/2 left-2 flex items-center justify-center">
              <CarouselPrevious className="relative left-0 -translate-x-1/2 hover:-translate-x-1/2" />
            </div>
            <div className="absolute top-1/2 right-2 flex items-center justify-center">
              <CarouselNext className="relative right-0 translate-x-1/2 hover:translate-x-1/2" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
