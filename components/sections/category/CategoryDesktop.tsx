"use client";

import CategoryGrid from "./components/CategoryGrid";


export default function CategoryDesktop({onClose}: {onClose?: () => void}) {
  return (
    <section className="relative w-full text-white bg-superblack py-3">
      <div className="w-full mx-auto flex flex-col items-center">
        <CategoryGrid onClose={onClose} />
      </div>
    </section>
  );
}
