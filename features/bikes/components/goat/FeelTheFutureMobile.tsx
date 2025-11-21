"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FeelTheFutureMobile() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!sectionRef.current) return;
        const ctx = gsap.context(() => {
            // Parallax image entrance
            gsap.fromTo(
                imgRef.current,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Title split animation
            const title = titleRef.current?.innerText.split(" ");
            if (title && titleRef.current) {
                titleRef.current.innerHTML = title
                    .map((word) => `<span class='inline-block opacity-0 translate-y-4'>${word}</span>`)
                    .join(" ");

                gsap.to(titleRef.current.querySelectorAll("span"), {
                    opacity: 1,
                    y: 0,
                    stagger: 0.12,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 90%",
                    },
                });
            }

            // Text fade-in
            gsap.fromTo(
                textRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 90%",
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
        relative w-fit flex flex-col items-center justify-start 
        bg-[#0A0A0A] overflow-hidden text-white
        pt-12 pb-10 px-5
      "
        >
            {/* Tech aura glow behind image */}
            <div className="absolute top-28 left-1/2 -translate-x-1/2 w-full h-60 bg-[#E4D27C]/15 blur-[90px] rounded-full z-0" />

            {/* Image section */}
            <div
                ref={imgRef}
                className="
          relative w-full max-w-[420px] h-60 sm:h-80 mb-6 rounded-lg overflow-hidden z-10
          shadow-[0_0_40px_rgba(228,210,124,0.1)]
        "
            >
                <Image
                    src="/images/bikes/goat-img.png"
                    alt="Serow Bike with Mountain Goat"
                    fill
                    quality={100}
                    priority
                    className="object-cover object-center scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Text section */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-[90%]">
                <h2
                    ref={titleRef}
                    className="
            text-[32px] sm:text-[36px] font-extrabold leading-snug
            tracking-wide uppercase text-stone drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]
          "
                >
                    FEEL THE FUTURE
                </h2>

                <p
                    ref={textRef}
                    className="
            text-[14px] sm:text-[15px] leading-relaxed text-gray-300 font-light
            backdrop-blur-md bg-black/30 px-4 py-3 rounded-lg
            shadow-[0_0_25px_rgba(0,0,0,0.3)]
          "
                >
                    The Serow is inspired by the Himalayan mountain goat — a master of
                    balance, agility, and endurance. Built with high-end alloy, Serow
                    merges lightweight precision with unshakable strength — ready to
                    conquer every climb and descent.
                </p>

                <button
                    className="
            mt-4 bg-linear-to-r from-[#E4D27C] to-[#D4B64F]
            text-black text-[14px] font-semibold tracking-wide
            px-8 py-3 rounded-full shadow-[0_0_25px_rgba(228,210,124,0.25)]
            active:scale-[0.97] transition-all duration-300
          "
                >
                    EXPLORE SEROW
                </button>
            </div>
        </section>
    );
}
