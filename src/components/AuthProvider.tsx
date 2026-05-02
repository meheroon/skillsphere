"use client";

import { Toaster } from "react-hot-toast";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster position="top-center" />
    </>
  );
}