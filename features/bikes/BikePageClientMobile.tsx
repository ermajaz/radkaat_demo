"use client";

import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import { useRouter } from "next/navigation";
import { TableBikeName, TableModelName } from "./components/geometry/utils/geometry.types";
import BikeHero from "./components/hero/BikeHero";
import BikeStripMobile from "./components/strip/BikeStripMobile";
import FeelTheFutureMobile from "./components/goat/FeelTheFutureMobile";
import { FEATURES_MOBILE } from "./utils/bikes-data";
import SpecsCompareSectionMobile from "./components/geometry/SpecsCompareSectionMobile";
import BicycleRide from "@/components/sections/bicycle-ride/BicycleRide";
import BikeHeroMobile from "./components/hero/mobile/BikeHeroMobile";
import BikeConfigSectionMobile from "./components/bike-config/BikeConfigSectionMobile";
import SpecsExperienceSectionMobile from "./components/specsToExperience/SpecsExperienceSectionMobile";
import FeaturesIntroMobile from "./components/features/mobile/FeaturesIntroMobile";
import FeatureShowcaseMobile from "./components/features/mobile/FeatureShowcaseMobile";
export default function BikePageClientMobile({
    bikeName,
    modelName,
}: {
    bikeName: TableBikeName;
    modelName: TableModelName;
}) {

    const router = useRouter();

    const handleBuy = () => console.log("Buy clicked");
    const handleBookTestRide = () => router.push("/experience");


    return (
        <main className="z-100">
            <section id="overview">
                <BikeHeroMobile
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
            <BikeStripMobile
                name="TAKIN"
                model="M10"
                onBuy={handleBuy}
                onBookTestRide={handleBookTestRide}
                selectedBike={bikeName}
                selectedModel={modelName}
            />

            <FeelTheFutureMobile />

            <section id="features">
                <FeaturesIntroMobile />
                <FeatureShowcaseMobile features={FEATURES_MOBILE} />
            </section>
            <section id="geometry">
                <SpecsCompareSectionMobile />
            </section>
            <section id="bike-config">
                <BikeConfigSectionMobile />
            </section>
            <section id="experience">
                <SpecsExperienceSectionMobile />
            </section>

            <section id="ride">
                <BicycleRide />
            </section>

        </main>
    )
}