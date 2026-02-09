"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Calendar,
    Clock,
    MapPin,
    Phone,
    Home,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import "mapbox-gl/dist/mapbox-gl.css";
import { useMapboxRoute } from "@/components/sections/jungle-book-tour/hooks/useMapboxRoute";
import Map from "@/components/sections/jungle-book-tour/components/Map";

/* -------------------------------------------------- */
/* Store Config */
/* -------------------------------------------------- */
const STORE = {
    name: "Radkaat Experience Center",
    address: "Koramangala, Bangalore, Karnataka",
    lat: 12.9352,
    lng: 77.6245,
};

/* -------------------------------------------------- */

interface RideDetailsSummaryProps {
    bike: {
        id?: number;
        name: string;
        img: string;
    } | null;
    store: { name: string, date: string, lat: number, lng: number };
    variantGroup: string;
    date: string;
    timeWindow?: string;
}

interface LatLng {
    lat: number;
    lng: number;
}

export default function RideDetailsSummary({
    bike,
    store,
    variantGroup,
    date,
    timeWindow = "9:00 AM - 5:00 PM",
}: RideDetailsSummaryProps) {
    const router = useRouter();

    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: "-120px", once: true });
    const [userLocation, setUserLocation] = useState<LatLng | null>(null);

    /* ---------------------------------------------
       Get user's current location
    --------------------------------------------- */
    useEffect(() => {
        if (!navigator.geolocation) {
            setUserLocation({ lat: 28.6139, lng: 77.209 });
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setUserLocation({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                });
            },
            (err) => {
                console.error("Location error:", err);
                // Fallback (Delhi)
                setUserLocation({ lat: 28.6139, lng: 77.209 });
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0,
            }
        );
    }, []);

    const source = useMemo(
        () =>
            userLocation
                ? userLocation
                : { lat: 32.2432, lng: 77.1890 },
        [userLocation]
    );

    const destination = useMemo(
        () => ({
            lat: store.lat,
            lng: store.lng,
        }),
        [store.lat, store.lng]
    );
    /* ---------------------------------------------
       Fetch route
    --------------------------------------------- */
    const haversineDistance = (
        lat1: number,
        lon1: number,
        lat2: number,
        lon2: number
    ) => {
        const toRad = (v: number) => (v * Math.PI) / 180;
        const R = 6371;
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);

        const a =
            Math.sin(dLat / 2) ** 2 +
            Math.cos(toRad(lat1)) *
            Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) ** 2;

        return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    };
    const route = useMapboxRoute(source, destination);

    if (!bike) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full h-full text-white"
        >
            {/* ======================= TITLE ======================= */}
            <div className="w-full flex items-center justify-between mb-10">
                <h2 className="text-3xl font-semibold">Your Booking Details</h2><Button
                    onClick={() => router.push("/")}
                    className="bg-[#2a2a2a] px-8 py-5 text-white rounded-sm cursor-pointer border border-white/10 flex items-center gap-2 hover:bg-[#2a2a2a]/80"
                >
                    <Home size={20} /> Move to Homepage
                </Button></div>


            {/* ======================= TWO CARDS ======================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">

                {/* ===================================================== */}
                {/* BIKE DETAILS CARD */}
                {/* ===================================================== */}
                <div className="bg-[#111]/60 border border-white/10 rounded-sm p-8 backdrop-blur-xl flex flex-col items-center">

                    {/* Header */}
                    <div className="w-full flex items-center justify-between mb-4">
                        <div>
                            <p className="text-lg font-semibold tracking-wide">
                                {bike.name}
                            </p>
                            <p className="text-sandstorm text-sm font-medium">
                                Model {variantGroup}
                            </p>
                        </div>

                        <div className="text-[11px] px-2 py-1 rounded-sm border border-white/10 bg-black/60 text-sandstorm font-semibold">
                            Selected
                        </div>
                    </div>

                    {/* Bike Image */}
                    <div className="relative w-full h-60">
                        <Image
                            src={bike.img}
                            alt={bike.name}
                            fill
                            quality={100}
                            className="object-contain drop-shadow-xl"
                        />
                    </div>

                    {/* Specs */}
                    <div className="flex justify-between w-full mt-6 border-t border-white/10 pt-4">
                        <div className="text-center w-1/2">
                            <p className="text-white/60 text-sm">Wheel size</p>
                            <p className="text-xl font-semibold mt-1">27.5"</p>
                        </div>
                        <div className="text-center w-1/2 border-l border-white/10">
                            <p className="text-white/60 text-sm">Frame size</p>
                            <p className="text-xl font-semibold mt-1">M</p>
                        </div>
                    </div>
                </div>

                {/* ===================================================== */}
                {/* STORE LOCATION CARD */}
                {/* ===================================================== */}
                <div className=" bg-[#111]/60 border border-white/10 rounded-sm p-6 backdrop-blur-xl flex flex-col gap-4">

                    {/* Store Info */}
                    <div>
                        <p className="text-xl font-semibold flex items-center gap-2">
                            <MapPin className="text-sandstorm" size={20} />
                            {STORE.name}
                        </p>
                        <p className="text-white/60 text-sm mt-1">
                            {STORE.address}
                        </p>
                    </div>

                    {/* Map */}
                    {/* Map */}
                    <div
                        ref={ref}
                        className="relative w-full h-[280px] rounded-sm overflow-hidden border border-white/10"
                    >
                        {destination && userLocation ? (
                            <>
                                <Map
                                    destination={destination}
                                    route={route}
                                    isInView={isInView}
                                />

                                {/* Distance Badge */}
                                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                                        <MapPin size={14} className="text-sandstorm" />
                                        <span className="text-xs font-semibold text-white">
                                            {haversineDistance(source.lat,source.lng,destination.lat,destination.lng).toFixed(1)} km away
                                        </span>
                                    </div>
                            </>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-white/60">
                                Getting your location...
                            </div>
                        )}
                    </div>


                    {/* Date + Time */}
                    <div className="bg-white/10 border border-white/10 rounded-sm px-5 py-4 flex flex-col justify-between items-center gap-4">
                        <div className="w-full flex items-center justify-between">
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
                        >
                            <Phone size={18} /> Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
