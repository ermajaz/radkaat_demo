"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AuthInput } from "./AuthInput";
import { PhoneInputWrapper } from "./PhoneInputWrapper";

export const SignupForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1000));
      // handle success logic
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full text-white overflow-hidden">
      {/* Auth Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-md mx-auto border border-[#2b2b2b] bg-[#0b0b0b]/90 backdrop-blur-md p-10"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold uppercase tracking-[0.25em] text-center text-army"
        >
          Create Account
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mt-4 text-gray-400 text-sm leading-relaxed"
        >
          Join{" "}
          <span className="text-army font-medium cursor-pointer">Radkaat</span>{" "}
          today and start your premium journey. Fill in your details to create
          your account.
        </motion.p>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          {/* Full Name + Email (Side by side on larger screens) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <AuthInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Full Name"
              placeholder="John Doe"
              className="bg-transparent border-[#2e2e2e] focus:border-army text-white placeholder-gray-500"
            />
            <AuthInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              placeholder="you@example.com"
              className="bg-transparent border-[#2e2e2e] focus:border-army text-white placeholder-gray-500"
            />
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <PhoneInputWrapper
              label="Phone (with country code)"
              value={phone}
              onChange={(val: string) => setPhone(val)}
            />
          </motion.div>

          {/* Password */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <AuthInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              placeholder="Choose a strong password"
              type="password"
              className="bg-transparent border-[#2e2e2e] focus:border-army text-white placeholder-gray-500"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <button
              type="submit"
              disabled={loading}
              className="relative w-full h-12 overflow-hidden bg-army text-black font-semibold uppercase tracking-wider border border-army transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.99]"
            >
              {loading ? (
                <span className="text-gray-800 animate-pulse">Creating...</span>
              ) : (
                "Create Account"
              )}
            </button>
          </motion.div>

          {/* Back to Login */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-6 text-center"
          >
            <Link
              href="/signin"
              className="uppercase text-xs tracking-wider text-gray-400 border-b border-transparent hover:text-army hover:border-army transition-all"
            >
              Return to login
            </Link>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};
