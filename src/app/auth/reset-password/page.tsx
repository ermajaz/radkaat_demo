"use client";
import React from "react";
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full">
        <ResetPasswordForm />
      </div>
    </main>
  );
}
