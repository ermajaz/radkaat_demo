"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import {
  Address,
  AddressList,
  AddressData,
} from "@/features/cart/address";

import AddressEmptyStateMobile from "@/features/cart/address/components/mobile/AddressEmptyStateMobile";
import AddressFormMobileModal from "@/features/cart/address/components/mobile/AddressFormMobileModal";
import AddressListMobile from "@/features/cart/address/components/mobile/AddressListMobile";

export default function ProfileAddressMobile() {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [showForm, setShowForm] = useState(false);

  // ✅ Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("radkaat-addresses");
      if (saved) {
        setAddresses(JSON.parse(saved));
      }
    } catch (err) {
      console.error("Failed to load addresses", err);
    }
  }, []);

  // ✅ Save Address Handler
  const handleSaveAddress = (data: AddressData) => {
    console.log(data);
    const newAddress: Address = {
      id: Date.now().toString(),
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

    console.log("Updated addresses:", updated);

    setAddresses(updated);
    localStorage.setItem("radkaat-addresses", JSON.stringify(updated));

    setShowForm(false);
  };

  return (
    <motion.div
      className="bg-[#121212]/95  border border-[#2a2a2a] rounded-xl p-5"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* ✅ Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold uppercase text-white/80">
          Saved Addresses
        </h3>

        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-1 text-[12px] text-sandstorm"
        >
          <Plus size={14} /> Add
        </button>
      </div>

      {/* ✅ MODAL -->
          Show only when adding new */}
      <AddressFormMobileModal
        open={showForm}
        onClose={() => setShowForm(false)}
        onSubmit={handleSaveAddress}
      />

      {/* ✅ LIST OR EMPTY STATE */}
      {addresses.length > 0 ? (
        <AddressListMobile
          addresses={addresses}
          selectedId={null}
          onSelect={() => {}}
          onAddNew={() => setShowForm(true)}
        />
      ) : (
        <AddressEmptyStateMobile onAddNew={() => setShowForm(true)} />
      )}
    </motion.div>
  );
}
