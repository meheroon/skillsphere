"use client";

import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useState } from "react";
import toast from "react-hot-toast";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    const { error } = await signIn.email({
      email,
      password,
      callbackURL: redirect,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Login failed");
      return;
    }

    toast.success("Login successful");
    router.push(redirect);
  };

  const handleGoogleLogin = async () => {
  const redirectPath = searchParams.get("redirect") || "/";
  const safeRedirect = redirectPath.startsWith("/") ? redirectPath : "/";

    await signIn.social({
      provider: "google",
      callbackURL: safeRedirect,
    });
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" required />
          <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" required />

          <button disabled={loading} className="btn bg-orange-500 text-white w-full">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <button onClick={handleGoogleLogin} className="btn btn-outline w-full mt-4">
          Continue with Google
        </button>

        <p className="text-center mt-5">
          New here? <Link href="/register" className="text-orange-600 font-semibold">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}