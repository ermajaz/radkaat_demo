"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AuthInput } from "./AuthInput";

export const ResetPasswordForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 900));
      // 🔗 TODO: Integrate password reset API here
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
          Reset Password
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mt-4 text-gray-400 text-sm leading-relaxed"
        >
          Enter your registered email below, and we’ll send you a secure link to
          reset your password.
        </motion.p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <AuthInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              placeholder="you@example.com"
              className="bg-transparent border-[#2e2e2e] focus:border-army text-white placeholder-gray-500"
            />
          </motion.div>

          {/* Reset Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <button
              type="submit"
              disabled={loading}
              className="relative w-full h-12 overflow-hidden cursor-pointer bg-army text-black font-semibold uppercase tracking-wider border border-army transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
            >
              {loading ? (
                <span className="text-gray-800 animate-pulse">Sending...</span>
              ) : (
                "Send Reset Link"
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
