"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

/** Address Type Definition */
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

interface AddressFormProps {
  onSubmit: (data: AddressData) => void;
}

export const AddressForm: React.FC<AddressFormProps> = ({ onSubmit }) => {
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

  const inputVariants = {
    focus: { scale: 1.02, borderColor: "#8BA989", transition: { duration: 0.3 } },
    blur: { scale: 1, borderColor: "rgba(255,255,255,0.1)" },
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"
    >
      {/* Text Fields */}
      {[
        { label: "Full Name", name: "fullName", required: true },
        { label: "Phone", name: "phone", required: true },
        { label: "Alternate Phone", name: "alternatePhone", required: false },
        { label: "Pincode", name: "pincode", required: true },
        { label: "City", name: "city", required: true },
        { label: "State", name: "state", required: true },
      ].map((field) => (
        <motion.div
          key={field.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wide">
            {field.label}
          </label>
          <motion.input
            name={field.name}
            type="text"
            value={form[field.name as keyof AddressData] as string}
            onChange={handleChange}
            required={field.required}
            whileFocus="focus"
            variants={inputVariants}
            className="
              w-full px-4 py-2.5 text-sm
              bg-transparent border border-white/20 text-white
              focus:border-army focus:ring-0 outline-none
              placeholder:text-gray-500 transition-all duration-300
            "
            placeholder={`Enter ${field.label}`}
          />
        </motion.div>
      ))}

      {/* Address Field */}
      <div className="md:col-span-2">
        <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wide">
          Address
        </label>
        <motion.textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          required
          rows={3}
          whileFocus="focus"
          variants={inputVariants}
          placeholder="Flat / House No. / Building / Area"
          className="
            w-full px-4 py-2.5 text-sm bg-transparent border border-white/20 
            text-white focus:border-army focus:ring-0 outline-none
            placeholder:text-gray-500 transition-all duration-300
          "
        />
      </div>

      {/* Landmark */}
      <div className="md:col-span-2">
        <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wide">
          Landmark (Optional)
        </label>
        <motion.input
          name="landmark"
          type="text"
          value={form.landmark ?? ""}
          onChange={handleChange}
          placeholder="Nearby area or landmark"
          whileFocus="focus"
          variants={inputVariants}
          className="
            w-full px-4 py-2.5 text-sm
            bg-transparent border border-white/20 text-white
            focus:border-army focus:ring-0 outline-none
            placeholder:text-gray-500 transition-all duration-300
          "
        />
      </div>

      {/* Address Type */}
      <div className="md:col-span-2 flex flex-wrap gap-4 mt-2">
        <label className="block text-sm text-gray-400 uppercase tracking-wide w-full">
          Address Type
        </label>
        {["Home", "Office", "Other"].map((type) => (
          <motion.button
            key={type}
            type="button"
            onClick={() => setForm((prev) => ({ ...prev, addressType: type as AddressData["addressType"] }))}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              px-5 py-2 text-sm cursor-pointer uppercase tracking-wide border 
              ${form.addressType === type
                ? "border-army bg-army/10 text-army"
                : "border-white/10 text-gray-400 hover:border-army/40 hover:text-army"
              } 
              transition-all duration-300
            `}
          >
            {type}
          </motion.button>
        ))}
      </div>

      {/* Submit Button */}
      <div className="md:col-span-2 flex justify-end mt-8">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="px-8 py-3 bg-army cursor-pointer text-black uppercase tracking-wider font-semibold 
                     hover:bg-army/90 active:scale-95 transition-all duration-300"
        >
          Continue to Payment
        </motion.button>
      </div>
    </form>
  );
};
