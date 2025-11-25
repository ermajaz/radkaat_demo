"use client";

import CategoryCarouselMobile from "./components/CategoryCarouselMobile";



export default function CategoryMobile({ onClose }: { onClose?: () => void }) {
  return (
    <section className="w-full bg-superblack text-white py-4">
      <CategoryCarouselMobile onClose={onClose} />
    </section>
  );
}
