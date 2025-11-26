"use client";

import ProfileActivityMobile from "./components/mobile/ProfileActivityMobile";
import ProfileAddressMobile from "./components/mobile/ProfileAddressMobile";
import ProfileHeaderMobile from "./components/mobile/ProfileHeaderMobile";
import ProfileInfoMobile from "./components/mobile/ProfileInfoMobile";
import ProfileStatsMobile from "./components/mobile/ProfileStatsMobile";

export default function ProfileMobile() {
  return (
    <main className="w-full min-h-screen bg-superblack text-white px-4 py-6 space-y-4">
      <ProfileHeaderMobile />
      <ProfileStatsMobile />
      <ProfileInfoMobile />
      <ProfileAddressMobile />
      <ProfileActivityMobile />
    </main>
  );
}
