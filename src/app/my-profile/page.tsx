"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";

export default function MyProfilePage() {
  const { data: session } = useSession();

  return (
    <ProtectedRoute>
      <div className="container-custom py-12">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow text-center">
          <img
            src={session?.user.image || "https://i.ibb.co.com/4pDNDk1/avatar.png"}
            alt="profile"
            className="w-32 h-32 rounded-full mx-auto object-cover border"
          />
          <h1 className="text-3xl font-bold mt-5">{session?.user.name}</h1>
          <p className="text-slate-600 mt-2">{session?.user.email}</p>

          <Link href="/my-profile/update" className="btn bg-orange-500 text-white mt-8">
            Update Information
          </Link>
        </div>
      </div>
    </ProtectedRoute>
  );
}