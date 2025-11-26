"use client";

import { motion } from "framer-motion";
import { Cpu, Wind, Flame, StretchHorizontal } from "lucide-react";

const techItems = [
  {
    title: "AirCut Vent Geometry",
    desc: "Wind-channeled helmet vents that cool without adding drag.",
    icon: Wind,
  },
  {
    title: "ShockGel Palm Grid",
    desc: "Micro-gel cushioning in gloves that cuts vibration and hand fatigue.",
    icon: Cpu,
  },
  {
    title: "ThermaFlow Insulation",
    desc: "Thermal-regulated bottle design that keeps fluids ride-ready longer.",
    icon: Flame,
  },
  {
    title: "FlexGrip Ergonomics",
    desc: "Adaptive grip fit that stabilizes bars, tools, and packs under motion.",
    icon: StretchHorizontal,
  },
];

export default function AccessoriesTechSectionMobile() {
  return (
   <section className="relative w-full bg-superblack py-16 md:py-24 text-white overflow-hidden">
   
         {/* ✅ Futuristic grid */}
         <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-size-[60px_60px]" />
   
         {/* ✅ Glow orb */}
         <div className="absolute -top-32 left-1/3 w-72 h-72 bg-sandstorm/10 blur-[100px] rounded-full" />
   
         {/* ✅ CONTENT WRAPPER */}
         <div className="relative max-w-6xl mx-auto px-6 z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
   
           {/* ✅ LEFT CONTENT */}
           <motion.div
             initial={{ x: -30, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.7 }}
             className="text-center md:text-left"
           >
             <p className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-sandstorm">
               Fabric Technology
             </p>
   
             <h2 className="mt-3 text-2xl md:text-4xl font-light leading-snug">
               Engineered for<br />
               <span className="font-semibold">performance motion.</span>
             </h2>
   
             <p className="mt-4 text-neutral-300 text-sm md:text-base max-w-sm mx-auto md:mx-0">
               Body-mapped layers tuned for airflow, ergonomics, and thermal response.
             </p>
           </motion.div>
   
           {/* ✅ RIGHT GRID (COMPACT) */}
           <motion.div
             initial={{ x: 30, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.7, delay: 0.1 }}
             className="grid grid-cols-2 gap-4"
           >
             {techItems.map((item, i) => {
               const Icon = item.icon;
               return (
                 <motion.div
                   key={item.title}
                   transition={{ duration: 0.4 }}
                   className="relative group bg-white/3 border border-[#2a2a2a] rounded-lg p-4 backdrop-blur-xl shadow-[0_0_25px_rgba(0,0,0,0.3)]"
                 >
                   {/* Glow */}
                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-sandstorm/10 to-transparent rounded-lg" />
   
                   <Icon className="text-sandstorm mb-2 w-5 h-5" />
   
                   <h3 className="text-[11px] font-semibold tracking-wide">
                     {item.title}
                   </h3>
   
                   <p className="text-[10px] text-neutral-300 mt-1 leading-snug line-clamp-2">
                     {item.desc}
                   </p>
                 </motion.div>
               );
             })}
           </motion.div>
         </div>
       </section>
  );
}
