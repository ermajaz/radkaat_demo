"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, Wallet, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export interface ContactFormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  terms: boolean;
}

interface Props {
  onNext: (contact: ContactFormValues) => void;
  onBack: () => void;
}

export default function MobileContactDetails({ onNext, onBack }: Props) {
  const { register, handleSubmit, watch } = useForm<ContactFormValues>();
  const termsChecked = watch("terms", false);

  const [loading, setLoading] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [tempData, setTempData] = useState<ContactFormValues | null>(null);

  /* -------------------------------------------------- */
  /* SUBMIT FORM → OPEN PAYMENT SCREEN */
  /* -------------------------------------------------- */
  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setTempData(data);
      setPaymentModal(true);
    }, 700);
  };

  const handlePayment = () => {
    if (!tempData) return;
    setTimeout(() => {
      setPaymentModal(false);
      onNext(tempData);
    }, 500);
  };

  /* -------------------------------------------------- */
  /* iOS CARD VARIANTS */
  /* -------------------------------------------------- */
  const fieldAnim = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.06, duration: 0.4 },
    }),
  };

  return (
    <>
      {/* -------------------------------------------------- */}
      {/* MAIN FORM */}
      {/* -------------------------------------------------- */}
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full pt-30"
        initial={{ opacity: 0.6, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {/* Title */}
        <h2 className="text-[28px] font-extrabold text-center text-white mb-3 tracking-tight">
          Contact <span className="text-sandstorm">Details</span>
        </h2>

        <p className="text-white/60 text-center text-[14px] leading-relaxed max-w-[90%] mx-auto mb-10">
          Enter your information to continue.  
          A fully refundable <span className="text-sandstorm font-semibold">₹500 deposit</span> will confirm your booking.
        </p>

        {/* FORM FIELDS */}
        <div className="flex flex-col gap-6">
          {/* FIRST + LAST NAME */}
          <motion.div
            custom={0}
            variants={fieldAnim}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-4"
          >
            <Input
              placeholder="First Name"
              className="glass-input"
              {...register("firstName", { required: true })}
            />
            <Input
              placeholder="Last Name"
              className="glass-input"
              {...register("lastName", { required: true })}
            />
          </motion.div>

          {/* PHONE + EMAIL */}
          <motion.div
            custom={1}
            variants={fieldAnim}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-4"
          >
            <Input
              placeholder="Phone Number"
              type="tel"
              className="glass-input"
              {...register("phone", { required: true })}
            />
            <Input
              placeholder="Email Address"
              type="email"
              className="glass-input"
              {...register("email", { required: true })}
            />
          </motion.div>

          {/* TERMS */}
          <motion.div
            custom={2}
            variants={fieldAnim}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-3 mt-2"
          >
            <Checkbox
              className="border-white/40"
              {...register("terms", { required: true })}
            />
            <p className="text-white/70 text-sm">
              I agree to the terms & conditions
            </p>
          </motion.div>
        </div>

        {/* FLOATING CTA BUTTONS */}
        <div className="mt-10 w-full flex gap-3">
          {/* Back */}
          <Button
            type="button"
            onClick={onBack}
            className="
              w-32 rounded-full border border-white/30 bg-white/10 
              text-white/80 hover:bg-white/20 transition-all
            "
          >
            Back
          </Button>

          {/* Continue */}
          <Button
            type="submit"
            disabled={!termsChecked || loading}
            className={`
              flex-1 py-4 rounded-full text-lg font-semibold 
              flex items-center justify-center gap-2 transition-all
              ${
                termsChecked
                  ? "bg-sandstorm text-black shadow-lg"
                  : "bg-white/10 text-white/40"
              }
            `}
          >
            {loading ? "Processing…" : "Continue"} <MoveRight size={18} />
          </Button>
        </div>
      </motion.form>

      {/* -------------------------------------------------- */}
      {/* PAYMENT MODAL */}
      {/* -------------------------------------------------- */}
      <AnimatePresence>
        {paymentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-2xl flex items-center justify-center p-5 z-50"
          >
            {/* CARD */}
            <motion.div
              initial={{ y: 60, scale: 0.92, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="
                w-full max-w-[400px] rounded-3xl p-8
                bg-white/5 border border-white/10 
                shadow-[0_0_35px_rgba(255,193,110,0.15)]
                relative backdrop-blur-xl
              "
            >
              {/* Close Button */}
              <button
                onClick={() => setPaymentModal(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white"
              >
                <X size={22} />
              </button>

              {/* Icon */}
              <div className="w-20 h-20 rounded-full mx-auto bg-sandstorm/20 flex items-center justify-center mb-6">
                <Wallet className="text-sandstorm" size={36} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-center text-white mb-3">
                ₹500 Refundable Deposit
              </h3>

              <p className="text-white/60 text-center text-sm mb-6 leading-relaxed">
                Fully refunded after completing your test ride at the selected store.
              </p>

              {/* Info */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 flex gap-3 items-start">
                <ShieldCheck className="text-sandstorm" size={22} />
                <p className="text-white/70 text-sm leading-relaxed">
                  Secure online payment powered by encrypted gateway.
                </p>
              </div>

              <Button
                onClick={handlePayment}
                className="
                  w-full rounded-full py-4 bg-sandstorm 
                  text-black font-semibold text-lg hover:bg-sandstorm/90
                "
              >
                Pay Now • ₹500
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
