"use client";
import React from "react";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="max-h-[600px] flex items-center justify-center">
      <div className="w-full">
        <LoginForm />
      </div>
    </main>
  );
}
