import { Bike } from "../utils/bicycle-showcase";
import Bike3D from "./Bike3D";
import BikeNameInGradientWide from "./BikeNameInGradientWide";
import { X } from "lucide-react";

export default function Bike3Dcard({
  bike,
  onclose,
}: {
  bike: Bike;
  onclose: () => void;
}) {
  return (
    <div className="relative w-full h-full">
      {/* ❌ Close button */}
      <button
        onClick={onclose}
        aria-label="Close"
        className="
          absolute top-16 right-6 z-50
          flex items-center justify-center cursor-pointer
          w-10 h-10
          text-white
          hover:bg-black/70
          hover:scale-105
          active:scale-95
          transition
        "
      >
        <X size={25} />
      </button>

      {/* Background bike name */}
      <div className="w-full absolute left-0 right-0 mx-auto top-[5%] pointer-events-none">
        <BikeNameInGradientWide
          name={bike.bgWord ?? bike.uiName.toUpperCase()}
          gradient={bike.colors.bgGradient}
        />
      </div>

      {/* Bike image centered */}
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-[30%] z-20 w-[85%] h-full">
        <Bike3D image={bike.image} />
      </div>
    </div>
  );
}
