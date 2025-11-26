"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export interface AddressData {
  fullName: string;
  phone: string;
  alternatePhone?: string;
  pincode: string;
  address: string;
  landmark?: string;
  city: string;
  state: string;
  addressType: "Home" | "Office" | "Other";
}

interface AddressFormMobileProps {
  onSubmit: (data: AddressData) => void;
}

export const AddressFormMobile: React.FC<AddressFormMobileProps> = ({
  onSubmit,
}) => {
  const [form, setForm] = useState<AddressData>({
    fullName: "",
    phone: "",
    alternatePhone: "",
    pincode: "",
    address: "",
    landmark: "",
    city: "",
    state: "",
    addressType: "Home",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 pt-2 pb-24 px-4">
      {/* ✅ Input Fields */}
      {[
        { label: "Full Name", name: "fullName", required: true },
        { label: "Phone", name: "phone", required: true },
        { label: "Alternate Phone", name: "alternatePhone", required: false },
        { label: "Pincode", name: "pincode", required: true },
        { label: "City", name: "city", required: true },
        { label: "State", name: "state", required: true },
      ].map((field) => (
        <div key={field.name} className="flex flex-col gap-1">
          <label className="text-xs text-white/60 uppercase tracking-wide">
            {field.label}
          </label>
          <input
            name={field.name}
            type="text"
            required={field.required}
            value={form[field.name as keyof AddressData] as string}
            onChange={handleChange}
            placeholder={`Enter ${field.label}`}
            className="
              w-full px-4 py-3 text-sm rounded-md
              bg-[#121212]/95 border border-[#2a2a2a] text-white
              focus:border-army focus:ring-0 outline-none
              placeholder:text-white/30
              transition-all duration-200
            "
          />
        </div>
      ))}

      {/* ✅ Address */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-white/60 uppercase tracking-wide">
          Address
        </label>
        <textarea
          name="address"
          required
          rows={3}
          placeholder="Flat / House No. / Building / Area"
          value={form.address}
          onChange={handleChange}
          className="
            w-full px-4 py-3 text-sm rounded-md
            bg-[#121212]/95 border border-[#2a2a2a] text-white
            focus:border-army focus:ring-0 outline-none
            placeholder:text-white/30
            transition-all duration-200
          "
        />
      </div>

      {/* ✅ Landmark */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-white/60 uppercase tracking-wide">
          Landmark (Optional)
        </label>
        <input
          name="landmark"
          placeholder="Nearby area or landmark"
          value={form.landmark ?? ""}
          onChange={handleChange}
          className="
            w-full px-4 py-3 text-sm rounded-md
            bg-[#121212]/95 border border-[#2a2a2a] text-white
            focus:border-army focus:ring-0 outline-none
            placeholder:text-white/30
            transition-all duration-200
          "
        />
      </div>

      {/* ✅ Address Type Pills */}
      <div className="flex flex-col gap-2 mt-2">
        <label className="text-xs text-white/60 uppercase tracking-wide">
          Address Type
        </label>

        <div className="flex gap-3">
          {["Home", "Office", "Other"].map((type) => (
            <button
              key={type}
              type="button"
              onClick={() =>
                setForm((prev) => ({
                  ...prev,
                  addressType: type as AddressData["addressType"],
                }))
              }
              className={`
                px-4 py-2 bg-[#121212]/95 rounded-full text-xs uppercase tracking-wide
                border transition-all duration-200
                ${
                  form.addressType === type
                    ? "border-army bg-army/20 text-army"
                    : "border-[#2a2a2a] text-white/60"
                }
              `}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ Sticky Submit Button */}
      <motion.button
        type="submit"
        whileTap={{ scale: 0.97 }}
        className="
          fixed bottom-0 left-0 right-0 mx-auto w-full max-w-md
          bg-army text-black font-semibold uppercase tracking-wider
          py-4 text-sm cursor-pointer
          shadow-[0_-2px_25px_rgba(0,0,0,0.4)]
        "
      >
        Continue
      </motion.button>
    </form>
  );
};

export default AddressFormMobile;
