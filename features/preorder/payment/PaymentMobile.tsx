"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { CreditCard, Shield, Lock } from "lucide-react";

interface PaymentForm {
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
  cardholderName: string;
}

export default function PaymentMobile() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'netbanking'>('card');
  const [form, setForm] = useState<PaymentForm>({
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    cardholderName: "",
  });
  const [upiId, setUpiId] = useState("");
  const [errors, setErrors] = useState<Partial<PaymentForm & { upiId: string }>>({});

  const totalDeposit = 2500;

  const validateCardForm = () => {
    const newErrors: Partial<PaymentForm> = {};
    if (!form.cardNumber.replace(/\s/g, "")) newErrors.cardNumber = "Card number required";
    else if (!/^\d{16}$/.test(form.cardNumber.replace(/\s/g, ""))) newErrors.cardNumber = "Invalid card number";
    if (!form.expiryMonth) newErrors.expiryMonth = "Required";
    if (!form.expiryYear) newErrors.expiryYear = "Required";
    if (!form.cvv) newErrors.cvv = "CVV required";
    else if (!/^\d{3,4}$/.test(form.cvv)) newErrors.cvv = "Invalid CVV";
    if (!form.cardholderName.trim()) newErrors.cardholderName = "Name required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateUpiForm = () => {
    const newErrors: Partial<{ upiId: string }> = {};
    if (!upiId.trim()) newErrors.upiId = "UPI ID required";
    else if (!upiId.includes('@')) newErrors.upiId = "Invalid UPI ID";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = false;
    if (paymentMethod === 'card') {
      isValid = validateCardForm();
    } else if (paymentMethod === 'upi') {
      isValid = validateUpiForm();
    } else {
      isValid = true;
    }

    if (isValid) {
      router.push('/preorder/confirmation');
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  const updateForm = (field: keyof PaymentForm, value: string) => {
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
        <h1 className="text-3xl font-bold text-[#E4D27C] mb-2">Payment</h1>
        <p className="text-gray-300 text-sm">Secure your preorder deposit.</p>
      </motion.div>

      {/* Order Summary - Fixed Top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 mb-6 border border-gray-700"
      >
        <h3 className="text-lg font-semibold text-white mb-3">Preorder Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-300">SB120 TI2 2026</span>
            <span className="text-white">₹9,500</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-300">Deposit (10%)</span>
            <span className="text-[#E4D27C]">₹950</span>
          </div>
          <div className="border-t border-gray-600 pt-2">
            <div className="flex justify-between font-semibold">
              <span className="text-gray-300">Total Deposit</span>
              <span className="text-white">₹{totalDeposit.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Payment Method Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-6"
      >
        <h2 className="text-xl font-semibold text-white mb-4">Payment Method</h2>
        <div className="grid grid-cols-3 gap-3">
          {[
            { id: 'card', label: 'Card', icon: CreditCard },
            { id: 'upi', label: 'UPI', icon: Shield },
            { id: 'netbanking', label: 'Net Banking', icon: Lock },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setPaymentMethod(id as any)}
              className={`p-3 rounded-lg border-2 transition-all ${
                paymentMethod === id
                  ? 'border-[#E4D27C] bg-[#E4D27C]/10'
                  : 'border-gray-600 hover:border-gray-500'
              }`}
            >
              <Icon className="w-5 h-5 mx-auto mb-1 text-gray-300" />
              <span className="text-xs text-gray-300">{label}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Payment Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {paymentMethod === 'card' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Card Number</label>
              <Input
                type="text"
                value={form.cardNumber}
                onChange={(e) => updateForm('cardNumber', formatCardNumber(e.target.value))}
                className={`w-full bg-gray-700 border ${errors.cardNumber ? 'border-red-500' : 'border-gray-600'} rounded-lg px-3 py-2 text-white text-sm focus:border-[#E4D27C] transition-all`}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
              />
              {errors.cardNumber && <p className="text-red-400 text-xs mt-1">{errors.cardNumber}</p>}
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">MM</label>
                <select
                  value={form.expiryMonth}
                  onChange={(e) => updateForm('expiryMonth', e.target.value)}
                  className={`w-full bg-gray-700 border ${errors.expiryMonth ? 'border-red-500' : 'border-gray-600'} rounded px-2 py-2 text-white text-sm focus:border-[#E4D27C] transition-all`}
                >
                  <option value="">MM</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                      {String(i + 1).padStart(2, '0')}
                    </option>
                  ))}
                </select>
                {errors.expiryMonth && <p className="text-red-400 text-xs mt-1">{errors.expiryMonth}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">YYYY</label>
                <select
                  value={form.expiryYear}
                  onChange={(e) => updateForm('expiryYear', e.target.value)}
                  className={`w-full bg-gray-700 border ${errors.expiryYear ? 'border-red-500' : 'border-gray-600'} rounded px-2 py-2 text-white text-sm focus:border-[#E4D27C] transition-all`}
                >
                  <option value="">YYYY</option>
                  {Array.from({ length: 10 }, (_, i) => (
                    <option key={i} value={String(new Date().getFullYear() + i)}>
                      {new Date().getFullYear() + i}
                    </option>
                  ))}
                </select>
                {errors.expiryYear && <p className="text-red-400 text-xs mt-1">{errors.expiryYear}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">CVV</label>
                <Input
                  type="text"
                  value={form.cvv}
                  onChange={(e) => updateForm('cvv', e.target.value.replace(/\D/g, ""))}
                  className={`w-full bg-gray-700 border ${errors.cvv ? 'border-red-500' : 'border-gray-600'} rounded px-2 py-2 text-white text-sm focus:border-[#E4D27C] transition-all`}
                  placeholder="123"
                  maxLength={4}
                />
                {errors.cvv && <p className="text-red-400 text-xs mt-1">{errors.cvv}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Cardholder Name</label>
              <Input
                type="text"
                value={form.cardholderName}
                onChange={(e) => updateForm('cardholderName', e.target.value)}
                className={`w-full bg-gray-700 border ${errors.cardholderName ? 'border-red-500' : 'border-gray-600'} rounded-lg px-3 py-2 text-white text-sm focus:border-[#E4D27C] transition-all`}
                placeholder="John Doe"
              />
              {errors.cardholderName && <p className="text-red-400 text-xs mt-1">{errors.cardholderName}</p>}
            </div>
          </div>
        )}

        {paymentMethod === 'upi' && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">UPI ID</label>
            <Input
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className={`w-full bg-gray-700 border ${errors.upiId ? 'border-red-500' : 'border-gray-600'} rounded-lg px-3 py-2 text-white text-sm focus:border-[#E4D27C] transition-all`}
              placeholder="john@upi"
            />
            {errors.upiId && <p className="text-red-400 text-xs mt-1">{errors.upiId}</p>}
          </div>
        )}

        {paymentMethod === 'netbanking' && (
          <div className="text-center py-6">
            <p className="text-gray-300 text-sm mb-2">Redirect to bank for secure payment.</p>
            <p className="text-xs text-gray-400">SBI, HDFC, ICICI, Axis supported.</p>
          </div>
        )}

        <div className="pt-4">
          <Button
            type="submit"
            className="w-full bg-[#E4D27C] hover:bg-[#d4c068] text-black font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Pay ₹{totalDeposit.toLocaleString()}
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