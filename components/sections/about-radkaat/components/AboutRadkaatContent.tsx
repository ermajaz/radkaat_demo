"use client";

export default function AboutRadkaatContent() {
  return (
    <div className="flex flex-col fade-in max-w-[780px]">

      {/* Heading */}
      <h1 className="fade-in text-[48px] font-bold leading-[1.1] uppercase text-white">
        THE FLAG WE CARRY
      </h1>

      {/* Subheading */}
      <p className="fade-in text-[24px] font-bold text-sandstorm mt-2 mb-3">
        They call us different; we call it making a difference.
      </p>

      {/* Body */}
      <div className="fade-in text-[16px] text-white leading-8 space-y-2">
        <p>
          The Himalayas are our playground, the world our canvas, Mother Nature our compass.
          <br />We don’t stand still. We move forward. We move together.
        </p>

        <p>
          We are <span className="text-sandstorm font-semibold">Radkaat</span> – a fierce
          community of homegrown athletes, adventurers, seekers, and believers
          from the Indian Himalaya, <br /> crafting world-class products and experiences.
        </p>

        <p className="text-[32px] text-white font-bold mt-2">
          Every trail. Every peak. Every now
        </p>
      </div>
    </div>
  );
}
