// app/seo/LocalBusinessJsonLd.tsx
export default function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: "https://schema.org/EducationalOrganization",
    name: "Starfish English Center",
    url: "https://starfish-center.com",
    logo: "https://www.starfish-center.com/assets/icons/logo.jpg",
    email: "centerstarfish34@gmail.com",
    telephone: "+84-939-027-417",
    address: {
      "@type": "PostalAddress",
      streetAddress: "34 Nguyễn Thần Hiến",
      addressLocality: "Ngũ Hành Sơn",
      addressRegion: "Đà Nẵng",
      addressCountry: "VN",
    },
    // sameAs: ['https://www.facebook.com/yourpage'], // thêm nếu có URL page
    sameAs: [
      "https://www.facebook.com/profile.php?id=100057569344901",
      "https://zalo.me/0939027417",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "21:00",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
