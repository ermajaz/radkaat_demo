"use client";
import React from "react";
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <main className="max-h-[600px] flex items-center justify-center">
      <div className="w-full">
        <ResetPasswordForm />
      </div>
    </main>
  );
}
