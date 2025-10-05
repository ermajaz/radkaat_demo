import { motion, MotionValue } from "framer-motion";
import Image from "next/image";

interface Props {
  bike: {
    name: string;
    image: string;
  };
  yOffsetImage: MotionValue<number>;
  yOffsetModel: MotionValue<number>;
}

export default function BikeImage({ bike, yOffsetImage, yOffsetModel }: Props) {
  return (
    <motion.div
      style={{ y: yOffsetImage }}
      className="relative z-10 w-full lg:w-1/2 flex justify-center"
    >
      <Image quality={100}
        src={bike.image}
        alt={`${bike.name} Bike`}
        width={1200}
        height={1200}
        className="w-[60vw] lg:w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
      />
      <motion.h1
        style={{ y: yOffsetModel }}
        className="absolute inset-0 -z-10 flex !tracking-[40px] items-center justify-center text-[18vw] opacity-[0.3] font-extrabold text-sandstorm pointer-events-none select-none"
      >
        {bike.name.toUpperCase()}
      </motion.h1>
    </motion.div>
  );
}
