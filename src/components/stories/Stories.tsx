"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

const Stories = () => {
  useEffect(() => {
    const scrollTriggerSettings = {
      trigger: ".main",
      start: "top 25%",
      toggleActions: "play reverse play reverse",
    };

    const leftXValues = [-800, -900, -400];
    const rightXValues = [800, 900, 400];
    const leftRotationValues = [-30, -20, -35];
    const rightRotationValues = [30, 20, 35];
    const yValues = [100, -150, -400];
    gsap.utils.toArray(".row").forEach((row, index) => {
      const cardLeft = row.querySelector(".card-left");
      const cardRight = row.querySelector(".card-right");

      gsap.to(cardLeft, {
        x: leftXValues[index],
        scrollTrigger: {
          trigger: ".main",
          start: "top center",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            cardLeft.style.transform = `translateX(${
              progress * leftXValues[index]
            }px) translateY(${progress * yValues[index]}px) rotate(${
              progress * leftRotationValues[index]
            }deg)`;

            cardRight.style.transform = `translateX(${
              progress * rightXValues[index]
            }px) translateY(${progress * yValues[index]}px) rotate(${
              progress * rightRotationValues[index]
            }deg)`;
          },
        },
      });
    });

    gsap.to(".logo", {
      scale: 1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    });

    gsap.to(".line p", {
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    });

    gsap.to("button", {
      y: 0,
      opacity: 1,
      delay: 0.25,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  const generateRows = () => {
    const rows = [];
    for (let i = 0; i < 20; i++) {
      rows.push(
        <div className="row" key={i}>
          <div className="card card-left">
            <img src={`/images/img-${2 * i - 1}.avif`} alt="" />
          </div>
          <div className="card card-right">
            <img src={`/images/img-${2 * i}.avif`} alt="" />
          </div>
        </div>
      );
    }
    return rows;
  };
  return (
    <>
      <ReactLenis>
        <section className="hero w-screen h-screen flex justify-center items-center relative">
          <div className="img w-1/2 aspect-square">
            <img
              src="/images/website-logo.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        <section className="main w-screen h-[150vh] flex flex-col relative">
          <div className="main-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="logo w-[150px] h-[150px] rounded-full border-2 border-white overflow-hidden scale-0">
              <img
                src="/images/website-logo.png"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="copy mt-8 flex flex-col items-center gap-2">
              {[
                "Delve into coding without clutter.",
                "One subscription. Endless web design.",
                "Take the fast lane to mastery.",
              ].map((text, idx) => (
                <div key={idx} className="line overflow-hidden h-7">
                  <p className="translate-y-8 text-2xl">{text}</p>
                </div>
              ))}
            </div>

            <div className="btn mt-6">
              <button className="px-6 py-3 text-lg text-white border-2 border-white rounded-full opacity-0 translate-y-8">
                Get PRO
              </button>
            </div>
          </div>

          {/* Image Rows */}
          {generateRows()}
        </section>
        <section className="footer w-screen h-[50vh] flex items-start justify-center bg-gray-900 pt-8">
          <Link href="#" className="text-white text-[4vw]">
            Link in description
          </Link>
        </section>
      </ReactLenis>
    </>
  );
};

export default Stories;
