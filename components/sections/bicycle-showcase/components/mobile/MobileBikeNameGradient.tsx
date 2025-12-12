"use client";

export default function MobileBikeNameGradient({
  name,
  gradient,
}: any) {
  return (
    <h1
      className="
        text-[90px]
        font-extrabold
        tracking-[20px] pl-5
        select-none 
        pointer-events-none 
        whitespace-nowrap
      "
      style={{
        backgroundImage: gradient,
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      {name}
    </h1>
  );
}
