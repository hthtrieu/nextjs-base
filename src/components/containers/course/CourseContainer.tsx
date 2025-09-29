import React from "react";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";

export const CourseContainer = ({ course }: { course: any }) => {
  const { name, description } = course;
  return (
    <div>
      <MaxWidthWrapper>
        {"Course Container"}
        <h1>{name}</h1>
        <p>{description}</p>
      </MaxWidthWrapper>
    </div>
  );
};
