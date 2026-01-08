"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, Phone, MapPin, Calendar, Download } from "lucide-react";
import ReactConfetti from "react-confetti";
import { useEffect, useState } from "react";

export default function ConfirmationDesktop() {
  const router = useRouter();

  const orderDetails = {
    orderId: "PRE-2026-001234",
    depositAmount: 2500,
    items: [
      {
        name: "SB120 TI2 2026 Preorder",
        model: "Medium",
        color: "Matte Black",
        deposit: 1000,
        delivery: "Q2 2026"
      },
      {
        name: "SB160 TEAM ISSUE 2026 Preorder",
        model: "Medium",
        color: "Team Red",
        deposit: 1500,
        delivery: "Q1 2026"
      }
    ],
    customer: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+91 98765 43210",
      address: "123 Main Street, Apartment 4B, Mumbai, Maharashtra 400001"
    },
    paymentMethod: "Credit Card ending in 3456"
  };

  const [showConfetti, setShowConfetti] = useState(false);
  
    useEffect(() => {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 6000);
  
      return () => clearTimeout(timer);
    }, []);

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* 🎊 Confetti */}
      {showConfetti && <ReactConfetti recycle={false} numberOfPieces={250} gravity={0.2} />}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center justify-center w-20 h-20 bg-[#E4D27C]/20 rounded-full mb-4"
        >
          <CheckCircle className="w-10 h-10 text-[#E4D27C]" />
        </motion.div>
        <h1 className="text-4xl font-bold text-[#E4D27C] mb-2">Preorder Confirmed!</h1>
        <p className="text-gray-300 text-lg">Thank you for securing your place in the future of cycling.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Order Details */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gray-800/50 backdrop-blur-sm p-6 border border-gray-700"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">Order Details</h2>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Order ID</span>
              <span className="text-white font-mono">{orderDetails.orderId}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Total Deposit</span>
              <span className="text-[#E4D27C] font-semibold">₹{orderDetails.depositAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Payment Method</span>
              <span className="text-white">{orderDetails.paymentMethod}</span>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-4">
            <h3 className="text-lg font-medium text-white mb-4">Preordered Items</h3>
            <div className="space-y-4">
              {orderDetails.items.map((item, index) => (
                <div key={index} className="bg-gray-700/50 p-4">
                  <h4 className="font-medium text-white mb-2">{item.name}</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                    <div>Model: {item.model}</div>
                    <div>Color: {item.color}</div>
                    <div>Deposit: ₹{item.deposit.toLocaleString()}</div>
                    <div>Delivery: {item.delivery}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Customer & Next Steps */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          {/* Customer Info */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-6">Customer Information</h2>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#E4D27C]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#E4D27C] font-semibold text-sm">
                    {orderDetails.customer.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <span className="text-white">{orderDetails.customer.name}</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">{orderDetails.customer.email}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">{orderDetails.customer.phone}</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <span className="text-gray-300 text-sm">{orderDetails.customer.address}</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-6">What's Next?</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#E4D27C]/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#E4D27C] font-semibold text-xs">1</span>
                </div>
                <div>
                  <h3 className="text-white font-medium">Confirmation Email</h3>
                  <p className="text-gray-300 text-sm">Check your email for order confirmation and next steps.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#E4D27C]/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#E4D27C] font-semibold text-xs">2</span>
                </div>
                <div>
                  <h3 className="text-white font-medium">Production Updates</h3>
                  <p className="text-gray-300 text-sm">We'll keep you updated on production progress and timelines.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#E4D27C]/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#E4D27C] font-semibold text-xs">3</span>
                </div>
                <div>
                  <h3 className="text-white font-medium">Final Payment</h3>
                  <p className="text-gray-300 text-sm">Remaining balance due before delivery.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-[#E4D27C] mt-0.5" />
                <div>
                  <h3 className="text-white font-medium">Estimated Delivery</h3>
                  <p className="text-gray-300 text-sm">Q1-Q2 2026, depending on your bike model.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button
          onClick={() => router.push('/')}
          className="bg-[#E4D27C] hover:bg-[#d4c068] text-black font-semibold px-8 py-3 rounded-none cursor-pointer transition-all duration-300"
        >
          Continue Shopping
        </Button>

        <Button
          variant="outline"
          className="border-gray-600 text-black cursor-pointer rounded-none px-8 py-3"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Receipt
        </Button>
      </motion.div>

      {/* Support Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-8 text-center"
      >
        <p className="text-gray-400 text-sm">
          Need help? Contact our support team at{" "}
          <a href="mailto:support@radkaat.com" className="text-[#E4D27C] hover:underline">
            support@radkaat.com
          </a>{" "}
          or call{" "}
          <a href="tel:+919876543210" className="text-[#E4D27C] hover:underline">
            +91 98765 43210
          </a>
        </p>
      </motion.div>
    </div>
  );
}