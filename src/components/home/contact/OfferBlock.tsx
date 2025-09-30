import React from "react";
import dynamic from "next/dynamic";

const CountdownTo2359 = dynamic(() => import("./CountDownTimer"), {
  ssr: false,
});
import OfferItem from "./offer/OfferItem";
const mockOffers = [
  {
    icon: "FREE",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    title: "Kiểm tra đầu vào miễn phí",
    description: "Xác định trình độ hiện tại và nhận lộ trình học cá nhân hóa.",
  },
  {
    icon: "-10%",
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-600",
    title: "Giảm 10% khi đóng trọn khóa",
    description: "Thanh toán 1 lần - tiết kiệm và đảm bảo chỗ học.",
  },
  {
    icon: "Giảm",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    title: "Ưu đãi cho anh/chị/em ruột",
    description:
      "2 học viên: giảm 10%/tháng • 3 học viên: miễn phí học phí cho 1 em.",
  },
];

export const OfferBlock = () => {
  return (
    <div>
      <section aria-labelledby="offers-heading" className="space-y-4 text-left">
        <h2
          id="offers-heading"
          className="text-lg font-bold text-white md:text-2xl"
        >
          Nhanh đăng ký để nhận ưu đãi
        </h2>
        {mockOffers.map((offer, idx) => (
          <OfferItem
            key={idx}
            icon={offer.icon}
            iconBg={offer.iconBg}
            iconColor={offer.iconColor}
            title={offer.title}
            description={offer.description}
          />
        ))}
      </section>

      <CountdownTo2359 />
    </div>
  );
};
