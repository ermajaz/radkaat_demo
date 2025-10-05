import Image from "next/image";
import BikeOverlayDetails from "./BikeOverlayDetails";
import { OverlayBike } from "@/types";

export default function BikeDisplay({ bike }: { bike: OverlayBike }) {
  return (
    <div className="flex-1 w-full h-full relative flex items-center justify-center">
      <div className="w-full h-full bg-gradient-to-b from-transparent via-black/60 to-black/80 flex items-center justify-center relative">
        <Image quality={100}
          src={bike.image}
          alt={bike.name}
          width={900}
          height={600}
          className="object-cover w-full h-full"
        />
        <BikeOverlayDetails details={bike.details} />
      </div>
    </div>
  );
}
