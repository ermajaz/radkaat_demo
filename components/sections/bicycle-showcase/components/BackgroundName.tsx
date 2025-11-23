"use client";

type Colors = {
  gradient: string; // comma-separated: "#C6B783, #806D2A"
  cta: string;
};

export default function BackgroundName({
  name,
  colors,
}: {
  name: string;
  colors: Colors;
}) {
  const [from, to] = colors.gradient.split(",").map((c) => c.trim());

  return (
    <div className="absolute bottom-[50%] left-10 right-0 flex items-center justify-center pointer-events-none">
      <h1
        className="text-[260px] font-extrabold tracking-[70px] select-none
                   bg-clip-text text-transparent opacity-[0.5]"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${from}, ${to})`,
          WebkitBackgroundClip: "text",
        }}
        aria-hidden
      >
        {name}
      </h1>
    </div>
  );
}
