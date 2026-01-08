"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

interface AddressForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

export default function AddressMobile() {
  const router = useRouter();
  const [form, setForm] = useState<AddressForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
  });

  const [errors, setErrors] = useState<Partial<AddressForm>>({});

  const validateForm = () => {
    const newErrors: Partial<AddressForm> = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) newErrors.phone = "Invalid phone";
    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!form.state.trim()) newErrors.state = "State is required";
    if (!form.pincode.trim()) newErrors.pincode = "Pincode is required";
    else if (!/^\d{6}$/.test(form.pincode)) newErrors.pincode = "Invalid pincode";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      router.push('/preorder/payment');
    }
  };

  const updateForm = (field: keyof AddressForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="px-4 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <h1 className="text-3xl font-bold text-[#E4D27C] mb-2">Shipping Address</h1>
        <p className="text-gray-300 text-sm">Enter your delivery details.</p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">First Name</label>
            <Input
              type="text"
              value={form.firstName}
              onChange={(e) => updateForm('firstName', e.target.value)}
              className={`w-full bg-gray-700 border ${errors.firstName ? 'border-red-500' : 'border-gray-600'} rounded-lg px-3 py-2 text-white text-sm focus:border-[#E4D27C] transition-all`}
              placeholder="John"
            />
            {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Last Name</label>
            <Input
              type="text"
              value={form.lastName}
              onChange={(e) => updateForm('lastName', e.target.value)}
              className={`w-full bg-gray-700 border ${errors.lastName ? 'border-red-500' : 'border-gray-600'} rounded-lg px-3 py-2 text-white text-sm focus:border-[#E4D27C] transition-all`}
              placeholder="Doe"
            />
            {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <Input
            type="email"
            value={form.email}
            onChange={(e) => updateForm('email', e.target.value)}
            className={`w-full bg-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-lg px-3 py-2 text-white text-sm focus:border-[#E4D27C] transition-all`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Phone</label>
          <Input
            type="tel"
            value={form.phone}
            onChange={(e) => updateForm('phone', e.target.value)}
            className={`w-full bg-gray-700 border ${errors.phone ? 'border-red-500' : 'border-gray-600'} rounded-lg px-3 py-2 text-white text-sm focus:border-[#E4D27C] transition-all`}
            placeholder="9876543210"
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Address</label>
          <textarea
            value={form.address}
            onChange={(e) => updateForm('address', e.target.value)}
            className={`w-full bg-gray-700 border ${errors.address ? 'border-red-500' : 'border-gray-600'} rounded-lg px-3 py-2 text-white text-sm focus:border-[#E4D27C] transition-all resize-none`}
            rows={3}
            placeholder="123 Main Street, Apartment 4B"
          />
          {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address}</p>}
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">City</label>
            <Input
              type="text"
              value={form.city}
              onChange={(e) => updateForm('city', e.target.value)}
              className={`w-full bg-gray-700 border ${errors.city ? 'border-red-500' : 'border-gray-600'} rounded px-2 py-1 text-white text-xs focus:border-[#E4D27C] transition-all`}
              placeholder="Mumbai"
            />
            {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">State</label>
            <Input
              type="text"
              value={form.state}
              onChange={(e) => updateForm('state', e.target.value)}
              className={`w-full bg-gray-700 border ${errors.state ? 'border-red-500' : 'border-gray-600'} rounded px-2 py-1 text-white text-xs focus:border-[#E4D27C] transition-all`}
              placeholder="Maharashtra"
            />
            {errors.state && <p className="text-red-400 text-xs mt-1">{errors.state}</p>}
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1">Pincode</label>
            <Input
              type="text"
              value={form.pincode}
              onChange={(e) => updateForm('pincode', e.target.value)}
              className={`w-full bg-gray-700 border ${errors.pincode ? 'border-red-500' : 'border-gray-600'} rounded px-2 py-1 text-white text-xs focus:border-[#E4D27C] transition-all`}
              placeholder="400001"
            />
            {errors.pincode && <p className="text-red-400 text-xs mt-1">{errors.pincode}</p>}
          </div>
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            className="w-full bg-[#E4D27C] hover:bg-[#d4c068] text-black font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Proceed to Payment
          </Button>
        </div>
      </motion.form>

      <div className="mt-4 text-center">
        <Button
          type="button"
          onClick={() => router.back()}
          variant="outline"
          className="border-gray-600 text-gray-300 hover:bg-gray-700 text-sm"
        >
          Back
        </Button>
      </div>
    </div>
  );
}