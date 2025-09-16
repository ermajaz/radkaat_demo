"use client";

import React from "react";
import Link from "next/link";
import { LinkPreview } from "../ui/link-preview";

export default function WarrenTextBlock() {
  return (
    <section className="w-full h-[70vh] flex items-center justify-center p-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-6 text-base leading-9.5 text-white">
          <p>
            We&apos;ve gotten to know{" "}
            <LinkPreview url="https://b2b.cyclecircle.one" className="font-bold mx-1 text-sandstorm">
              Cyclecircle
            </LinkPreview>
            over the past six years, and he’s truly one of the nicest, most
            genuine, and humble people out there. All of that is just the cherry
            on top of what he can do on a bike. As folks around here like to say
            — and as his good friend Jubal Davis often puts it — “Warren is your
            favorite rider’s favorite rider.”
          </p>

          <p>
            Warren made his official Yeti debut in 2019 after participating in
            the{" "}
            <LinkPreview url="https://b2b.cyclecircle.one" className="font-bold mx-1 text-sandstorm">
              SB140 Launch Video
            </LinkPreview>
            and has since been a core part of our brand. He began with the Yeti
            / FOX Devo Team in 2020, traveling both domestically and
            internationally in search of podiums. He maintained his school,
            work, training, and racing schedule while on the Yeti Team, all
            while showcasing his undeniable racing craft. Ultimately, school
            took priority, and Kniss transitioned from racer to ambassador. He
            has been keeping busy since with projects like ‘
            <a
              href="https://www.youtube.com/watch?v=17CSRC4agj0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sandstorm hover:underline"
            >
              Of Ten Thousand
            </a>
            ,’ ‘
            <a
              href="https://www.youtube.com/watch?v=IIHV7clz0lc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sandstorm hover:underline"
            >
              B +W // 001
            </a>
            &apos;, ‘
            <a
              href="https://www.youtube.com/watch?v=iEN22LUzdUk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sandstorm hover:underline"
            >
              B+W // 002
            </a>
            ’,{" "}
            <a
              href="https://www.youtube.com/watch?v=g6OSecakzcw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sandstorm hover:underline"
            >
              SB140
            </a>{" "}
            and{" "}
            <a
              href="https://youtu.be/dG_nrjg8dt0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sandstorm hover:underline"
            >
              SB135
            </a>{" "}
            launches, with more in the works.
          </p>
        </div>
      </div>
    </section>
  );
}
