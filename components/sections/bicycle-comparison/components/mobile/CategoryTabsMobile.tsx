"use client";

export default function CategoryTabsMobile({ categories, active, setActive }: any) {
  return (
    <div className="flex overflow-x-auto gap-3 scrollbar-hide">
      {categories.map((cat: string) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-4 py-2 rounded-md text-xs whitespace-nowrap ${
            active === cat ? "bg-white text-black" : "bg-[#1c1c1c] text-white/70"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
