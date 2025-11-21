"use client";

import CategoryGrid from "./components/CategoryGrid";


export default function CategoryDesktop() {
  return (
    <section className="relative w-full text-white bg-superblack p-3">
      <div className="w-full mx-auto flex flex-col items-center">
        <CategoryGrid />
      </div>
    </section>
  );
}
