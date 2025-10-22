"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AddressList, Address } from "@/components/address/AddressList";
import { AddressForm, AddressData } from "@/components/address/AddressForm";
import { AddressEmptyState } from "@/components/address/AddressEmptyState";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

/**
 * 🔹 Page Component: Address Selection and Entry
 * 1. Loads addresses from localStorage
 * 2. Allows adding new ones
 * 3. Persists selection and navigates to /cart/payment
 */
export default function AddressPage() {
  const router = useRouter();

  const [addresses, setAddresses] = useState<Address[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);

  /** 🧩 Load Saved Addresses from localStorage */
  useEffect(() => {
    try {
      const saved = localStorage.getItem("radkaat-addresses");
      if (saved) {
        const parsed: Address[] = JSON.parse(saved);
        setAddresses(parsed);
      }
    } catch (error) {
      console.error("Error loading saved addresses:", error);
    }
  }, []);

  /** 💾 Save New Address */
  const handleSaveAddress = (data: AddressData) => {
    // ✅ Safe fallback for environments without crypto.randomUUID()
    const generateUUID = (): string => {
      if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
        return (crypto as Crypto).randomUUID();
      }
      // Fallback to a lightweight random string
      return "id-" + Math.random().toString(36).substring(2, 11);
    };

    const newAddress: Address = {
      id: generateUUID(),
      fullName: data.fullName,
      addressLine1: data.address,
      city: data.city,
      state: data.state,
      postalCode: data.pincode,
      phone: data.phone,
      landmark: data.landmark,
      alternatePhone: data.alternatePhone,
      addressType: data.addressType,
    };

    const updated = [...addresses, newAddress];
    setAddresses(updated);
    localStorage.setItem("radkaat-addresses", JSON.stringify(updated));
    setShowForm(false);
  };

  const [selectedId, setSelectedId] = useState<string | null>(null);

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
                className="flex items-center gap-2 border border-army text-army px-4 py-2 
                  text-sm uppercase tracking-wide
                  transition-all duration-300 cursor-pointer"
              >
                <Plus size={18} />
                Add New
              </button>
            )}
          </div>

          {/* Conditional Rendering */}
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
