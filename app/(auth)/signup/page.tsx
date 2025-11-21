"use client";
import { SignupForm } from "@/features/auth/components/SignupForm";
import React from "react";

export default function SignUpPage() {
  return (
    <main className="max-h-[600px] flex items-center justify-center">
      <div className="w-full">
        <SignupForm />
      </div>
    </main>
  );
}
