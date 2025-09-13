"use client";

import { useMediaQuery } from "react-responsive";
import { TestRideHeroDesktop } from "./desktop/TestRideHeroDesktop";
import TestRideHeroMobile from "./mobile/TestRideHeroMobile";

export default function TestRideSection() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <section className="w-full">
      {isDesktop ? <TestRideHeroDesktop /> : <TestRideHeroMobile />}
    </section>
  );
}
