"use client";

export default function GoatStickyHeading() {
  return (
    <div
      className="
        sticky top-0 z-50
        pointer-events-none
        pt-8
      "
    >
      <div className="flex flex-col items-center text-center px-6">
        {/* Heading */}
        <div className="flex items-center gap-5 mb-4">
          <span className="text-black text-[32px] leading-none">★</span>

          <span className="text-[33px] font-extrabold uppercase tracking-wide text-superblack">
            Introducing Goat Series
          </span>

          <span className="text-black text-[32px] leading-none">★</span>
        </div>
      </div>
    </div>
  );
}
