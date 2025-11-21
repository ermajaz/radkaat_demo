"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();

  return (
    <div className="w-auto h-10 relative cursor-pointer" onClick={() => router.push("/")}>
      <Image
        quality={100}
        src="/images/website-logo.png"
        alt="Radkaat Logo"
        width={50}
        height={10}
        className="w-[50px] h-auto"
      />
    </div>
  );
}
