"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { useAddressStorage } from "./hooks/useAddressStorage";
import { Address } from "./components/AddressList";
import AddressEmptyStateMobile from "./components/mobile/AddressEmptyStateMobile";
import AddressListMobile from "./components/mobile/AddressListMobile";
import AddressFormMobileModal from "./components/mobile/AddressFormMobileModal";

export default function AddressMobile() {
  const router = useRouter();

  const { addresses, loadAddresses, saveAddresses } = useAddressStorage();

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
    <main className="min-h-screen px-4 bg-superblack text-white pt-5">

      {/* ✅ HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-6"
      >
        <h2 className="text-lg font-semibold uppercase tracking-wide">
          Shipping Address
        </h2>

        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-1 text-[13px] text-sandstorm"
          >
            <Plus size={16} /> Add
          </button>
        )}
      </motion.div>

      {/* ✅ CONTENT */}
      {addresses.length > 0 ? (
        <AddressListMobile
          addresses={addresses}
          selectedId={selectedId}
          onSelect={handleSelectAddress}
          onAddNew={() => setShowForm(true)}
        />
      ) : (
        <AddressEmptyStateMobile onAddNew={() => setShowForm(true)} />
      )}

      {/* ✅ FULL-SCREEN ADDRESS FORM SHEET */}
      <AddressFormMobileModal
        open={showForm}
        onClose={() => setShowForm(false)}
        onSubmit={handleSaveAddress}
      />
    </main>
  );
}
