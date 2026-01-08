"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, Phone, MapPin, Calendar, Download, Home } from "lucide-react";

export default function ConfirmationMobile() {
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

  return (
    <div className="px-4 py-6">
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
          className="inline-flex items-center justify-center w-16 h-16 bg-[#E4D27C]/20 rounded-full mb-4"
        >
          <CheckCircle className="w-8 h-8 text-[#E4D27C]" />
        </motion.div>
        <h1 className="text-3xl font-bold text-[#E4D27C] mb-2">Confirmed!</h1>
        <p className="text-gray-300 text-sm">Your preorder is secured.</p>
      </motion.div>

      {/* Order Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 mb-6 border border-gray-700"
      >
        <h2 className="text-xl font-semibold text-white mb-4">Order Summary</h2>

        <div className="space-y-3 mb-4">
          <div className="flex justify-between">
            <span className="text-gray-300 text-sm">Order ID</span>
            <span className="text-white font-mono text-sm">{orderDetails.orderId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300 text-sm">Total Deposit</span>
            <span className="text-[#E4D27C] font-semibold">₹{orderDetails.depositAmount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300 text-sm">Payment</span>
            <span className="text-white text-sm">{orderDetails.paymentMethod}</span>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-4">
          <h3 className="text-lg font-medium text-white mb-3">Items</h3>
          <div className="space-y-3">
            {orderDetails.items.map((item, index) => (
              <div key={index} className="bg-gray-700/50 rounded-lg p-3">
                <h4 className="font-medium text-white text-sm mb-2">{item.name}</h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
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

      {/* Customer Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 mb-6 border border-gray-700"
      >
        <h2 className="text-xl font-semibold text-white mb-4">Customer Details</h2>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#E4D27C]/20 rounded-full flex items-center justify-center">
              <span className="text-[#E4D27C] font-semibold text-sm">
                {orderDetails.customer.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <span className="text-white text-sm">{orderDetails.customer.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300 text-sm">{orderDetails.customer.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300 text-sm">{orderDetails.customer.phone}</span>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
            <span className="text-gray-300 text-xs">{orderDetails.customer.address}</span>
          </div>
        </div>
      </motion.div>

      {/* Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 mb-6 border border-gray-700"
      >
        <h2 className="text-xl font-semibold text-white mb-4">What's Next?</h2>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 bg-[#E4D27C]/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-[#E4D27C] font-semibold text-xs">1</span>
            </div>
            <div>
              <h3 className="text-white font-medium text-sm">Email Confirmation</h3>
              <p className="text-gray-300 text-xs">Check your inbox for details.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-5 h-5 bg-[#E4D27C]/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-[#E4D27C] font-semibold text-xs">2</span>
            </div>
            <div>
              <h3 className="text-white font-medium text-sm">Production Updates</h3>
              <p className="text-gray-300 text-xs">We'll send progress updates.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Calendar className="w-4 h-4 text-[#E4D27C] mt-0.5" />
            <div>
              <h3 className="text-white font-medium text-sm">Delivery: Q1-Q2 2026</h3>
              <p className="text-gray-300 text-xs">Based on your bike model.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="space-y-3"
      >
        <Button
          onClick={() => router.push('/')}
          className="w-full bg-[#E4D27C] hover:bg-[#d4c068] text-black font-semibold py-3 rounded-lg transition-all duration-300"
        >
          <Home className="w-4 h-4 mr-2" />
          Continue Shopping
        </Button>

        <Button
          variant="outline"
          className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 py-3"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Receipt
        </Button>
      </motion.div>

      {/* Support */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-6 text-center"
      >
        <p className="text-gray-400 text-xs">
          Need help? Email{" "}
          <a href="mailto:support@radkaat.com" className="text-[#E4D27C] hover:underline">
            support@radkaat.com
          </a>
        </p>
      </motion.div>
    </div>
  );
}