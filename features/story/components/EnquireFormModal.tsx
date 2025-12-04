"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function EnquiryFormModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  /* ---------------- VALIDATION ---------------- */

  useEffect(() => {
    // NAME VALIDATION
    if (name.trim().length === 0) setNameError("Name is required.");
    else setNameError("");

    // PHONE VALIDATION
    let clean = phone.replace(/\D/g, ""); // remove non-digits

    if (clean.length === 0) setPhoneError("Phone number is required.");
    else if (clean.length < 10) setPhoneError("Phone number must be 10 digits.");
    else if (clean.length > 10) setPhoneError("Phone number cannot exceed 10 digits.");
    else setPhoneError("");

    // Update cleaned number
    if (clean !== phone) setPhone(clean);
  }, [name, phone]);

  const isFormValid = !nameError && !phoneError;

  /* ---------------- SUBMIT HANDLER ---------------- */

  const handleSubmit = () => {
    if (!isFormValid) return;
    alert(`Enquiry Submitted:\nName: ${name}\nPhone: ${phone}`);
    onClose();
  };

  /* ---------------- UI ---------------- */

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="
          max-w-md 
          bg-[#111]/85 backdrop-blur-xl
          border border-[#E4D27C]/20 
          shadow-[0_0_40px_rgba(228,210,124,0.15)]
          text-white rounded-2xl
          p-8
          animate-in zoom-in-90 duration-300
        "
      >
        <DialogHeader>
          <DialogTitle className="text-[#E4D27C] text-3xl font-bold tracking-wide">
            Join the Adventure
          </DialogTitle>
          <DialogDescription className="text-stone-400 text-[15px] mt-1">
            Enter your details and our team will reach out shortly.
          </DialogDescription>
        </DialogHeader>

        {/* FORM */}
        <div className="space-y-7 mt-7">

          {/* FULL NAME */}
          <div className="flex flex-col gap-2">
            <label className="text-stone-300 text-sm">Full Name</label>

            <Input
              placeholder="John Doe"
              className="
                h-12 text-[15px]
                bg-black/30 border-neutral-700 text-white
                focus-visible:ring-[#E4D27C] focus:border-[#E4D27C]
                rounded-lg transition-all duration-300
                placeholder:text-stone-500
              "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <AnimatePresence>
              {nameError && (
                <motion.p
                  initial={{ opacity: 0, y: -3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -3 }}
                  className="text-red-400 text-xs"
                >
                  {nameError}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* PHONE NUMBER */}
          <div className="flex flex-col gap-2">
            <label className="text-stone-300 text-sm">Phone Number</label>

            <Input
              placeholder="9876543210"
              maxLength={10}
              inputMode="numeric"
              className="
                h-12 text-[15px]
                bg-black/30 border-neutral-700 text-white
                focus-visible:ring-[#E4D27C] focus:border-[#E4D27C]
                rounded-lg transition-all duration-300
                placeholder:text-stone-500
              "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <AnimatePresence>
              {phoneError && (
                <motion.p
                  initial={{ opacity: 0, y: -3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -3 }}
                  className="text-red-400 text-xs"
                >
                  {phoneError}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* SUBMIT */}
        <DialogFooter>
          <Button
            disabled={!isFormValid}
            className={`
              w-full py-6 mt-4 text-lg font-semibold cursor-pointer transition-all duration-300
              ${isFormValid 
                ? "bg-[#E4D27C] text-black hover:bg-[#d4c068]"
                : "bg-neutral-700 text-neutral-400 cursor-not-allowed"
              }
            `}
            onClick={handleSubmit}
          >
            Submit Enquiry
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
