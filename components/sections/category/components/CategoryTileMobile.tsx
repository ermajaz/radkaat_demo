"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CategoryTileMobile({
    product,
    onClose,
}: {
    product: any;
    onClose?: () => void;
}) {
    const router = useRouter();

    const handleClick = () => {
        const title = product.title.toLowerCase();

        onClose?.();

        if (title === "bikes") {
            router.push("/#bike-showcase");
            return;
        }

        router.push(`/${title}`);
    };

    return (
        <motion.div
            onClick={handleClick}
            whileTap={{ scale: 0.96 }}
            className="relative snap-center min-w-[85%] h-[50vh] rounded-xl border border-white/8 overflow-hidden cursor-pointer"
        >
            {/* ✅ Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    priority
                    quality={100}
                    className="object-cover scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/40 to-black/80" />
            </div>

            {/* ✅ Floating title pill */}
            <div className="absolute bottom-8 w-full flex justify-center">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="
          px-10 py-2 rounded-[26px]
                    bg-[radial-gradient(circle,rgba(255,204,102,0.04)_30%,rgba(255,204,102,0.1)_100%,rgba(255,204,102,0.6)_100%)]
                    border border-sandstorm/40
                    flex items-center justify-center
          "
                >
                    {product.title}
                </motion.div>
            </div>
        </motion.div>
    );
}
