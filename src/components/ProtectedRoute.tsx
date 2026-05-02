"use client";

import { useSession } from "@/lib/auth-client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push(`/login?redirect=${pathname}`);
    }
  }, [isPending, session, router, pathname]);

  if (isPending) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-warning"></span>
      </div>
    );
  }

  if (!session?.user) return null;

  return <>{children}</>;
}