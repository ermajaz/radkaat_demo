"use client";

import FooterBottomBarMobile from "./components/mobile/FooterBottomBarMobile";
import FooterContactMobile from "./components/mobile/FooterContactMobile";
import FooterHeadingMobile from "./components/mobile/FooterHeadingMobile";
import FooterMenuMobile from "./components/mobile/FooterMenuMobile";
import FooterSocialsMobile from "./components/mobile/FooterSocialsMobile";


export default function FooterMobile() {
  return (
    <footer className="w-full bg-superblack text-white px-6 pt-10 pb-20">
      <FooterHeadingMobile />

      <div className="mt-6">
        <FooterMenuMobile />
      </div>

      <div className="mt-6">
        <FooterContactMobile />
      </div>

      <div className="mt-8">
        <FooterSocialsMobile />
      </div>

      <div className="mt-5 mb-10">
        <FooterBottomBarMobile />
      </div>
    </footer>
  );
}
