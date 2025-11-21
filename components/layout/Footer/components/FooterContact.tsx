"use client";
import { motion } from "framer-motion";

export default function FooterContact() {
  return (
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
  );
}
