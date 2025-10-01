"use client";
import React from "react";
import { MaxWidthWrapper } from "@/components/common/MaxWidthWrapper";
import { useTrans } from "@/hooks/useTrans";
import ActivityCard from "./ActivityCard";
import { motion } from "framer-motion";
import mockActivities from "./mock/mockActivities.json";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const ActivityGallery = () => {
  const { t } = useTrans();
  return (
    <div className="bg-gradient-to-tl bg-yellow-400 w-full h-fit py-4 md:py-16">
      <MaxWidthWrapper>
        <div>
          <h2 className="font-bold text-xl md:text-4xl text-sky-800 mb-4 md:mb-8 text-center">
            {t("activities.title")}
          </h2>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-2 ">
          {mockActivities.map((activity, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5, once: true }}
              variants={fadeUp}
              transition={{ delay: index * 0.3 }}
              className="w-full md:w-1/3"
            >
              <ActivityCard
                activity={{
                  name: activity?.name,
                  image: activity?.image,
                }}
              />
            </motion.div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
