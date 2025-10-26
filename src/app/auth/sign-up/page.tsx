"use client";
import React from "react";
import { SignupForm } from "@/components/auth/SignupForm";

export default function SignUpPage() {
  return (
    <main className="max-h-[600px] flex items-center justify-center">
      <div className="w-full">
        <SignupForm />
      </div>
    </main>
  );
}
