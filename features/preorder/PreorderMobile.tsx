"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PreorderProduct } from "@/features/preorder/components/common";
import { useRouter } from "next/navigation";

interface PreorderMobileProps {
  initial: PreorderProduct[];
}

export default function PreorderMobile({ initial }: PreorderMobileProps) {
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
    <div className="px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <h1 className="text-3xl font-bold text-[#E4D27C] mb-2">Preorder</h1>
        <p className="text-gray-300 text-sm">Secure your future bike today.</p>
      </motion.div>

      <div className="space-y-4 mb-6">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700"
          >
            <div className="flex gap-4">
              <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white mb-1 truncate">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{item.desc}</p>

                <div className="space-y-2 mb-3">
                  <div>
                    <label className="text-xs text-gray-300">Model</label>
                    <select
                      value={item.selectedModel}
                      onChange={(e) => updateItem(item.id, { selectedModel: e.target.value })}
                      className="w-full mt-1 bg-gray-700 border border-gray-600 rounded px-2 py-1 text-white text-sm"
                    >
                      {item.models.map(model => (
                        <option key={model} value={model}>{model}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-gray-300">Color</label>
                    <select
                      value={item.selectedColor}
                      onChange={(e) => updateItem(item.id, { selectedColor: e.target.value })}
                      className="w-full mt-1 bg-gray-700 border border-gray-600 rounded px-2 py-1 text-white text-sm"
                    >
                      {item.colors.map(color => (
                        <option key={color.name} value={color.name}>{color.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-[#E4D27C] font-semibold text-sm">
                    Deposit: ₹{item.depositRequired.toLocaleString()}
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-400 hover:text-red-300 transition-colors text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fixed Bottom Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 p-4"
      >
        <div className="max-w-md mx-auto">
          <div className="flex justify-between mb-2">
            <span className="text-gray-300 text-sm">Total Deposit</span>
            <span className="text-[#E4D27C] font-semibold">₹{totalDeposit.toLocaleString()}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-300 text-sm">Total Value</span>
            <span className="text-white text-sm">₹{totalValue.toLocaleString()}</span>
          </div>

          <Button
            onClick={() => router.push('/preorder/customization')}
            className="w-full bg-[#E4D27C] hover:bg-[#d4c068] text-black font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Customize & Proceed
          </Button>
        </div>
      </motion.div>

      {/* Spacer for fixed bottom */}
      <div className="h-32"></div>
    </div>
  );
}