"use client";

import { useState } from "react";
import { bikes } from "./utils/bicycle-showcase";
import BikeModelSwitcher from "./components/BikeModalSwitcher";

export default function BikeShowcaseDesktop() {
  const [active, setActive] = useState<"serow" | "saola" | "takin">("serow");

  return (
    <section className="w-full h-screen">
      <BikeModelSwitcher bikes={bikes} active={active} setActive={setActive} />
    </section>
  );
}
