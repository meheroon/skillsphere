"use client";

import Link from "next/link";
import { signOut, useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await signOut();
    toast.success("Logged out successfully");
    setOpen(false);
  };

  const navLinks = (
    <>
      <Link onClick={() => setOpen(false)} href="/" className="hover:text-orange-600">
        Home
      </Link>
      <Link onClick={() => setOpen(false)} href="/courses" className="hover:text-orange-600">
        Courses
      </Link>
      <Link onClick={() => setOpen(false)} href="/my-profile" className="hover:text-orange-600">
        My Profile
      </Link>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b shadow-sm">
      <nav className="container-custom h-16 flex items-center justify-between gap-3">
        <Link href="/" className="text-2xl md:text-3xl font-extrabold text-orange-600">
          SkillSphere
        </Link>

        <div className="hidden md:flex items-center gap-7 font-semibold text-slate-900">
          {navLinks}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {isPending ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : session?.user ? (
            <>
              <img
                src={session.user.image || "https://i.pravatar.cc/150"}
                alt="user"
                className="w-10 h-10 rounded-full object-cover border-2 border-orange-500"
              />
              <button onClick={handleLogout} className="btn btn-sm bg-orange-500 text-white border-0">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn btn-sm btn-outline border-orange-500 text-orange-600">
                Login
              </Link>
              <Link href="/register" className="btn btn-sm bg-orange-500 text-white border-0">
                Register
              </Link>
            </>
          )}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden btn btn-sm bg-orange-500 text-white border-0"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t shadow">
          <div className="container-custom py-4 flex flex-col gap-4 font-semibold">
            {navLinks}

            <div className="pt-3 border-t flex items-center gap-3">
              {isPending ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : session?.user ? (
                <>
                  <img
                    src={session.user.image || "https://i.pravatar.cc/150"}
                    alt="user"
                    className="w-10 h-10 rounded-full object-cover border-2 border-orange-500"
                  />
                  <button onClick={handleLogout} className="btn btn-sm bg-orange-500 text-white border-0">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link onClick={() => setOpen(false)} href="/login" className="btn btn-sm btn-outline border-orange-500 text-orange-600">
                    Login
                  </Link>
                  <Link onClick={() => setOpen(false)} href="/register" className="btn btn-sm bg-orange-500 text-white border-0">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}