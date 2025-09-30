import React from "react";

interface OfferItemProps {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
}

const OfferItem: React.FC<OfferItemProps> = ({
  icon,
  iconBg,
  iconColor,
  title,
  description,
}) => (
  <div className="text-white rounded-lg shadow p-4">
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0">
        <div
          className={`w-12 h-12 rounded-md flex items-center justify-center font-bold ${iconBg} ${iconColor}`}
        >
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-sm text-slate-300 mt-1 text-left">{description}</p>
      </div>
    </div>
  </div>
);

export default OfferItem;
