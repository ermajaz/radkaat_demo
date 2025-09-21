import React from "react";
import SupportParallax from "@/components/support/SupportParallax";
import SupportNav from "@/components/support/SupportNav";
import Footer from "../common/Footer";

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
    <Footer />
  </div>
);

export default SupportLayout;
