"use client";
import { LoginForm } from "@/features/auth/components/LoginForm";
import React from "react";

export default function SignInPage() {
  return (
    <main className="max-h-[600px] flex items-center justify-center">
      <div className="w-full">
        <LoginForm />
      </div>
    </main>
  );
}
