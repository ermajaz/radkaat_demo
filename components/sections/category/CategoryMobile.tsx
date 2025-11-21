"use client";

import CategoryMobileGrid from "./components/CategoryMobileGrid";



export default function CategoryMobile() {
  return (
     <section
      className="
        relative w-full h-[80vh] overflow-hidden 
        bg-[#090909] text-white flex flex-col justify-center items-center px-4 py-6
      "
    >
      <CategoryMobileGrid />
    </section>
  );
}
