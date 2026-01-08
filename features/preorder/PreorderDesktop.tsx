"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PreorderProduct } from "@/features/preorder/components/common";
import { useRouter } from "next/navigation";

interface PreorderDesktopProps {
  initial: PreorderProduct[];
}

export default function PreorderDesktop({ initial }: PreorderDesktopProps) {
  const [items, setItems] = useState<PreorderProduct[]>(initial);
  const router = useRouter();

  const totalDeposit = items.reduce((sum, item) => sum + item.depositRequired * item.qty, 0);
  const totalValue = items.reduce((sum, item) => sum + item.basePrice * item.qty, 0);

  const updateItem = (id: string, updates: Partial<PreorderProduct>) => {
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, ...updates } : item
    ));
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-[#E4D27C] mb-2">Preorder Your Dream Bike</h1>
        <p className="text-gray-300 text-lg">Secure your spot in the future of cycling with our limited preorder program.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items List */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 border border-gray-700 hover:border-[#E4D27C]/30 transition-all duration-300"
            >
              <div className="flex gap-6">
                <div className="relative w-32 h-32 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.desc}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="text-sm text-gray-300">Model</label>
                      <select
                        value={item.selectedModel}
                        onChange={(e) => updateItem(item.id, { selectedModel: e.target.value })}
                        className="w-full mt-1 bg-gray-700 border border-gray-600 rounded-none px-3 py-2 text-white"
                      >
                        {item.models.map(model => (
                          <option key={model} value={model}>{model}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-sm text-gray-300">Color</label>
                      <select
                        value={item.selectedColor}
                        onChange={(e) => updateItem(item.id, { selectedColor: e.target.value })}
                        className="w-full mt-1 bg-gray-700 border border-gray-600 rounded-none px-3 py-2 text-white"
                      >
                        {item.colors.map(color => (
                          <option key={color.name} value={color.name}>{color.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-[#E4D27C] font-semibold">
                      Deposit: ₹{item.depositRequired.toLocaleString()}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Sidebar */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 border border-gray-700 sticky top-24"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Preorder Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-300">Total Items</span>
                <span className="text-white">{items.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Total Deposit</span>
                <span className="text-[#E4D27C] font-semibold">₹{totalDeposit.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Total Value</span>
                <span className="text-white">₹{totalValue.toLocaleString()}</span>
              </div>
            </div>

            <div className="bg-[#E4D27C]/10 border border-[#E4D27C]/20 p-4 mb-6">
              <p className="text-sm text-[#E4D27C]">
                <strong>Note:</strong> Deposits are non-refundable but will be credited towards your final purchase.
              </p>
            </div>

            <Button
              onClick={() => router.push('/preorder/customization')}
              className="w-full bg-[#E4D27C] hover:bg-[#d4c068] text-black font-semibold py-3 rounded-none cursor-pointer transition-all duration-300"
            >
              Proceed to Customization
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}