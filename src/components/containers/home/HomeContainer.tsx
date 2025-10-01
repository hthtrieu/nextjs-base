import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { HeroCarousel } from "@/components/hero/HeroCarousel";
import About from "@/components/home/about-us/About";
import { ActivityGallery } from "@/components/home/activities/ActivityGallery";
import { Contact } from "@/components/home/contact/Contact";
import { CourseList } from "@/components/home/courses/CourseList";
import { FacilityCarousel } from "@/components/home/facilities/FacilityCarousel";
import { PromotionCarousel } from "@/components/home/promotions/PromotionCarousel";
import { StudentCarousel } from "@/components/home/top-students/StudentCarousel";
import React from "react";

export const HomeContainer = () => {
  return (
    <>
      <HeroCarousel />
      <MaxWidthWrapper>
        <div className="my-8" id="about">
          <About />
        </div>
        <div className="my-8" id="courses">
          <CourseList />
        </div>
        <div className="my-8">
          <PromotionCarousel />
        </div>
      </MaxWidthWrapper>
      <div className="my-8">
        <ActivityGallery />
      </div>
      <MaxWidthWrapper>
        <div className="my-8">
          <StudentCarousel />
        </div>
      </MaxWidthWrapper>
      <div className="my-8" id="facilities">
        <FacilityCarousel />
      </div>
      <div className="my-8" id="contact">
        <Contact />
      </div>
    </>
  );
};
