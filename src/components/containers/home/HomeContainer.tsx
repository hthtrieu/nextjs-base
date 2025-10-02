import LocalBusinessJsonLd from "@/app/seo/LocalBusinessJsonLd";
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
      <LocalBusinessJsonLd />
      <HeroCarousel />
      <MaxWidthWrapper>
        <section className="my-8" id="about">
          <About />
        </section>
        <section className="my-8" id="courses">
          <CourseList />
        </section>
        <section id="promotions" className="my-8">
          <PromotionCarousel />
        </section>
      </MaxWidthWrapper>
      <section id="activities" className="my-8">
        <ActivityGallery />
      </section>
      <MaxWidthWrapper>
        <section id="top-students" className="my-8">
          <StudentCarousel />
        </section>
      </MaxWidthWrapper>
      <section className="my-8" id="facilities">
        <FacilityCarousel />
      </section>
      <section className="my-8" id="contact">
        <Contact />
      </section>
    </>
  );
};
