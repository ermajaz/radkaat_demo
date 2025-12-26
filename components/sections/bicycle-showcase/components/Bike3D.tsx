import Image from "next/image";

export default function Bike3D({ image }: { image: string }) {


    return (
        <div className="relative w-full h-full">
            <Image
                src={image}
                alt="Bike"
                fill
                className="object-contain"
                quality={100}
                priority
            />
        </div>
    )
}