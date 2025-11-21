"use client";

import { useHeroScrollEffects } from "../hooks/useHeroScrollEffects";


interface Props {
  text: string;
}

export default function HeroQuots({ text }: Props) {
  const { quoteOpacity } = useHeroScrollEffects();

  return (
    <h1
      className="absolute w-full text-center text-white font-extrabold uppercase 
                 tracking-wide text-4xl md:text-6xl px-6 leading-tight 
                 drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]"
      style={{
        bottom: "10%",
        opacity: quoteOpacity,
        transition: "opacity 0.2s ease-out",
      }}
    >
      “{text}”
    </h1>
  );
}
