"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const DirectionAwareHover = ({
  imageUrl,
  title,
  children,
  childrenClassName,
  imageClassName,
  className,
}: {
  imageUrl: string;
  title?: React.ReactNode | string;
  children?: React.ReactNode | string;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [direction, setDirection] = useState<"top" | "bottom" | "left" | "right">("left");

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const d = getDirection(event, ref.current);
    switch (d) {
      case 0:
        setDirection("top");
        break;
      case 1:
        setDirection("right");
        break;
      case 2:
        setDirection("bottom");
        break;
      default:
        setDirection("left");
        break;
    }
  };

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      ref={ref}
      className={cn(
        " bg-transparent overflow-hidden relative group",
        className
      )}
    >
      {/* image container */}
      <motion.div
        className="relative h-full w-full"
        initial="initial"
        whileHover={direction}
      >
        {/* image */}
        <motion.div
          variants={variants}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="h-full w-full"
        >
          <Image
            alt="image"
            className={cn("h-full w-full object-cover scale-[1.15]", imageClassName)}
            width={1000}
            height={1000}
            src={imageUrl}
          />
        </motion.div>

        {/* dark overlay */}
        <div className="absolute inset-0 hidden group-hover:block bg-superblack/30 z-20 transition-opacity duration-300" />

        {/* always-visible title with underline */}
        <div className={cn("absolute bottom-4 left-4 z-30", childrenClassName)}>
          {children ? (
            <div className="relative inline-block">
              {children}
              <span className="absolute left-0 -bottom-1 h-[3px] bg-rust w-0 group-hover:w-full transition-all duration-500" />
            </div>
          ) : (
            <h3 className="relative text-2xl md:text-3xl font-bold mb-2 inline-block text-white">
              {title}
              <span className="absolute left-0 -bottom-1 h-[3px] bg-rust w-0 group-hover:w-full transition-all duration-500" />
            </h3>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const variants = {
  initial: { x: 0, y: 0 },
  top: { y: 20 },
  bottom: { y: -20 },
  left: { x: 20 },
  right: { x: -20 },
};
