import { Card, CardContent } from "@/components/ui/card";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const PromotionCard = ({ promotion }: { promotion: any }) => {
  return (
    <div>
      <Card className="group p-0 overflow-hidden rounded-none">
        <CardContent className="flex aspect-2/1 max-h-[480px] items-center justify-center p-0 relative">
          <img
            src={promotion.image}
            alt={promotion.name}
            className="h-full w-full object-cover"
          />
        </CardContent>
      </Card>
    </div>
  );
};
