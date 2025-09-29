"use client";
import { use } from "react";
import { CourseContainer } from "@/components/containers/course/CourseContainer";
export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  //fetch data by slug
  return (
    <div>
      {/* <p>{slug}</p> */}
      <CourseContainer course={slug} />
    </div>
  );
}
