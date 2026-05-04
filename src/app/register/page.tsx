"use client";

import { signIn, signUp,useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState,useEffect } from "react";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { data: session, isPending } = useSession();

    useEffect(() => {
      if (!isPending && session?.user) {
        router.push("/");
      }
    }, [isPending, session, router]);

    if (isPending) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center">
          <span className="loading loading-spinner loading-lg text-warning"></span>
        </div>
      );
    }

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const image = (form.elements.namedItem("image") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    const { error } = await signUp.email({
      name,
      email,
      password,
      image,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Registration failed");
      return;
    }

    toast.success("Registration successful. Please login.");
    router.push("/login");
  };

  const handleGoogleLogin = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow">
        <h1 className="text-3xl font-bold text-center mb-6">Register</h1>

        <form onSubmit={handleRegister} className="space-y-4">
          <input name="name" type="text" placeholder="Name" className="input input-bordered w-full" required />
          <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" required />
          <input name="image" type="url" placeholder="Photo URL" className="input input-bordered w-full" />
          <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" required minLength={6} />

          <button disabled={loading} className="btn bg-orange-500 text-white w-full">
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <button onClick={handleGoogleLogin} className="btn btn-outline w-full mt-4">
          Continue with Google
        </button>

        <p className="text-center mt-5">
          Already have an account? <Link href="/login" className="text-orange-600 font-semibold">Login</Link>
        </p>
      </div>
    </div>
  );
}