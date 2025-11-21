import React from "react";
import SupportNav from "./SupportNav";
import SupportParallax from "./SupportParallax";

const SupportLayout = ({
  children,
  image,
}: {
  children: React.ReactNode;
  image: string;
}) => (
  <div className="w-full min-h-screen bg-superblack flex flex-col">
    <SupportParallax image={image} />
    <SupportNav />
    <div className="w-full max-w-7xl mx-auto py-8 px-4 md:px-8 pb-[30vh] flex-1">
      {children}
    </div>
  </div>
);

export default SupportLayout;
