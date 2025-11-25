"use client";

import { motion } from "framer-motion";

export default function RideStepMobile({
  step,
  index,
}: {
  step: { title: string; icon: any };
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.12 }}
      className="relative w-full"
    >
      {/* Center node on the vertical line */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-4 h-4 rounded-full bg-sandstorm shadow-[0_0_12px_rgba(250,204,94,0.9)]" />
      </div>

      {/* Floating card left/right of center */}
      <div
        className={`flex items-center gap-3 ${
          isLeft ? "justify-start" : "justify-end"
        }`}
      >
        {isLeft && (
          <StepCard
            icon={step.icon}
            title={step.title}
            align="left"
          />
        )}

        {!isLeft && (
          <StepCard
            icon={step.icon}
            title={step.title}
            align="right"
          />
        )}
      </div>
    </motion.div>
  );
}

function StepCard({
  icon: Icon,
  title,
  align,
}: {
  icon: any;
  title: string;
  align: "left" | "right";
}) {
  return (
    <motion.div
      className={`flex items-center gap-3 px-3 py-2 rounded-2xl bg-black/40 backdrop-blur-md border border-white/8 shadow-[0_10px_25px_rgba(0,0,0,0.45)] ${
        align === "left" ? "rounded-tr-3xl rounded-bl-3xl" : "rounded-tl-3xl rounded-br-3xl"
      }`}
    >
      {/* Icon bubble */}
      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-sandstorm text-superblack shrink-0">
        <Icon className="w-4 h-4" />
      </div>

      {/* Title only */}
      <span className="text-xs font-semibold text-white leading-snug max-w-[90px]">
        {title}
      </span>
    </motion.div>
  );
}
