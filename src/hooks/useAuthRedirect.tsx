import { useAppSelector } from "@/redux/hooks";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const useAuthRedirect = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (user === undefined) return;

    if (pathname === "/dashboard" && !user?.id) {
      router.push("/login");
    } else if (user?.id && (pathname === "/login" || pathname === "/signup")) {
      router.push("/dashboard");
    }
  }, [user, pathname, router]);
};

export default useAuthRedirect;
