"use client";

import Image from "next/image";
import Link from "next/link";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <footer className="px-8 grid grid-cols-1 md:grid-cols-2 w-full h-auto">
      {/* Left: Image Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <Image
          src="/images/footer-img.png"
          alt="Radkaat Riders"
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
      </div>

      {/* Right: Content Section */}
      <div className="text-white flex flex-col justify-between pl-8 md:pl-12 lg:pl-16 pt-12 pb-4 relative">
        {/* Heading + Logo Row */}
        <div className="flex items-center gap-6 mb-10">
          {/* Born in Shimla Logo */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0">
            <Image
              src="/images/born-in-shimla.png"
              alt="Born in Shimla"
              fill
              className="object-contain"
              sizes="80px"
            />
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase leading-tight font-display">
            Radkaat. <br /> Here to Help
          </h2>
        </div>

        {/* Links Grid */}
        <FooterLinks />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between text-[10px] text-gray-400 border-t border-gray-800 pt-4">
          <p className="mb-2 md:mb-0">
            © Radkaat {new Date().getFullYear()} All Rights Reserved
          </p>

          <div className="flex space-x-4">
            <Link href="/terms" className="hover:text-rust transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-rust transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
