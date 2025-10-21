"use client";

import React from "react";
import dynamic from "next/dynamic";
import "react-phone-input-2/lib/style.css";

// ✅ Define strict, type-safe interface (no `any`)
interface ReactPhoneInputProps {
  country?: string;
  value?: string;
  onChange?: (
    value: string,
    data: Record<string, unknown>,
    event: React.ChangeEvent<HTMLInputElement>,
    formattedValue: string
  ) => void;
  inputProps?: Record<string, unknown>;
  containerClass?: string;
  inputClass?: string;
  buttonClass?: string;
  dropdownClass?: string;
  searchClass?: string;
  specialLabel?: string;
}

// ✅ Dynamically import with strict types
const PhoneInput = dynamic<ReactPhoneInputProps>(
  () => import("react-phone-input-2"),
  { ssr: false }
);

type PhoneInputWrapperProps = {
  value?: string;
  onChange?: (value: string) => void;
  inputProps?: Record<string, unknown>;
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
      {/* Label */}
      {label && (
        <label className="block text-sm tracking-wider text-gray-300 mb-2 uppercase font-medium">
          {label}
        </label>
      )}

      {/* Phone Input */}
      <div
        className={`w-full border ${
          error ? "border-red-500" : "border-white/20"
        } bg-transparent transition-all duration-200 focus-within:border-white`}
      >
        <PhoneInput
          country="us"
          value={value}
          onChange={(val) => onChange?.(val)}
          inputProps={{
            name: "phone",
            required: true,
            autoFocus: false,
            ...inputProps,
          }}
          containerClass="!w-full !h-[48px] flex items-center"
          inputClass="!w-full !h-[48px] !bg-transparent !text-white !text-sm !pl-[58px] !pr-4 !outline-none !border-none placeholder-gray-500"
          buttonClass="!h-[48px] !bg-transparent !border-none !outline-none !px-2 !text-white"
          dropdownClass="!absolute !z-[9999] !max-h-[250px] !overflow-y-auto !bg-[#0a0a0a] !text-white !border !border-white/20 !rounded-md !shadow-xl"
          searchClass="!text-white !bg-[#111]"
          specialLabel=""
        />
      </div>

      {/* Error Text */}
      {error && typeof error === "string" && (
        <p className="mt-2 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
};
