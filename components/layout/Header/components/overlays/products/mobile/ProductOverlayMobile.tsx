"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import MobileOverlayHeader from "./MobileOverlayHeader";
import MobileProductPreview from "./MobileProductPreview";
import MobileModelSelector from "./MobileModelSelector";
import MobileColorSelector from "./MobileColorSelector";
import MobilePriceCTA from "./MobilePriceCTA";

export default function ProductsOverlayMobile({
    onClose,
    details,
    activeVariant,
    setActiveVariant,
}: {
    onClose: () => void;
    details: any;
    activeVariant: string;
    setActiveVariant: (v: string) => void;
}) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!modalRef.current) return;

        gsap.fromTo(
            modalRef.current,
            { y: "100%", opacity: 0 },
            { y: "0%", opacity: 1, duration: 0.55, ease: "power3.out" }
        );

        // disable scrolling
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);


    return (
        <div className="fixed inset-0 z-300 bg-black/70 backdrop-blur-md flex items-end">
            {/* Fullscreen Bottom Drawer */}
            <div
                ref={modalRef}
                className="
          w-full h-[92vh]
          bg-superblack text-white 
          rounded-t-3xl 
          overflow-y-auto
          flex flex-col
        "
            >
                <MobileOverlayHeader onClose={onClose} />

                {/* CONTENT */}
                <div className="flex-1 px-5 pb-32 pt-3">
                    <MobileProductPreview image={details.image} title={details.title} />

                    <MobileModelSelector
                        models={details.models}
                        activeModel={details.title}
                    />

                    <MobileColorSelector
                        colors={details.colors}
                        active={activeVariant}
                        onSelect={setActiveVariant}
                    />
                </div>

                {/* Bottom CTA */}
                <MobilePriceCTA price={details.price} modelId={details.id} />
            </div>
        </div>
    );
}
