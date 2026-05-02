"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function UpdateProfilePage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const image = (form.elements.namedItem("image") as HTMLInputElement).value;

    const { error } = await authClient.updateUser({
      name,
      image,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Update failed");
      return;
    }

    toast.success("Profile updated successfully");
    router.push("/my-profile");
  };

  return (
    <ProtectedRoute>
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow">
          <h1 className="text-3xl font-bold text-center mb-6">Update Profile</h1>

          <form onSubmit={handleUpdate} className="space-y-4">
            <input
              name="name"
              type="text"
              defaultValue={session?.user.name || ""}
              placeholder="Name"
              className="input input-bordered w-full"
              required
            />

            <input
              name="image"
              type="url"
              defaultValue={session?.user.image || ""}
              placeholder="Image URL"
              className="input input-bordered w-full"
              required
            />

            <button disabled={loading} className="btn bg-orange-500 text-white w-full">
              {loading ? "Updating..." : "Update Information"}
            </button>
          </form>
        </div>
      </div>
    </ProtectedRoute>
  );
}