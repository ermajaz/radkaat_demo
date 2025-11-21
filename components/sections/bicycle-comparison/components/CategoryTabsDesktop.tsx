"use client";

export default function CategoryTabsDesktop({
  categories,
  active,
  setActive,
}: {
  categories: string[];
  active: string;
  setActive: (c: string) => void;
}) {
  return (
    <div className="w-full mt-2 bg-[#121212] rounded-lg p-1.5 flex gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`flex-1 p-4 text-xs font-bold rounded-md transition ${
            active === cat
              ? "bg-white text-black shadow-md"
              : "text-white/80 hover:text-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
