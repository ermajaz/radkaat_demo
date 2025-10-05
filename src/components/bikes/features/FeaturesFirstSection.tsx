// components/FeaturesSection.tsx
"use client";

import Image from "next/image";

export default function FeaturesFirstSection() {
  return (
    <section className="w-full bg-black">
      <div className="w-full flex items-center justify-between">
        {/* Left Side */}
        <div className="w-[50%] relative flex items-center justify-center">
          {/* Background Image */}
          <Image
            quality={100}
            src="/images/bikes/frameset.png"
            alt="Bike Frame"
            width={600}
            height={600}
            className="w-full h-full object-contain"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-sandstorm font-extrabold text-6xl md:text-[112px] leading-[150px] tracking-[35px] text-start">
              <div className="flex justify-center space-x-6">
                <span>F</span>
                <span>E</span>
                <span>A</span>
              </div>
              <div className="flex justify-center space-x-6">
                <span>T</span>
                <span>U</span>
                <span>R</span>
              </div>
              <div className="flex justify-start space-x-6">
                <span>E</span>
                <span>S</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-[50%] flex items-center justify-center">
          <Image
            quality={100}
            src="/images/bikes/feature-right.png" // replace with your right image
            alt="Bike"
            width={800}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
