import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useTrans } from "@/hooks/useTrans";
import { motion } from "framer-motion";

export const CourseCard = ({
  course,
}: {
  course: { name: string; description: string; image: string };
}) => {
  const { t } = useTrans();
  const [hovered, setHovered] = useState(false);

  return (
    <Card className="group w-full aspect-3/4 !p-0 overflow-clip gap-0  !max-h-[520px] md:h-fit">
      <CardContent className="!p-0 h-10/12 !m-0 relative cursor-pointer">
        <img
          src={course.image}
          alt={course.name}
          className="object-cover h-full w-full"
        />
        {/* <p
          className="absolute bottom-0 left-0 p-4 text-white font-semibold text-lg md:text-2xl
            bg-sky-800 rounded-t-lg h-2/12 w-3/4 text-wrap break-after-auto
            transition-colors duration-500 group-hover:scale-110
          "
        >
          {t(course.name)}
        </p> */}
      </CardContent>

      <CardFooter
        className="w-full h-4/12 bg-sky-800 flex-col
          transition-colors duration-500 !items-start p-4 cursor-pointer hover:transform translate-y-0"
      >
        <p className="font-bold text-lg md:text-2xl text-white text-start">
          {t(course.name)}
        </p>
        <p className="font-semibold text-sm md:text-base text-white text-start">
          {t(course.description)}
        </p>
        {/* <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={hovered ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          // className="absolute bottom-0 left-0 right-0 h-1/3 p-4 bg-sky-800/80 text-white"
        >
         
        </motion.div> */}
      </CardFooter>
    </Card>
  );
};
