"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AuthInput } from "./AuthInput";
import Link from "next/link";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
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
          Login
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mt-4 text-gray-400 text-sm leading-relaxed"
        >
          We&apos;ve updated our website. If this is your first time logging in,
          please reset your password using the link below.
        </motion.p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <AuthInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              placeholder="you@example.com"
              className="bg-transparent border-[#2e2e2e] focus:border-army text-white placeholder-gray-500"
            />
          </motion.div>

          {/* Password */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <AuthInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              placeholder="Enter password"
              type="password"
              className="bg-transparent border-[#2e2e2e] focus:border-army text-white placeholder-gray-500"
            />
          </motion.div>

          {/* Remember + Forgot */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex items-center justify-between"
          >
            <label className="flex items-center space-x-2 text-xs cursor-pointer text-gray-400">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 accent-army border-army rounded-sm"
              />
              <span className="uppercase tracking-wider">Remember me</span>
            </label>

            <Link
              href="/reset-password"
              className="uppercase tracking-wider text-xs border-b border-transparent hover:text-army hover:border-army transition-all"
            >
              Forgot Password
            </Link>
          </motion.div>

          {/* Login Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <button
              type="submit"
              disabled={loading}
              className="relative w-full h-12 overflow-hidden bg-army text-black cursor-pointer font-semibold uppercase tracking-wider border border-army transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
            >
              {loading ? (
                <span className="text-gray-800 animate-pulse">Loading...</span>
              ) : (
                "Login"
              )}
            </button>
          </motion.div>

          {/* Create Account */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-6 text-center"
          >
            <Link
              href="signup"
              className="uppercase text-xs tracking-wider text-gray-400 border-b border-transparent hover:text-army hover:border-army transition-all"
            >
              Create a new account
            </Link>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};
