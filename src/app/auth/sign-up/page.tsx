"use client";
import React from "react";
import { SignupForm } from "@/components/auth/SignupForm";

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full">
        <SignupForm />
      </div>
    </main>
  );
}
