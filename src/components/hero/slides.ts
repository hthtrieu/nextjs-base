export type HeroSlide = {
  title: string; // H1 cho slide đầu, H2 cho các slide sau
  description: string;
  image: string;
  ctaText?: string;
  ctaHref?: string;
};

export const slides: HeroSlide[] = [
  {
    title: "Starfish English Center",
    description:
      "Hơn 10 năm kinh nghiệm, lộ trình cá nhân hóa. Test đầu vào miễn phí & ưu đãi đăng ký.",
    image: "/assets/backgrounds/hero2.jpg",
    ctaText: "Đăng ký ngay",
    ctaHref: "#contact",
  },
  {
    title: "Lớp học chất lượng",
    description: "Giáo viên kinh nghiệm, theo dõi tiến độ từng tuần.",
    image: "/assets/backgrounds/hero3.png",
    ctaText: "Xem lịch học",
    ctaHref: "#course",
  },
];
