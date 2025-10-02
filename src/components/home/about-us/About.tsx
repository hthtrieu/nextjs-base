// app/(site)/_components/About.tsx  — Server Component
import Image from "next/image";

type HeadingTag = "h1" | "h2" | "h3";

interface AboutProps {
  centerName?: string;
  years?: number;
  students?: number;
  imageSrc?: string;
  imageAlt?: string;
  headingAs?: HeadingTag; // dùng "h1" ở trang landing chính, còn lại "h2"
  canonicalUrl?: string; // ví dụ: https://your-domain.com
  logoUrl?: string; // logo absolute URL nếu có
  sameAs?: string[]; // social links
}

const formatNumber = (n: number) => new Intl.NumberFormat("vi-VN").format(n);

export default function About({
  centerName = "Starfish English Center",
  years = 10,
  students = 5000,
  imageSrc = "/assets/backgrounds/hero2.jpg",
  imageAlt = "Lớp học & hoạt động học viên tại Starfish English Center",
  headingAs = "h2",
  canonicalUrl = "https://example.com",
  logoUrl,
  sameAs = [],
}: AboutProps) {
  const Heading = headingAs;

  // JSON-LD: EducationalOrganization (SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: centerName,
    url: canonicalUrl,
    ...(logoUrl ? { logo: logoUrl } : {}),
    description:
      `${centerName} với hơn ${years} năm hoạt động và ${formatNumber(
        students
      )} học viên. ` +
      "Chương trình học chất lượng, hoạt động ngoại khóa, câu lạc bộ và sự kiện giúp học viên tiến bộ bền vững.",
    sameAs,
  };

  return (
    <div
      className="relative isolate overflow-hidden rounded-2xl bg-white p-6 md:p-10 shadow-sm ring-1 ring-slate-100"
      aria-labelledby="about-heading"
    >
      {/* Decorative blobs (pure CSS, SSR-safe) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-300 opacity-60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-red-400 opacity-60 blur-3xl"
      />

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        {/* Text block first in DOM for SEO */}
        <div className="flex flex-col justify-center order-2 md:order-1">
          <Heading
            id="about-heading"
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-sky-900"
          >
            {centerName}
          </Heading>

          <p className="mt-4 text-base md:text-lg leading-7 text-slate-700">
            {centerName} có hơn{" "}
            <strong className="font-bold text-sky-800">{years}+ năm</strong>{" "}
            kinh nghiệm đào tạo, đồng hành cùng hơn{" "}
            <strong className="font-bold text-sky-800">
              {formatNumber(students)} học viên
            </strong>{" "}
            chinh phục mục tiêu ngoại ngữ. Chúng tôi mang đến chương trình học
            <em className="not-italic"> chất lượng, lộ trình rõ ràng</em>, cùng
            nhiều hoạt động ngoại khóa, câu lạc bộ và sự kiện giúp học viên
            luyện tập giao tiếp, tự tin tiến bộ mỗi ngày.
          </p>

          {/* Stats */}
          <dl className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 max-w-md">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <dd className="text-3xl md:text-4xl font-extrabold text-sky-700">
                {years}+
              </dd>
              <dt className="text-sm text-slate-600">Năm hoạt động</dt>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <dd className="text-3xl md:text-4xl font-extrabold text-sky-700">
                {formatNumber(students)}+
              </dd>
              <dt className="text-sm text-slate-600">Học viên</dt>
            </div>
          </dl>

          {/* Internal links (crawlable) */}
          <nav
            className="mt-6 flex flex-wrap items-center gap-3"
            aria-label="Liên kết nhanh"
          >
            <a
              href="#contact"
              className="rounded-xl bg-sky-800 px-4 py-2 text-white font-semibold shadow hover:bg-red-700"
            >
              Tư vấn miễn phí
            </a>
            <a
              href="#courses"
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-700 font-medium shadow-sm hover:border-slate-400 hover:text-slate-900"
            >
              Khóa học
            </a>
          </nav>
        </div>

        {/* Image block */}
        <div className="order-1 md:order-2">
          <figure className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-md">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1200}
              height={800}
              className="h-64 w-full object-cover md:h-[420px]"
              priority={headingAs === "h1"} // ưu tiên LCP khi dùng làm section chính
            />
            <figcaption className="sr-only">{imageAlt}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
