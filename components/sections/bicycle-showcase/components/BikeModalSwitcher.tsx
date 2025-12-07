"use client";

import BicycleOpenCard from "./BicycleOpenCard";
import BicycleClosedCard from "./BicycleClosedCard";
import { BikeMap } from "../utils/bicycle-showcase";

export default function BikeModelSwitcher({
  bikes,
  active,
  setActive,
}: {
  bikes: BikeMap;
  active: "serow" | "saola" | "takin";
  setActive: (id: "serow" | "saola" | "takin") => void;
}) {
  
  const bikeList = Object.values(bikes).filter((b) => b.id !== active);

  return (
    <div className="w-full h-screen flex">

      {/* OPEN CARD – 75% WIDTH */}
      <div className="w-full h-full">
        <BicycleOpenCard bike={bikes[active]} />
      </div>

      {/* CLOSED CARDS — STACKED – 25% WIDTH */}
      <div className="w-[300px] h-full flex ">

        {bikeList.map((b) => (
          <div key={b.id} className="flex-1 h-full">
            <BicycleClosedCard 
              bike={b}
              onClick={() => setActive(b.id as "serow" | "saola" | "takin")}
            />
          </div>
        ))}

      </div>
    </div>
  );
}
