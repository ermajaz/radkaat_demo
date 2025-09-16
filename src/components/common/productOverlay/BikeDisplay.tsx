// BikeDisplay.tsx
import Image from "next/image";
import BikeOverlayDetails from "./BikeOverlayDetails";
import { OverlayBike } from "@/types";

type Props = {
  bike: OverlayBike;
};

export default function BikeDisplay({ bike }: Props) {
  return (
    <div className="w-full relative flex flex-col items-center">
      {/* Bike details centered overlay */}
      <BikeOverlayDetails details={bike.details} />

      {/* Bike image */}
      <Image
        src={bike.image}
        alt={bike.name}
        width={600}
        height={400}
        className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}
