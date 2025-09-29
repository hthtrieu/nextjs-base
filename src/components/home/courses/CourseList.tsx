"use client";
import React from "react";
import { Constants } from "@/lib/constant";
import { CourseCard } from "./CourseCard";
import { motion } from "framer-motion";
import mockCourseData from "./mock/courses.json";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const CourseList = () => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8 transition-transform tracking-wide">
      {mockCourseData.map(
        (
          course: { description: string; name: string; image: string },
          index: number
        ) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: true }}
            variants={fadeUp}
            transition={{ delay: index * 0.3 }}
          >
            <CourseCard course={course} />
          </motion.div>
        )
      )}
    </div>
  );
};
