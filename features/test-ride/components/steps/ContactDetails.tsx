"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { MoveRight, Wallet, ShieldCheck, X } from "lucide-react";

export interface ContactFormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  terms: boolean;
}

interface ContactDetailsProps {
  onNext: (contact: ContactFormValues) => void;
  onBack: () => void;
}

export default function ContactDetails({ onNext, onBack }: ContactDetailsProps) {
  const { register, handleSubmit, watch } = useForm<ContactFormValues>();
  const termsChecked = watch("terms", false);

  const [submitting, setSubmitting] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [tempData, setTempData] = useState<ContactFormValues | null>(null);

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setTempData(data);
      setShowPaymentModal(true); // open modal instead of onNext
    }, 800);
  };

  // Animations
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const inputVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.07, duration: 0.4 },
    }),
  };

  // Handle Pay Now
  const handlePayment = () => {
    if (!tempData) return;

    // Simulated delay
    setTimeout(() => {
      setShowPaymentModal(false);
      onNext(tempData);
    }, 500);
  };

  return (
    <>
      {/* MAIN FORM */}
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-10 w-full px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
          Contact Details
        </h2>

        <p className="text-center text-gray-300 text-sm max-w-md">
          Enter your details to confirm your ride. After this you will complete a refundable ₹500 booking step.
        </p>

        {/* Name */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div custom={0} variants={inputVariants}>
            <Input
              placeholder="First Name"
              {...register("firstName", { required: true })}
              className="bg-white/10 text-white p-5 rounded-none focus:bg-white/20 focus:ring-2 focus:ring-sandstorm text-lg"
            />
          </motion.div>

          <motion.div custom={1} variants={inputVariants}>
            <Input
              placeholder="Last Name"
              {...register("lastName", { required: true })}
              className="bg-white/10 text-white p-5 rounded-none focus:bg-white/20 focus:ring-2 focus:ring-sandstorm text-lg"
            />
          </motion.div>
        </div>

        {/* Contact */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div custom={2} variants={inputVariants}>
            <Input
              type="tel"
              placeholder="Phone Number"
              {...register("phone", { required: true })}
              className="bg-white/10 text-white p-5 rounded-none focus:bg-white/20 focus:ring-2 focus:ring-sandstorm text-lg"
            />
          </motion.div>

          <motion.div custom={3} variants={inputVariants}>
            <Input
              type="email"
              placeholder="Email Address"
              {...register("email", { required: true })}
              className="bg-white/10 text-white p-5 rounded-none focus:bg-white/20 focus:ring-2 focus:ring-sandstorm text-lg"
            />
          </motion.div>
        </div>

        {/* Terms */}
        <motion.div custom={4} variants={inputVariants} className="flex items-center gap-3 w-full">
          <Checkbox
            {...register("terms", { required: true })}
            className="accent-sandstorm border-white cursor-pointer"
          />
          <label className="text-white/70 cursor-pointer">
            I accept the terms & conditions
          </label>
        </motion.div>

        {/* Buttons */}
        <motion.div custom={5} variants={inputVariants} className="w-full flex justify-between gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            className="w-full md:w-auto rounded-full text-black bg-white py-4 px-8"
          >
            Back
          </Button>

          <Button
            type="submit"
            disabled={!termsChecked || submitting}
            className={`w-full md:w-auto py-4 px-8 rounded-full text-lg font-semibold flex items-center gap-2 ${
              termsChecked
                ? "bg-sandstorm text-black cursor-pointer"
                : "bg-gray-700 text-gray-500 cursor-not-allowed"
            }`}
          >
            {submitting ? "Processing..." : "Continue"} <MoveRight />
          </Button>
        </motion.div>
      </motion.form>

      {/* ============================= */}
      {/*        PAYMENT MODAL          */}
      {/* ============================= */}
      {showPaymentModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-xl flex justify-center items-center z-50 p-6"
        >
          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="bg-[#111] w-full max-w-md rounded-sm p-8 shadow-xl border border-white/10"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPaymentModal(false)}
              className="absolute top-5 right-5 text-white/60 hover:text-white"
            >
              <X size={22} />
            </button>

            {/* Icon */}
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-sandstorm/20 mb-5">
              <Wallet className="text-sandstorm" size={32} />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white text-center mb-3">
              ₹500 Refundable Deposit
            </h3>

            {/* Description */}
            <p className="text-white/70 text-center text-sm mb-6">
              This amount is fully refunded once you complete the test ride at your selected store.
            </p>

            {/* Info Card */}
            <div className="bg-white/5 p-4 rounded-sm border border-white/10 mb-7">
              <div className="flex items-center gap-3 text-white">
                <ShieldCheck className="text-sandstorm" size={20} />
                <p className="font-medium">Secured Payment Gateway</p>
              </div>
              <p className="text-white/60 text-sm mt-2">
                Your booking will be confirmed immediately after payment.
              </p>
            </div>

            {/* Pay Button */}
            <Button
              onClick={handlePayment}
              className="w-full bg-sandstorm text-black font-semibold py-4 rounded-full hover:bg-sandstorm/90 cursor-pointer"
            >
              Pay Now • ₹500
            </Button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
