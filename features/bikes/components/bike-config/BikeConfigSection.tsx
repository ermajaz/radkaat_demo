"use client";

import Image from "next/image";

export default function BikeConfigSection() {
    return (
        <section className="w-full bg-superblack text-white flex flex-col items-center px-10">

            {/* ✅ Heading */}
            <div className="text-center mb-20">
                <h2 className="text-[40px] font-bold leading-tight tracking-tight">
                    ENGINEER YOUR RIDE
                </h2>
                <p className="mt-2 text-[16px] text-[#9c9c9c]">
                    Explore every component. Understand every upgrade.
                </p>
            </div>

            {/* ✅ Main Layout */}
            <div className="flex w-full gap-5 items-start">

                {/* ✅ LEFT — Video Thumbnail */}
                <div className="relative w-[520px] h-[520px] overflow-hidden border border-white/10 bg-black">
                    <Image
                        src="/images/config/config-video.png"
                        alt="Bike Configuration Video"
                        fill
                        className="object-cover opacity-90"
                    />
                </div>

                {/* ✅ RIGHT — 2x2 Staggered Grid */}
                <div className="grid grid-cols-2 gap-5 w-[800px]">

                    {/* Card 1 */}
                    <div className="relative w-full h-60 overflow-hidden border border-white/10 bg-black">
                        <Image
                            src="/images/config/config-shock.png"
                            alt="Shock Absorber"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                            <h3 className="text-[18px] font-semibold mb-1">Shock Absorber</h3>
                            <p className="text-[13px] text-[#d0d0d0] leading-relaxed">
                                Keeps the rear wheel firmly planted on the ground.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative w-full h-60 overflow-hidden border border-white/10 bg-black">
                        <Image
                            src="/images/config/config-wheel.png"
                            alt="29 Wheel"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                            <h3 className="text-[18px] font-semibold mb-1">29&quot; Wheel</h3>
                            <p className="text-[13px] text-[#d0d0d0] leading-relaxed">
                                Rolls over obstacles more smoothly.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative w-full h-60 overflow-hidden border border-white/10 bg-black">
                        <Image
                            src="/images/config/config-fork.png"
                            alt="Carbon Fork"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                            <h3 className="text-[18px] font-semibold mb-1">Carbon Fork</h3>
                            <p className="text-[13px] text-[#d0d0d0] leading-relaxed">
                                Reduces weight and improves control.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="relative w-full h-60 rounded-xl overflow-hidden border border-white/10 bg-black">
                        <Image
                            src="/images/config/config-drivetrain.png"
                            alt="Drivetrain"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                            <h3 className="text-[18px] font-semibold mb-1">1x Drivetrain</h3>
                            <p className="text-[13px] text-[#d0d0d0] leading-relaxed">
                                Keeps shifting simple and consistent.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* ✅ CTA */}
            <button
                className="mt-20 px-10 py-3 border border-white/30 rounded-xs cursor-pointer
                text-[14px] tracking-widest uppercase
                hover:bg-white hover:text-black transition"
            >
                START CONFIGURATION
            </button>
        </section>
    );
}
