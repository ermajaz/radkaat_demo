"use client";

import AboutRadkaatBody from "./AboutRadkaatBody";
import AboutRadkaatHeading from "./AboutRadkaatHeading";
import AboutRadkaatSubheading from "./AboutRadkaatSubHeading";


export default function AboutRadkaatContent() {
  return (
    <div className="relative w-full lg:w-[57%] h-1/2 lg:h-full flex items-center bg-petrol hover:bg-petrol z-10 transition-none px-5">
      <div className="flex flex-col items-start text-left space-y-[5px]">
        <AboutRadkaatHeading />
        <AboutRadkaatSubheading />
        <AboutRadkaatBody />
      </div>
    </div>
  );
}
