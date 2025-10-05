import Image from "next/image";

export default function Logo() {
  return (
    <div className="w-auto h-10 relative">
      <Image quality={100} src="/images/website-logo.png" alt="Website Logo" width={50} height={10} className="w-[50px] h-auto"/>
    </div>
  );
}
