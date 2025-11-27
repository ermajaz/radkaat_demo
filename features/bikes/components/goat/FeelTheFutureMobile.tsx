"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {motion} from "framer-motion";

export default function FeelTheFutureMobile() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      /* -------------------------
         Bike Image Float Parallax
      --------------------------*/
      gsap.fromTo(
        imgRef.current,
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      /* -------------------------
         Split Title Reveal
      --------------------------*/
      const words = titleRef.current?.innerText.split(" ");

      if (titleRef.current && words) {
        titleRef.current.innerHTML = words
          .map(
            (word) =>
              `<span class="inline-block opacity-0 translate-y-4">${word}</span>`
          )
          .join(" ");

        gsap.to(titleRef.current.querySelectorAll("span"), {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
          },
        });
      }

      /* -------------------------
         Description Fade-Up
      --------------------------*/
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 95%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative w-full h-[70vh]
        flex flex-col items-center justify-start
        bg-superblack overflow-hidden text-white
        px-5 pt-10 pb-6
      "
    >
      {/* === Ambient Glow */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-[90%] h-[45%] bg-[#E4D27C]/12 blur-[130px] rounded-full" />
      </div>

      {/* === Floating Bike Card */}
      <div
        ref={imgRef}
        className="
          relative w-full max-w-[430px] h-[55%] mb-3 rounded-xl 
          overflow-hidden shadow-[0_0_50px_rgba(228,210,124,0.15)]
          z-5
        "
      >
        <Image
          src="/images/bikes/goat-img.png"
          alt="Serow Bike"
          fill
          quality={100}
          priority
          className="object-cover object-center scale-[1.15]"
        />

        {/* Top → Transparent Light Fade */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      {/* === Text Block */}
      <div className="relative z-6 w-full flex flex-col items-center text-center">
        <h2
          ref={titleRef}
          className="
            text-[30px] font-extrabold
            uppercase tracking-widest leading-tight
            drop-shadow-[0_3px_10px_rgba(0,0,0,0.7)]
          "
        >
          FEEL THE FUTURE
        </h2>

        {/* Description */}
        <p
          ref={textRef}
          className="
            mt-3 text-[14px] text-gray-300 leading-relaxed
            bg-black/50 backdrop-blur-md px-5 py-3 rounded-lg
            shadow-[0_0_25px_rgba(0,0,0,0.3)]
            max-w-[340px]
          "
        >
          Inspired by the Himalayan mountain goat — master of balance,
          agility, and endurance. Serow merges lightweight alloy precision
          with unshakable strength for every climb and descent.
        </p>

        {/* CTA Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          className="
            mt-4 px-8 py-3 rounded-full
            bg-sandstorm
            text-black text-[14px] font-semibold tracking-wide
            transition-all
          "
        >
          Explore Serow
        </motion.button>
      </div>
    </section>
  );
}
