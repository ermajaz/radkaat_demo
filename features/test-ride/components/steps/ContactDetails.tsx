"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { MoveRight } from "lucide-react";

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

export default function ContactDetails({
  onNext,
  onBack,
}: ContactDetailsProps) {
  const { register, handleSubmit, watch } = useForm<ContactFormValues>();
  const termsChecked = watch("terms", false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onNext(data);
    }, 800); // fake loading for smoother UX
  };

  // Framer Motion variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 80, damping: 20 },
    },
  };

  const inputVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 80,
      },
    }),
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-full max-w-lg p-10 rounded-3xl space-y-8 overflow-hidden bg-superblack/50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Decorative Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-rust/20 animate-pulse" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full blur-2xl bg-rust/10" />
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
        Contact Details
      </h2>

      {/* Progress Bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "80%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="h-1 bg-rust rounded-full mb-6 mx-auto"
      />

      <p className="text-center text-gray-300 text-sm max-w-md mx-auto">
        Enter your details to confirm your ride. We’ll contact you shortly!
      </p>

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          custom={0}
          variants={inputVariants}
          className="relative group"
        >
          <Input
            id="firstName"
            placeholder="First Name"
            {...register("firstName", { required: true })}
            className="peer bg-white/10 text-white py-4 px-4 rounded-lg focus:bg-white/20 focus:ring-2 focus:ring-rust text-lg"
          />
        </motion.div>

        <motion.div
          custom={1}
          variants={inputVariants}
          className="relative group"
        >
          <Input
            id="lastName"
            placeholder="Last Name"
            {...register("lastName", { required: true })}
            className="peer bg-white/10 text-white py-4 px-4 rounded-lg focus:bg-white/20 focus:ring-2 focus:ring-rust text-lg"
          />
        </motion.div>
      </div>

      {/* Contact Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          custom={2}
          variants={inputVariants}
          className="relative group"
        >
          <Input
            id="phone"
            type="tel"
            placeholder="Phone Number"
            {...register("phone", { required: true })}
            className="peer bg-white/10 text-white py-4 px-4 rounded-lg focus:bg-white/20 focus:ring-2 focus:ring-rust text-lg"
          />
        </motion.div>

        <motion.div
          custom={3}
          variants={inputVariants}
          className="relative group"
        >
          <Input
            id="email"
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="peer bg-white/10 text-white py-4 px-4 rounded-lg focus:bg-white/20 focus:ring-2 focus:ring-rust text-lg"
          />
        </motion.div>
      </div>

      {/* Terms Checkbox */}
      <motion.div
        custom={4}
        variants={inputVariants}
        className="flex items-center space-x-3"
      >
        <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}>
          <Checkbox
            id="terms"
            {...register("terms", { required: true })}
            className="accent-rust border-white/50"
          />
        </motion.div>
        <label
          htmlFor="terms"
          className="text-white/70 mb-1 hover:text-white/90 text-sm md:text-lg cursor-pointer"
        >
          I accept the terms & conditions
        </label>
      </motion.div>

      {/* Buttons */}
      <motion.div
        custom={5}
        variants={inputVariants}
        className="flex justify-between mt-6 gap-4"
      >
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="w-full md:w-auto bg-transparent text-white rounded-full border-white/50 py-4 px-8 text-lg hover:bg-white/10 transition"
        >
          Back
        </Button>
        <Button
          type="submit"
          disabled={!termsChecked || submitting}
          className={`w-full md:w-auto py-4 px-8 text-lg font-semibold rounded-full transition-all duration-300 ${
            termsChecked && !submitting
              ? "bg-linear-to-r from-rust to-rust/80 hover:scale-110 hover:shadow-2xl cursor-pointer text-white"
              : "bg-gray-700 text-gray cursor-not-allowed"
          }`}
        >
          {submitting ? "Booking..." : "Book Your Ride"}{" "}
          <MoveRight className="inline ml-2" />
        </Button>
      </motion.div>
    </motion.form>
  );
}
