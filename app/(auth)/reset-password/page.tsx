"use client";
import { ResetPasswordForm } from "@/features/auth/components/ResetPasswordForm";
import React from "react";

export default function ResetPasswordPage() {
  return (
    <main className="max-h-[600px] flex items-center justify-center">
      <div className="w-full">
        <ResetPasswordForm />
      </div>
    </main>
  );
}
