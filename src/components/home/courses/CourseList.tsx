import React from "react";
import { CourseCard } from "./CourseCard";
import mockCourseData from "./mock/courses.json";

export const CourseList = () => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8 transition-transform tracking-wide">
      {mockCourseData.map(
        (
          course: { description: string; name: string; image: string },
          index: number
        ) => (
          <div key={index}>
            <CourseCard course={{ ...course, index: index }} />
          </div>
        )
      )}
    </div>
  );
};
