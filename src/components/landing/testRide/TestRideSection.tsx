"use client";

import { useMediaQuery } from "react-responsive";
import { TestRideHeroDesktop } from "./desktop/TestRideHeroDesktop";
import TestRideHeroMobile from "./mobile/TestRideHeroMobile";

export default function TestRideSection({className}:{className:string}) {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <section className="w-full">
      {isDesktop ? <TestRideHeroDesktop className={className}/> : <TestRideHeroMobile />}
    </section>
  );
}
