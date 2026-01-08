"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PreorderProduct } from "@/features/preorder/components/common";
import { useRouter } from "next/navigation";

interface CustomizationProps {}

const customizationOptions = {
  handlebarTape: ["Leather", "Carbon", "Cork", "Silicone"],
  saddle: ["Premium Carbon", "Pro Team", "Comfort Gel", "Racing"],
  wheels: ["Carbon Clincher", "Carbon Tubeless", "Aluminum", "Premium Alloy"],
  groupset: ["Shimano 105", "Shimano Tiagra", "Shimano Dura-Ace", "Campagnolo"],
};

export default function Customization({}: CustomizationProps) {
  // For demo, using static data. In real app, this would come from Redux or context
  const [items] = useState<PreorderProduct[]>([
    {
      id: "pre1",
      title: "SB120 TI2 2026 Preorder",
      desc: "Limited Edition Titanium Frame",
      sku: "PRE-B26120TI2-2026",
      basePrice: 9500,
      qty: 1,
      image: "/images/hero-bike-new.png",
      models: ["XS", "SM", "MD", "LG", "XL"],
      colors: [{ name: "Matte Black", hex: "#1a1a1a" }],
      selectedModel: "MD",
      selectedColor: "Matte Black",
      customizations: {
        handlebarTape: "Leather",
        saddle: "Premium Carbon",
        wheels: "Carbon Clincher",
        groupset: "Shimano 105",
      },
      depositRequired: 1000,
      estimatedDelivery: "Q2 2026",
    },
  ]);

  const router = useRouter();

  const updateCustomization = (itemId: string, key: keyof PreorderProduct['customizations'], value: string) => {
    // In real app, update state/store
    console.log(`Updating ${itemId} ${key} to ${value}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-[#E4D27C] mb-2">Customize Your Preorder</h1>
        <p className="text-gray-300 text-lg">Personalize your bike with premium components and finishes.</p>
      </motion.div>

      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 border border-gray-700"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/3">
                <div className="relative aspect-square overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>

              <div className="lg:w-2/3">
                <h4 className="text-lg font-semibold text-[#E4D27C] mb-4">Component Customization</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(customizationOptions).map(([key, options]) => (
                    <div key={key}>
                      <label className="block text-sm font-medium text-gray-300 mb-2 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </label>
                      <select
                        value={item.customizations[key as keyof typeof item.customizations]}
                        onChange={(e) => updateCustomization(item.id, key as keyof PreorderProduct['customizations'], e.target.value)}
                        className="w-full bg-gray-700 border border-gray-600 px-4 py-3 text-white focus:border-[#E4D27C] focus:ring-1 focus:ring-[#E4D27C] transition-all"
                      >
                        {options.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-[#E4D27C]/10 border border-[#E4D27C]/20">
                  <p className="text-sm text-[#E4D27C]">
                    <strong>Customization Note:</strong> Premium components may affect delivery timeline and final pricing.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-8 flex justify-between items-center"
      >
        <Button
          onClick={() => router.back()}
          variant="outline"
          className="border-gray-600 text-black cursor-pointer rounded-none"
        >
          Back to Preorder
        </Button>

        <Button
          onClick={() => router.push('/preorder/address')}
          className="bg-[#E4D27C] hover:bg-[#d4c068] text-black cursor-pointer rounded-none font-semibold px-8 py-3 transition-all duration-300"
        >
          Proceed to Address
        </Button>
      </motion.div>
    </div>
  );
}