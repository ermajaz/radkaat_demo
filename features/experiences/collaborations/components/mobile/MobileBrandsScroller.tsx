"use client";

import Image from "next/image";

const brands = [
  { id: "hartex", img: "/images/experience/hartex.png" },
  { id: "hero", img: "/images/experience/herocycle.png" },
  { id: "cratoni", img: "/images/experience/cratoni.png" },
  { id: "granite", img: "/images/experience/granite.png" },
  { id: "hartex-1", img: "/images/experience/hartex.png" },
  { id: "hero-1", img: "/images/experience/herocycle.png" },
];

export default function MobileBrandsScroller() {
  return (
    <div className="relative z-10 px-6 pt-[200px] pb-24">
      <div className="grid grid-cols-2 gap-y-14">
        {brands.map((b, index) => {
          const isRight = index % 2 === 1;

          return (
            <div
              key={b.id}
              className={`
                relative
                w-full
                h-25
                rounded-2xl
                shadow-2xl shadow-black/50
                flex items-center justify-center
                transition-transform
              `}
              style={{
                transform: "rotate(-2deg)",
                marginLeft: isRight ? "-10px" : "0px", // 👈 overlap
                marginTop: isRight ? "-8px" : "0px",
                zIndex: isRight ? 1 : 2,               // 👈 left card on top
              }}
            >
              <Image
                src={b.img}
                alt={b.id}
                width={220}
                height={100}
                className="object-contain rounded-2xl"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
