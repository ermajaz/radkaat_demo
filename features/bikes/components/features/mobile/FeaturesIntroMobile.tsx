"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function FeaturesIntroMobile() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const letters = lettersRef.current?.querySelectorAll("span");
    const bg = bgRef.current;

    if (!section || !letters || !bg) return;

    // reset states
    gsap.set(bg, { x: "100%" });
    gsap.set(letters, { y: 40, opacity: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    /* ---------------------------------------------------
          STEP 1 — Background Slide (Right → Left)
    --------------------------------------------------- */
    tl.to(bg, {
      x: "0%",
      ease: "power2.out",
      duration: 1,
    });

    /* ---------------------------------------------------
          STEP 2 — FEATURES letters rise one-by-one
    --------------------------------------------------- */
    tl.to(
      letters,
      {
        y: -90,
        stagger: {
          each: 0.15,
          ease: "power2.inOut",
        },
        duration: 1.2,
      },
      "+=0.1" // ensures letters start RIGHT AFTER bg finishes
    );

    /* ---------------------------------------------------
          STEP 3 — Fade all out at end
    --------------------------------------------------- */
    tl.to(letters, {
      opacity: 0,
      duration: 0.4,
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative w-full h-[50vh]
        bg-superblack text-white
        overflow-hidden flex items-center justify-center
      "
    >
      {/* Sliding background image */}
      <div
        ref={bgRef}
        className="
          absolute inset-0
          bg-[url('/images/bikes/frameset.png')]
          bg-cover bg-right
        "
      />

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[260px] h-[260px] bg-sandstorm/25 blur-[100px] rounded-full" />
      </div>

      {/* FEATURES Letters */}
      <div ref={lettersRef} className="relative z-20 px-15 text-center">
        <div className="text-[54px] font-extrabold tracking-[35px] text-sandstorm uppercase">
          {"FEATURES".split("").map((ch, i) => (
            <span key={i} className="inline-block mx-1">
              {ch}
            </span>
          ))}
        </div>

        <p className="mt-10 text-[14px] text-white/60">
          Dive into the technology behind your ride.
        </p>
      </div>
    </section>
  );
}
