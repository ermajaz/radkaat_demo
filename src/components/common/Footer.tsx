"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [hoveredMenu, setHoveredMenu] = useState<"support" | "about" | null>(
    null
  );

  const menuItems = {
    support: [
      { name: "Contact Us", href: "/support/contact" },
      { name: "Help & FAQ", href: "/support/help" },
      { name: "Support Center", href: "/support/supportcenter" },
    ],
    about: [
      { name: "Contact Us", href: "/support/contact" },
      { name: "Help & FAQ", href: "/support/help" },
      { name: "Support Center", href: "/support/supportcenter" },
    ],
  };

  return (
    <footer className="w-full text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Image Section */}
        <div className="relative hidden sm:flex w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[500px]">
          <Image quality={100}
            src="/images/footer-img.png"
            alt="Radkaat Riders"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-between pl-10 sm:pt-10 pb-6 z-10 bg-superblack max-sm:pt-10">
          {/* Logo + Heading */}
          <div className="flex flex-row items-center gap-2 mb-10">
            <div className="relative w-16 h-16 sm:w-24 sm:h-24 shrink-0">
              <Image quality={100}
                src="/images/born-in-shimla.png"
                alt="Born in Shimla"
                fill
                className="object-contain -ml-4"
                sizes="80px"
              />
            </div>
            <h2 className="text-left text-[26px] md:text-[34px] lg:text-[40px] font-bold uppercase leading-tight tracking-widest! font-display">
              Radkaat. <br /> Here to Help
            </h2>
          </div>

          {/* Menus + Contact */}
          <div className="flex flex-col sm:flex-row justify-between gap-10 mb-6">
            {/* Support & About Us */}
            <div className="flex flex-col gap-16 relative">
              {(["support", "about"] as const).map((menu) => (
                <div
                  key={menu}
                  className="relative"
                  onMouseEnter={() => setHoveredMenu(menu)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  {/* Header */}
                  <div className="cursor-pointer flex flex-col">
                    <h3 className="uppercase font-bold tracking-widest text-white mb-1">
                      {menu === "support" ? "Support" : "About Us"}
                    </h3>
                    {/* Growing underline */}
                    <motion.div
                      layout
                      initial={{ width: 0 }}
                      animate={{ width: hoveredMenu === menu ? "100%" : 0 }}
                      className="h-0.5 bg-rust rounded"
                    />
                  </div>

                  {/* Dropdown Items */}
                  <AnimatePresence>
                    {hoveredMenu === menu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute left-0 pt-3 flex gap-6 text-white whitespace-nowrap"
                      >
                        {menuItems[menu].map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="hover:text-rust text-[14px] transition-colors duration-300"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Contact Us */}
            <motion.div
              className=" w-full sm:w-[300px] text-gray-200 text-sm flex flex-col gap-2"
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-semibold text-[13px]">
                RADKAAT VENTURES PRIVATE LIMITED
              </p>
              <p className="text-[12px]">
                1st Floor, Unit no.124, Paras Trade Centre,
              </p>
              <p className="text-[12px]">
                Gurgaon Faridabad Road, Gwal Pahari, Gurugram,
              </p>
              <p className="text-[12px]">District, Gurugram, Haryana 122003</p>
              <p className="font-medium text-[12px]">GST: 02AAMCR8372H1Z4</p>
              <p className="font-medium text-[12px]">+91-9429693000</p>
              <p className="underline underline-offset-2 text-[12px] cursor-pointer hover:text-rust transition-colors">
                support@cyclecircle.one
              </p>
            </motion.div>
          </div>

          {/* Socials */}
          <div className="flex text-[12px] justify-center sm:justify-start gap-6 mb-1 max-sm:pb-2">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="flex items-center gap-2 hover:text-rust transition-colors"
            >
              <Facebook size={15} /> Facebook
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="flex items-center gap-2 hover:text-rust transition-colors"
            >
              <Instagram size={15} /> Instagram
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              className="flex items-center gap-2 hover:text-rust transition-colors"
            >
              <Youtube size={15} /> YouTube
            </Link>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col pr-5 sm:flex-row sm:items-center justify-between text-xs text-gray border-t border-gray-800 pt-4 gap-2">
            <p className="text-center sm:text-left">
              © Radkaat {new Date().getFullYear()} All Rights Reserved
            </p>
            <div className="flex justify-center sm:justify-end gap-4">
              <Link
                href="/support/terms"
                className="hover:text-rust transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="support/privacy"
                className="hover:text-rust transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
