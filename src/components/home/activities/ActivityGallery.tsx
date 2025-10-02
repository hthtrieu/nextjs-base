import React from "react";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import ActivityCard from "./ActivityCard";
import mockActivities from "./mock/mockActivities.json";

export const ActivityGallery = () => {
  return (
    <div className="bg-gradient-to-tl bg-yellow-400 w-full h-fit py-4 md:py-16">
      <MaxWidthWrapper>
        <div>
          <h2 className="font-bold text-xl md:text-4xl text-sky-800 mb-4 md:mb-8 text-center">
            {"Hoạt động ở Starfish"}
          </h2>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-2 ">
          {mockActivities.map((activity, index) => (
            <div key={index} className="w-full md:w-1/3">
              <ActivityCard
                activity={{
                  name: activity?.name,
                  image: activity?.image,
                }}
                index={index}
              />
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
