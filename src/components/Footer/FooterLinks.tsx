"use client";

import { useEffect, useRef } from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const underlineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!underlineRef.current) return;
    const underline = underlineRef.current;
    const tl = gsap.timeline({ paused: true });

    tl.to(underline, {
      scaleX: 1,
      duration: 0.4,
      ease: "power3.out",
    });

    // Find the parent UL
    const section = underline.closest(".footer-section");
    if (!section) return;

    const links = section.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => tl.play());
      link.addEventListener("mouseleave", () => tl.reverse());
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", () => tl.play());
        link.removeEventListener("mouseleave", () => tl.reverse());
      });
    };
  }, []);

  return (
    <div className="footer-section">
      <h3 className="relative uppercase text-sm font-semibold text-gray-300 tracking-wider mb-4 inline-block">
        {title}
        {/* underline under heading */}
        <span
          ref={underlineRef}
          className="absolute left-0 -bottom-1 block h-[2px] w-full bg-rust origin-left scale-x-0 transform"
        />
      </h3>
      {children}
    </div>
  );
}

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-12 mb-12 text-sm">
      {/* Support */}
      <Section title="Support">
        <ul className="space-y-3">
          <li>
            <Link href="/test-ride" className="hover:text-rust transition-colors">
              Book Test Ride
            </Link>
          </li>
          <li>
            <Link href="/stories" className="hover:text-rust transition-colors">
              Track Your Order
            </Link>
          </li>
        </ul>
      </Section>

      {/* Social */}
      <Section title="Follow Us">
        <ul className="space-y-3">
          <li className="w-fit">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="flex items-center gap-2 text-gray-400 hover:text-rust transition-colors"
            >
              <Facebook size={16} /> Facebook
            </Link>
          </li>
          <li className="w-fit">
            <Link
              href="https://instagram.com"
              target="_blank"
              className="flex items-center gap-2 text-gray-400 hover:text-rust transition-colors"
            >
              <Instagram size={16} /> Instagram
            </Link>
          </li>
          <li className="w-fit">
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="flex items-center gap-2 text-gray-400 hover:text-rust transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </Link>
          </li>
          <li className="w-fit">
            <Link
              href="https://youtube.com"
              target="_blank"
              className="flex items-center gap-2 text-gray-400 hover:text-rust transition-colors"
            >
              <Youtube size={16} /> YouTube
            </Link>
          </li>
        </ul>
      </Section>
    </div>
  );
}
