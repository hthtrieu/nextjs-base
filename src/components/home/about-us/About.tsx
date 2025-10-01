import React from "react";

const About = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12 py-8">
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="font-extrabold text-4xl md:text-5xl text-sky-800 leading-tight">
          Starfish English Center
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Với hơn <span className="text-red-500 font-bold text-xl">10 năm</span>{" "}
          hoạt động, chúng tôi tự hào đã đồng hành cùng hơn{" "}
          <span className="text-red-500 font-bold text-xl">5.000 học viên</span>{" "}
          chinh phục mục tiêu ngoại ngữ. Không chỉ mang đến chương trình học
          chất lượng, trung tâm còn thường xuyên tổ chức nhiều{" "}
          <span className="font-semibold text-sky-700">
            hoạt động ngoại khóa, câu lạc bộ
          </span>{" "}
          và{" "}
          <span className="font-semibold text-sky-700">sự kiện học viên</span>{" "}
          giúp việc học trở nên thú vị và hiệu quả hơn.
        </p>

        {/* Highlight stats */}
        <div className="flex gap-6 mt-6">
          <div className="bg-sky-100 p-4 rounded-xl shadow-md text-center">
            <p className="text-3xl font-extrabold text-sky-700">10+</p>
            <p className="text-sm text-gray-600">Năm hoạt động</p>
          </div>
          <div className="bg-sky-100 p-4 rounded-xl shadow-md text-center">
            <p className="text-3xl font-extrabold text-sky-700">5000+</p>
            <p className="text-sm text-gray-600">Học viên</p>
          </div>
        </div>
      </div>

      {/* Image block */}
      <div className="w-full md:w-1/2">
        <img
          src="/assets/backgrounds/hero2.jpg"
          alt="Học viên Starfish English Center"
          className="rounded-2xl shadow-lg w-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default About;
