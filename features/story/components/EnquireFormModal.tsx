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
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { submitEnquiry, clearEnquiryState } from "@/features/story";
import { EnquiryFormData } from "../types/story.types";

interface EnquiryFormModalProps {
  open: boolean;
  onClose: () => void;
  tourId?: string;
  tourTitle?: string;
}

export default function EnquiryFormModal({
  open,
  onClose,
  tourId,
  tourTitle,
}: EnquiryFormModalProps) {
  const dispatch = useAppDispatch();
  const { isSubmitting, error, success } = useAppSelector(state => state.story.enquiry);

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

  // Handle success state
  useEffect(() => {
    if (success) {
      // Reset form
      setName("");
      setPhone("");
      // Close modal after a delay
      setTimeout(() => {
        onClose();
        dispatch(clearEnquiryState());
      }, 2000);
    }
  }, [success, onClose, dispatch]);

  const isFormValid = !nameError && !phoneError && name.trim() && phone.length === 10;

  /* ---------------- SUBMIT HANDLER ---------------- */

  const handleSubmit = () => {
    if (!isFormValid || isSubmitting) return;

    const enquiryData: EnquiryFormData = {
      name: name.trim(),
      phoneNumber: phone,
      tripId: tourId,
      tripName: tourTitle,
    };

    dispatch(submitEnquiry(enquiryData));
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

        {/* SUCCESS MESSAGE */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-4"
            >
              <p className="text-green-400 text-sm text-center">
                Enquiry submitted successfully! We'll contact you soon.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ERROR MESSAGE */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mb-4"
            >
              <p className="text-red-400 text-sm text-center">
                {error}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
            disabled={!isFormValid || isSubmitting}
            className={`
              w-full py-6 mt-4 text-lg font-semibold cursor-pointer transition-all duration-300
              ${isFormValid && !isSubmitting
                ? "bg-[#E4D27C] text-black hover:bg-[#d4c068]"
                : "bg-neutral-700 text-neutral-400 cursor-not-allowed"
              }
            `}
            onClick={handleSubmit}
          >
            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
