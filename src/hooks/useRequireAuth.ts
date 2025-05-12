"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/hooks/useSession";
import { AppRoutes } from "@/utils/AppRoutes";
import { toast } from "sonner";
export function useRequireAuth() {
  const { user } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.replace(AppRoutes.auth.login);
    }
    if (user?.isDoctor) {
      toast.error("This app is for doctors only");
      router.replace(AppRoutes.landing.home);
    }
  }, [user, router]);

  return user;
}
