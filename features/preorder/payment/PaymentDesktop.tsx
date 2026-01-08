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

export default function PaymentDesktop() {
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

  const totalDeposit = 2500; // Example amount

  const validateCardForm = () => {
    const newErrors: Partial<PaymentForm> = {};

    if (!form.cardNumber.replace(/\s/g, "")) newErrors.cardNumber = "Card number is required";
    else if (!/^\d{16}$/.test(form.cardNumber.replace(/\s/g, ""))) newErrors.cardNumber = "Invalid card number";

    if (!form.expiryMonth) newErrors.expiryMonth = "Expiry month required";
    if (!form.expiryYear) newErrors.expiryYear = "Expiry year required";

    if (!form.cvv) newErrors.cvv = "CVV is required";
    else if (!/^\d{3,4}$/.test(form.cvv)) newErrors.cvv = "Invalid CVV";

    if (!form.cardholderName.trim()) newErrors.cardholderName = "Cardholder name required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateUpiForm = () => {
    const newErrors: Partial<{ upiId: string }> = {};
    if (!upiId.trim()) newErrors.upiId = "UPI ID is required";
    else if (!upiId.includes('@')) newErrors.upiId = "Invalid UPI ID format";

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
      isValid = true; // Net banking - would redirect to bank
    }

    if (isValid) {
      // In real app, process payment
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
    <div className="max-w-4xl mx-auto p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-[#E4D27C] mb-2">Secure Payment</h1>
        <p className="text-gray-300 text-lg">Complete your preorder with a secure deposit payment.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Payment Form */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 border border-gray-700"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Payment Method</h2>

            {/* Payment Method Selection */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { id: 'card', label: 'Credit/Debit Card', icon: CreditCard },
                { id: 'upi', label: 'UPI', icon: Shield },
                { id: 'netbanking', label: 'Net Banking', icon: Lock },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setPaymentMethod(id as any)}
                  className={`p-4 border-2 transition-all ${
                    paymentMethod === id
                      ? 'border-[#E4D27C] bg-[#E4D27C]/10'
                      : 'border-gray-600 hover:border-gray-500'
                  }`}
                >
                  <Icon className="w-6 h-6 mx-auto mb-2 text-gray-300" />
                  <span className="text-sm text-gray-300">{label}</span>
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {paymentMethod === 'card' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Card Number</label>
                    <Input
                      type="text"
                      value={form.cardNumber}
                      onChange={(e) => updateForm('cardNumber', formatCardNumber(e.target.value))}
                      className={`w-full bg-gray-700 border ${errors.cardNumber ? 'border-red-500' : 'border-gray-600'} px-4 py-3 text-white rounded-none focus:border-[#E4D27C] transition-all`}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                    />
                    {errors.cardNumber && <p className="text-red-400 text-sm mt-1">{errors.cardNumber}</p>}
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Expiry Month</label>
                      <select
                        value={form.expiryMonth}
                        onChange={(e) => updateForm('expiryMonth', e.target.value)}
                        className={`w-full bg-gray-700 border ${errors.expiryMonth ? 'border-red-500' : 'border-gray-600'} px-4 py-3 text-white rotate-none focus:border-[#E4D27C] transition-all`}
                      >
                        <option value="">MM</option>
                        {Array.from({ length: 12 }, (_, i) => (
                          <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                            {String(i + 1).padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                      {errors.expiryMonth && <p className="text-red-400 text-sm mt-1">{errors.expiryMonth}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Expiry Year</label>
                      <select
                        value={form.expiryYear}
                        onChange={(e) => updateForm('expiryYear', e.target.value)}
                        className={`w-full bg-gray-700 border ${errors.expiryYear ? 'border-red-500' : 'border-gray-600'} px-4 py-3 text-white rounded-none focus:border-[#E4D27C] transition-all`}
                      >
                        <option value="">YYYY</option>
                        {Array.from({ length: 10 }, (_, i) => (
                          <option key={i} value={String(new Date().getFullYear() + i)}>
                            {new Date().getFullYear() + i}
                          </option>
                        ))}
                      </select>
                      {errors.expiryYear && <p className="text-red-400 text-sm mt-1">{errors.expiryYear}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">CVV</label>
                      <Input
                        type="text"
                        value={form.cvv}
                        onChange={(e) => updateForm('cvv', e.target.value.replace(/\D/g, ""))}
                        className={`w-full bg-gray-700 border ${errors.cvv ? 'border-red-500' : 'border-gray-600'} px-4 py-3 text-white rounded-none focus:border-[#E4D27C] transition-all`}
                        placeholder="123"
                        maxLength={4}
                      />
                      {errors.cvv && <p className="text-red-400 text-sm mt-1">{errors.cvv}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Cardholder Name</label>
                    <Input
                      type="text"
                      value={form.cardholderName}
                      onChange={(e) => updateForm('cardholderName', e.target.value)}
                      className={`w-full bg-gray-700 border ${errors.cardholderName ? 'border-red-500' : 'border-gray-600'} px-4 py-3 text-white rounded-none focus:border-[#E4D27C] transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.cardholderName && <p className="text-red-400 text-sm mt-1">{errors.cardholderName}</p>}
                  </div>
                </motion.div>
              )}

              {paymentMethod === 'upi' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">UPI ID</label>
                    <Input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      className={`w-full bg-gray-700 border ${errors.upiId ? 'border-red-500' : 'border-gray-600'} px-4 py-3 text-white rounded-none focus:border-[#E4D27C] transition-all`}
                      placeholder="john@upi"
                    />
                    {errors.upiId && <p className="text-red-400 text-sm mt-1">{errors.upiId}</p>}
                  </div>
                </motion.div>
              )}

              {paymentMethod === 'netbanking' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <p className="text-gray-300 mb-4">You will be redirected to your bank's secure payment page.</p>
                  <p className="text-sm text-gray-400">Supported banks: SBI, HDFC, ICICI, Axis, and more.</p>
                </motion.div>
              )}

              <div className="mt-6 flex justify-between items-center">
                <Button
                  type="button"
                  onClick={() => router.back()}
                  variant="outline"
                  className="border-gray-600 text-black cursor-pointer rounded-none"
                >
                  Back to Address
                </Button>

                <Button
                  type="submit"
                  className="bg-[#E4D27C] hover:bg-[#d4c068] text-black cursor-pointer rounded-none font-semibold px-8 py-3 transition-all duration-300"
                >
                  Pay ₹{totalDeposit.toLocaleString()}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 border border-gray-700 sticky top-24"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Preorder Summary</h3>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-300">SB120 TI2 2026</span>
                <span className="text-white">₹9,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Deposit (10%)</span>
                <span className="text-[#E4D27C] font-semibold">₹950</span>
              </div>
              <div className="border-t border-gray-600 pt-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Total Deposit</span>
                  <span className="text-white font-semibold">₹{totalDeposit.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="bg-[#E4D27C]/10 border border-[#E4D27C]/20 p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-[#E4D27C]" />
                <span className="text-sm font-medium text-[#E4D27C]">Secure Payment</span>
              </div>
              <p className="text-xs text-gray-300">
                Your payment is protected by 256-bit SSL encryption and PCI DSS compliance.
              </p>
            </div>

            <div className="text-xs text-gray-400">
              <p>• Deposits are non-refundable but credited towards final purchase</p>
              <p>• Estimated delivery: Q2 2026</p>
              <p>• Updates will be sent to your email</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}