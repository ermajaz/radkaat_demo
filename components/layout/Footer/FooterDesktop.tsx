"use client";

import FooterBottomBar from "./components/FooterBottomBar";
import FooterContact from "./components/FooterContact";
import FooterHeading from "./components/FooterHeading";
import FooterImage from "./components/FooterImage";
import FooterMenu from "./components/FooterMenu";
import FooterSocials from "./components/FooterSocials";



export default function FooterDesktop() {
  return (
    <footer className="w-full text-white bg-superblack">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <FooterImage />

        <div className="flex flex-col justify-between pl-10 sm:pt-5 pb-3 z-10 bg-superblack max-sm:pt-10">
          <FooterHeading />
          <div className="w-1/2 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <FooterMenu />
              <FooterContact />
            </div>
          </div>

          <FooterSocials />
          <FooterBottomBar />
        </div>
      </div>
    </footer>
  );
}
