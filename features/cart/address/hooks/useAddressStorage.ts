"use client";

import { useState } from "react";
import { AddressData } from "../components/AddressForm";
import { Address } from "../components/AddressList";
import { generateUUID } from "../utils/address.helpers";

export function useAddressStorage() {
  const [addresses, setAddresses] = useState<Address[]>([]);

  const loadAddresses = () => {
    try {
      const saved = localStorage.getItem("radkaat-addresses");
      if (saved) {
        setAddresses(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load addresses", e);
    }
  };

  const saveAddresses = (data: AddressData) => {
    const newAddress: Address = {
      id: generateUUID(),
      fullName: data.fullName,
      addressLine1: data.address,
      city: data.city,
      state: data.state,
      postalCode: data.pincode,
      phone: data.phone,
      alternatePhone: data.alternatePhone,
      landmark: data.landmark,
      addressType: data.addressType,
    };

    const updated = [...addresses, newAddress];
    setAddresses(updated);
    localStorage.setItem("radkaat-addresses", JSON.stringify(updated));

    return newAddress;
  };

  return { addresses, setAddresses, loadAddresses, saveAddresses };
}
