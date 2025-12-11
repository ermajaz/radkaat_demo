"use client";

export default function BikeNameInGradient({
  name,
  gradient,
  className = "",
}: {
  name: string;
  gradient: string;
  className?: string;
}) {

  return (
    <h1
      className={`
        w-full text-center text-[180px] font-extrabold 
        tracking-[45px] ml-[45px]
        select-none pointer-events-none 
        whitespace-nowrap
        ${className}
      `}
      style={{
        backgroundImage: `${gradient}`,
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      {name}
    </h1>
  );
}
