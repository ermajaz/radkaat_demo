"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SidebarLayout from "./SidebarLayout";
import NavSection from "./NavSection";
import ModelsSection from "./ModelsSection";
import ProductPreview from "./ProductPreview";
import { MODEL_DETAILS, ModelClassKey, MODELS, PRODUCT_NAV, ProductKey } from "./utils/product-overlay-data";
import Image from "next/image";
import NavList from "../../NavList";
import { Search, X } from "lucide-react";


export default function ProductsOverlay({ onClose, onSearchOpen }: { onClose: () => void, onSearchOpen: () => void }) {
    const overlayRef = useRef<HTMLDivElement>(null);

    const [productsOpen, setProductsOpen] = useState(false);
    const [activeProduct, setActiveProduct] = useState<ProductKey>("bikes");
    const [activeModelClass, setActiveModelClass] = useState<ModelClassKey>("serow");
    const [activeVariant, setActiveVariant] = useState("model-1");

    useEffect(() => {
        if (!overlayRef.current) return;

        gsap.fromTo(
            overlayRef.current,
            { y: "-100%", opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
        );

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);


    const modelDetails = MODEL_DETAILS[activeModelClass];

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-200 bg-superblack text-white flex flex-col mx-auto max-w-[1440px] h-screen"
            onClick={onClose}
        >
            {/* HEADER */}
            <div className="flex h-[90px] items-center bg-[#121212] justify-between px-10 shrink-0">

                {/* LEFT — BIG CLOSE BUTTON */}
                <button
                    onClick={onClose}
                    className="cursor-pointer text-white transition leading-none"
                    style={{ padding: 0, borderRadius: 0 }}
                >
                    <X size={50} strokeWidth={5} />
                </button>

                <NavList onProductsOpen={() => setProductsOpen(true)} />

                <button
                    onClick={onSearchOpen}
                    className="relative group cursor-pointer"
                >
                    <Search
                        size={35}
                        strokeWidth={1.7}
                        className="transition-all duration-200 group-hover:text-sandstorm"
                    />
                    <span className="absolute inset-0 blur-md opacity-0 group-hover:opacity-40 bg-sandstorm/30 transition-all" />
                </button>

            </div>


            {/* CONTENT ROW */}
            <div className="flex flex-row w-full h-full overflow-hidden" onClick={(e) => e.stopPropagation()}>

                {/* LEFT SIDEBAR */}
                <div className="w-[450px] shrink-0 bg-[#121212] px-6 py-10 flex gap-12">
                    <SidebarLayout onClickInside={(e) => e.stopPropagation()}>

                        <NavSection
                            products={PRODUCT_NAV.PRODUCTS}
                            activeProduct={activeProduct}
                            setActiveProduct={(p: ProductKey) => {
                                setActiveProduct(p);
                                const firstModel = MODELS[p][0]?.id;
                                if (firstModel) {
                                    // valid model: assign safely
                                    setActiveModelClass(firstModel as ModelClassKey);
                                } else {
                                    setActiveModelClass("serow");
                                }

                                setActiveVariant("model-1");
                            }}
                        />


                        <ModelsSection
                            models={MODELS[activeProduct]}
                            activeModel={activeModelClass}
                            setActiveModel={(m: ModelClassKey) => {
                                setActiveModelClass(m);
                                setActiveVariant("model-1");
                            }}
                        />
                    </SidebarLayout>
                </div>

                {/* RIGHT PREVIEW */}
                <div className="flex-1 h-full flex items-start justify-center overflow-auto">
                    {modelDetails && (
                        <ProductPreview
                            details={modelDetails}
                            activeVariant={activeVariant}
                            setActiveVariant={setActiveVariant}
                        />
                    )}
                </div>

            </div>
        </div>
    );
}
