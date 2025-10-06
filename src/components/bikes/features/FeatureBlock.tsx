"use client";

import Image from "next/image";

type FeatureBlockProps = {
  index: number;
  label: string;
  title: string;
  points: string[];
  image: string;
};

export default function FeatureBlock({
  index,
  label,
  title,
  points,
  image,
}: FeatureBlockProps) {
  return (
    <section className="w-full bg-superblack h-[calc(100vh-70px)] text-stone pt-[60px] pl-10">
      <div className="w-full h-full mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="relative w-[50%] h-full pr-6 py-5">
          {/* Label */}
          <h2 className="text-[32px] font-bold uppercase text-sandstorm mb-1">
            {label}
          </h2>

          {/* Title */}
          <span className="text-[32px] font-semibold">{title}</span>

          {/* Bullet Points */}
          <ul className="list-disc mt-4 text-[24px] list-inside space-y-2">
            {points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          {/* Index Number */}
          <span className="absolute bottom-0 left-0 text-[128px] font-extrabold text-stone opacity-40">
            {index.toString().padStart(2, "0")}
          </span>
        </div>

        {/* Right Section - Image */}
        <div className="w-[50%] md:w-1/2 bg-black h-full flex justify-center md:justify-end">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            quality={100}
            className="object-cover w-full h-[625px]"
          />
        </div>
      </div>
    </section>
  );
}
