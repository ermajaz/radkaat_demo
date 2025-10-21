"use client";

import React from "react";
import dynamic from "next/dynamic";
import "react-phone-input-2/lib/style.css";

// Dynamic import to avoid SSR errors
const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false }) as any;

type PhoneInputWrapperProps = {
  value?: string;
  onChange?: (value: string) => void;
  inputProps?: any;
  label?: string;
  error?: string | boolean;
};

export const PhoneInputWrapper: React.FC<PhoneInputWrapperProps> = ({
  value,
  onChange,
  inputProps,
  label,
  error,
}) => {
  return (
    <div className="w-full relative z-20">
      {label && (
        <label className="block text-sm tracking-wider text-gray-500 mb-2 uppercase font-medium">
          {label}
        </label>
      )}

      <div
        className={`w-full border ${
          error ? "border-red-500" : "border-white"
        } bg-transparent backdrop-blur-sm transition-all duration-200 
        `}
      >
        <PhoneInput
          country={"us"}
          value={value}
          onChange={onChange}
          inputProps={{
            name: "phone",
            required: true,
            autoFocus: false,
            ...inputProps,
          }}
          // ✅ ensures full width and height alignment
          containerClass="!w-full !h-[48px] flex items-center"
          inputClass="!w-full !h-[48px] !bg-transparent !text-white !text-sm !pl-[58px] !pr-4 !outline-none !border-none placeholder-gray-500"
          buttonClass="!h-[48px] !bg-transparent !border-none !outline-none !px-2 !text-white"
          // ✅ Dropdown fixed & scrollable
          dropdownClass="!absolute !z-[9999] !max-h-[250px] !overflow-y-auto !bg-[#0a0a0a] !text-white !border !border-white/20 !rounded-md !shadow-xl"
          searchClass="!text-white !bg-[#111]"
          specialLabel=""
        />
      </div>

      {error && typeof error === "string" && (
        <p className="mt-2 text-xs text-rust">{error}</p>
      )}
    </div>
  );
};
