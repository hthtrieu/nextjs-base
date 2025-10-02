"use client";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export const PromotionCard = ({
  promotion,
  index,
}: {
  promotion: any;
  index: number;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ delay: 0.5 }}
    >
      <Card className="group p-0 overflow-hidden rounded-none">
        <CardContent className="flex aspect-2/1 max-h-[480px] items-center justify-center p-0 relative">
          <img
            src={promotion.image}
            alt={promotion.name}
            className="h-full w-full object-cover"
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};
