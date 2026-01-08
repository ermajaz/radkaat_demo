"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { EnquiryFormData } from "../types/story.types";
import { submitEnquiry } from "../storySlice";

export default function EnquiryFormSheet({
  open,
  onClose,
  tourId,
  tourTitle,
}: {
  open: boolean;
  onClose: () => void;
  tourId?: string;
  tourTitle?: string;
}) {
  const dispatch = useAppDispatch();
  const { isSubmitting, error, success } = useAppSelector(state => state.story.enquiry);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  /* ---------------- VALIDATION ---------------- */
  useEffect(() => {
    // NAME
    if (!name.trim()) setNameError("Name is required.");
    else setNameError("");

    // PHONE VALIDATION
    let clean = phone.replace(/\D/g, ""); // only digits
    if (clean !== phone) setPhone(clean);

    if (!clean) setPhoneError("Phone number is required.");
    else if (clean.length < 10) setPhoneError("Phone number must be 10 digits.");
    else if (clean.length > 10) setPhoneError("Phone number cannot exceed 10 digits.");
    else setPhoneError("");
  }, [name, phone]);

  const isFormValid = !nameError && !phoneError;

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = () => {
    if (!isFormValid || isSubmitting) return;

    const enquiryData: EnquiryFormData = {
      name: name.trim(),
      phoneNumber: phone,
      tripId: tourId,
      tripName: tourTitle,
    };

    dispatch(submitEnquiry(enquiryData));
    onClose();

    // Reset after closing
    setTimeout(() => {
      setName("");
      setPhone("");
    }, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP with blur + click-close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed inset-0 
              bg-black/40 backdrop-blur-sm
              z-60 cursor-pointer
            "
          />

          {/* BOTTOM SHEET */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="
              fixed bottom-0 left-0 w-full z-70
              bg-linear-to-b from-[#161616] to-[#0C0C0C]
              border-t border-neutral-800/40
              rounded-t-3xl 
              p-6 sm:p-10 
              shadow-[0_-15px_45px_rgba(0,0,0,0.55)]
            "
            onClick={(e) => e.stopPropagation()} // prevent closing when tapping inside
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-stone-400 hover:text-white transition"
            >
              <X size={26} />
            </button>

            {/* HEADER */}
            <h2 className="text-xl sm:text-2xl font-semibold text-[#E4D27C] mb-8">
              Join the Adventure
            </h2>

            {/* FORM */}
            <div className="flex flex-col gap-6">
              {/* NAME */}
              <div>
                <label className="text-stone-300 text-sm">Full Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="
                    w-full mt-2 px-4 py-3 
                    bg-black/25 text-white 
                    border border-neutral-700 
                    rounded-xl 
                    focus:border-[#E4D27C] outline-none
                    placeholder:text-stone-500 transition
                  "
                  placeholder="Enter your name"
                />
                <AnimatePresence>
                  {nameError && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="text-red-400 text-xs mt-1"
                    >
                      {nameError}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* PHONE */}
              <div>
                <label className="text-stone-300 text-sm">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  maxLength={10}
                  inputMode="numeric"
                  onChange={(e) => setPhone(e.target.value)}
                  className="
                    w-full mt-2 px-4 py-3
                    bg-black/25 text-white
                    border border-neutral-700 rounded-xl
                    focus:border-[#E4D27C] outline-none
                    placeholder:text-stone-500 transition
                  "
                  placeholder="Enter your phone number"
                />

                <AnimatePresence>
                  {phoneError && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="text-red-400 text-xs mt-1"
                    >
                      {phoneError}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* SUBMIT */}
              <button
                disabled={!isFormValid || isSubmitting}
                onClick={handleSubmit}
                className={`
                  w-full font-semibold py-3 rounded-xl text-lg mt-4
                  transition-all duration-300
                  ${isFormValid && !isSubmitting
                    ? "bg-[#E4D27C] text-black hover:bg-[#d7c568]"
                    : "bg-neutral-700 text-neutral-500 cursor-not-allowed"
                  }
                `}
              >
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
