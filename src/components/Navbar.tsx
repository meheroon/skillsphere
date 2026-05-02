"use client";

import Link from "next/link";
// import { signOut, useSession } from "better-auth/api";
import { signOut, useSession } from "@/lib/auth-client"; 
import toast from "react-hot-toast";

export default function Navbar() {
  const { data: session, isPending } = useSession();

  const handleLogout = async () => {
    await signOut();
    toast.success("Logged out successfully");
  };

  return (
    <div className="navbar bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between">
        <Link href="/" className="text-2xl font-bold text-orange-600">
          SkillSphere
        </Link>

        <div className="hidden md:flex gap-6 font-medium">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/my-profile">My Profile</Link>
        </div>

        <div className="flex items-center gap-3">
          {isPending ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : session?.user ? (
            <>
              <img
                src={session.user.image || "https://i.ibb.co.com/4pDNDk1/avatar.png"}
                alt="user"
                className="w-9 h-9 rounded-full object-cover border"
              />
              <button onClick={handleLogout} className="btn btn-sm bg-orange-500 text-white">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn btn-sm btn-outline border-orange-500 text-orange-600">
                Login
              </Link>
              <Link href="/register" className="btn btn-sm bg-orange-500 text-white">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}