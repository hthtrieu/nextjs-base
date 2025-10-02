"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ActivityCard = ({
  activity,
  index,
}: {
  activity: { name: string; image: string };
  index: number;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
      variants={fadeUp}
      transition={{ delay: index * 0.3 }}
    >
      <Card className="group p-0 overflow-hidden rounded-2xl w-full">
        <CardContent className="flex w-full h-full items-center justify-center p-0 relative m-0">
          <img
            src={activity.image}
            alt={activity.name}
            className="h-full w-full object-cover aspect-2/1"
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ActivityCard;
