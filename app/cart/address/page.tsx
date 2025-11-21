"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { AddressForm } from "@/features/cart/address/components/AddressForm";
import { Address, AddressList } from "@/features/cart/address/components/AddressList";
import { AddressEmptyState } from "@/features/cart/address/components/AddressEmptyState";
import { useAddressStorage } from "@/features/cart/address/hooks/useAddressStorage";

export default function AddressPage() {
  const router = useRouter();

  const { addresses, setAddresses, loadAddresses, saveAddresses } =
    useAddressStorage();

  const [showForm, setShowForm] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    loadAddresses();
  }, []);

  const handleSaveAddress = (data: any) => {
    const newAddress = saveAddresses(data);
    setShowForm(false);
  };

  const handleSelectAddress = (address: Address) => {
    setSelectedId(address.id);
    localStorage.setItem("radkaat-address", JSON.stringify(address));
    router.push("/cart/payment");
  };

  return (
    <main className="min-h-screen text-white">
      <div className="w-full mx-auto py-8 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="border border-[#2b2b2b] p-8 md:p-10 bg-[#0a0a0a] shadow-[0_0_25px_rgba(0,0,0,0.4)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase">
              Shipping Address
            </h2>

            {!showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center gap-2 border border-army text-army px-4 py-2 text-sm uppercase tracking-wide"
              >
                <Plus size={18} />
                Add New
              </button>
            )}
          </div>

          {showForm ? (
            <AddressForm onSubmit={handleSaveAddress} />
          ) : addresses.length > 0 ? (
            <AddressList
              addresses={addresses}
              selectedId={selectedId}
              onSelect={handleSelectAddress}
              onAddNew={() => setShowForm(true)}
            />
          ) : (
            <AddressEmptyState onAddNew={() => setShowForm(true)} />
          )}
        </motion.div>
      </div>
    </main>
  );
}
