"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function MobileSpecSwiper({ specs, onViewMore }: any) {
  return (
    <div className="mt-8 px-4">
      <Swiper spaceBetween={14} slidesPerView={1.2}>
        {specs.map((s: any) => (
          <SwiperSlide key={s.key}>
            <div className="bg-[#1a1a1a] border border-white/10 p-4 rounded-xl">
              <p className="text-[10px] text-white/40 uppercase">{s.label}</p>
              <p className="text-sm mt-1 font-semibold">{s.value}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={onViewMore}
        className="text-center w-full mt-3 text-xs text-sandstorm"
      >
        View Full Specs →
      </button>
    </div>
  );
}
