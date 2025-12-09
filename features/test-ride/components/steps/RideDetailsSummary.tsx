"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface RideDetailsSummaryProps {
    bike: {
        id?: number;
        name: string;
        img: string;
    } | null;
    variant: {
        wheelSize?: string;
        frameSize?: string;
    }
    variantGroup: string;
    color: string;
    rider: {
        id?: number;
        name: string;
        img: string;
        phone?: string;
    } | null;
    date: string;
    timeWindow?: string;
    onClose?: () => void;
}

export default function RideDetailsSummary({
    bike,
    variant,
    variantGroup,
    color,
    rider,
    date,
    timeWindow = "9:00 AM - 5:00 PM",
    onClose,
}: RideDetailsSummaryProps) {
    const router = useRouter();

    if (!bike || !rider) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full h-full text-white"
        >
            {/* Title */}
            <h2 className="text-3xl font-semibold mb-10">Your Booking Details</h2>

            {/* Two Cards Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">

                {/* ----------------------------- */}
                {/* BIKE DETAILS CARD */}
                {/* ----------------------------- */}
                <div className="bg-[#111]/60 border border-white/10 rounded-2xl p-8 backdrop-blur-xl flex flex-col items-center">
                    <p className="text-xl font-semibold tracking-wide mb-4 uppercase">
                        {bike.name}
                    </p>

                    {/* Bike Image */}
                    <Image
                        src={bike.img}
                        alt={bike.name}
                        width={320}
                        height={200}
                        className="object-contain mx-auto drop-shadow-xl"
                    />

                    {/* Variant group + Color */}
                    <div className="flex items-center justify-center gap-4 mt-6">
                        <div className="text-center">
                            <p className="text-white/60 text-sm">Variant</p>
                            <p className="text-lg font-semibold">{variantGroup}</p>
                        </div>

                        {/* Color Dot */}
                        <div className="flex flex-col items-center">
                            <p className="text-white/60 text-sm">Color</p>
                            <div
                                className="w-5.5 h-5.5 mt-0.5 rounded-full border border-white/40 shadow"
                                style={{ backgroundColor: color }}
                            />
                        </div>
                    </div>

                    {/* Wheel / Frame */}
                    <div className="flex justify-between w-full mt-6">
                        <div className="text-center w-1/2">
                            <p className="text-white/60 text-sm">Wheel size</p>
                            <p className="text-xl font-semibold mt-1">{variant.wheelSize}</p>
                        </div>
                        <div className="text-center w-1/2 border-l border-white/10">
                            <p className="text-white/60 text-sm">Frame size</p>
                            <p className="text-xl font-semibold mt-1">{variant.frameSize}</p>
                        </div>
                    </div>
                </div>

                {/* ----------------------------- */}
                {/* RIDER DETAILS CARD */}
                {/* ----------------------------- */}
                <div className="bg-[#111]/60 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">

                    {/* Rider Avatar + Name */}
                    <div className="flex flex-col items-center gap-4 mb-6">
                        <div className="relative w-50 h-50 rounded-full overflow-hidden">
                            <Image
                                src={rider.img}
                                alt={rider.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-xl font-semibold">{rider.name}</p>
                            <p className="text-white/50 text-sm tracking-wide">RIDER</p>
                        </div>
                    </div>

                    {/* Date + Time Row */}
                    <div className="bg-white/10 border border-white/10 rounded-sm px-5 py-4 flex justify-between items-center mb-6">
                        <div className="flex items-center gap-2 text-white/80">
                            <Calendar size={18} />
                            <span className="text-sm">{date}</span>
                        </div>

                        <div className="flex items-center gap-2 text-white/80">
                            <Clock size={18} />
                            <span className="text-sm">{timeWindow}</span>
                        </div>
                    </div>

                    {/* Call Rider */}
                    <Button
                        className="w-full bg-army cursor-pointer hover:bg-army/90 text-white font-medium flex items-center justify-center gap-2 py-5 rounded-sm"
                        onClick={() => rider.phone && window.open(`tel:${rider.phone}`)}
                    >
                        <Phone size={18} /> Call Rider
                    </Button>
                </div>
            </div>

            {/* Bottom Action Buttons */}
            <div className="flex justify-between items-center w-full">

                {/* BACK BUTTON */}
                <Button
                    onClick={() => router.push("/")}
                    className="bg-black px-8 py-5 text-white rounded-full cursor-pointer border border-white/10 flex items-center gap-2 hover:bg-black/80"
                >
                    <ArrowLeft size={20} /> Homepage
                </Button>

                {/* BOOK AGAIN BUTTON */}
                <Button
                    onClick={() => window.location.reload()}
                    className="bg-[#D6C894] text-black font-medium px-8 py-5 cursor-pointer rounded-full flex items-center gap-2 hover:bg-[#D6C894]/90"
                >
                    Book a New Test Ride <ArrowRight size={20} />
                </Button>
            </div>
        </motion.div>
    );
}
