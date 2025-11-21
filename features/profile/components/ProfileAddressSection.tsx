"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Address, AddressData, AddressEmptyState, AddressForm, AddressList } from "@/features/cart/address";

export default function ProfileAddressSection() {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);

  /** 🧩 Load saved addresses */
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

  /** 💾 Save new address */
  const handleSaveAddress = (data: AddressData) => {
    const generateUUID = (): string => {
      if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
        return (crypto as Crypto).randomUUID();
      }
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

  return (
    <motion.div
      className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-lg space-y-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold tracking-wide">Saved Addresses</h3>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 border border-white/20 text-white/80 px-3 py-1.5 cursor-pointer hover:bg-white/10 transition-all"
          >
            <Plus size={16} /> Add New
          </button>
        )}
      </div>

      {/* Conditional Rendering */}
      {showForm ? (
        <AddressForm onSubmit={handleSaveAddress} />
      ) : addresses.length > 0 ? (
        <AddressList
          addresses={addresses}
          selectedId={null}
          onSelect={() => {}}
          onAddNew={() => setShowForm(true)}
        />
      ) : (
        <AddressEmptyState onAddNew={() => setShowForm(true)} />
      )}
    </motion.div>
  );
}
