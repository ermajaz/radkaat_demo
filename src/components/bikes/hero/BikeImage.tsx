import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

export default function BikeImage({ src, alt }: Props) {
  return (
    <div className="w-full h-full mr-30 relative">
      {/* Radial glow behind bike */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[900px] h-[900px] rounded-full bg-yellow-900/30 blur-[180px]" />
      </div>

      <div className="w-full h-full mt-10 flex items-end justify-center">
        <Image quality={100}
          src={src}
          alt={alt}
          width={900}
          height={900}
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
}
