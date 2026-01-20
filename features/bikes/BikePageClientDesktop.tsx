"use client";

import { useRouter } from "next/navigation";
import { TableBikeName, TableModelName } from "./components/geometry/utils/geometry.types";
import BikeHero from "./components/hero/BikeHero";
import BikeStrip from "./components/strip/BikeStrip";
import FeelTheFuture from "./components/goat/FeelTheFuture";
import FeaturesFirstSection from "./components/features/FeaturesFirstSection";
import FeatureShowcase from "./components/features/FeatureShowcase";
import { FEATURES } from "./utils/bikes-data";
import SpecsCompareSection from "./components/geometry/SpecsCompareSection";
import BikeConfigSection from "./components/bike-config/BikeConfigSection";
import SpecsExperienceSection from "./components/specsToExperience/SpecsExperienceSection";
import BicycleRide from "@/components/sections/bicycle-ride/BicycleRide";

export default function BikePageClientDesktop(
    {
        bikeName,
        modelName,
    }: {
        bikeName: TableBikeName;
        modelName: TableModelName;
    }
) {
    const router = useRouter();

    const handleBuy = () => console.log("Buy clicked");
    const handleBookTestRide = () => router.push("/experience");


    return (
        <main className="z-100">
            <section id="overview">
                <BikeHero
                    branding={bikeName}
                    model={modelName}
                    variants={[
                        { name: "M10", front: 130, rear: 120, wheel: "30/MX" },
                        { name: "M12", front: 150, rear: 140, wheel: "29/MX" },
                        { name: "M14", front: 170, rear: 160, wheel: "32/MX" },
                    ]}
                    colors={["black", "var(--color-rust)"]}
                    icon="/icons/Takin-white.png"
                    image="/images/bikes/v1/serow-angled.webp"
                />
            </section>
            <BikeStrip
                name="TAKIN"
                model="M10"
                onBuy={handleBuy}
                onBookTestRide={handleBookTestRide}
                selectedBike={bikeName}
                selectedModel={modelName}
            />
            <FeelTheFuture />
            <section id="features">
                <FeaturesFirstSection />
                <FeatureShowcase features={FEATURES} />,
            </section>
            <section id="geometry">

                <SpecsCompareSection
                    selectedBike={bikeName}
                    selectedModel={modelName}
                />

            </section>
            <section id="bike-config">
                <BikeConfigSection />
            </section>
            <section id="experience">
                <SpecsExperienceSection />
            </section>
            <section id="ride">
                <BicycleRide />
            </section>

        </main>
    )
}