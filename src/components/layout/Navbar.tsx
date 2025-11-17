import Link from "next/link";
import React from "react";
import Container from "./Container";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Button from "../common/Button";
import { clearUser } from "@/redux/features/user/userSlice";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import type { NavbarProps } from "@/types";

const Navbar: React.FC<NavbarProps> = ({ layout = "default" }) => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const isAuthenticated = Boolean(user?.id);

  const navLinks = [
    { href: "/login", label: "Login" },
    { href: "/signup", label: "Sign Up" },
  ];

  const authLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/profile", label: "Profile" },
  ];

  const styles =
    layout === "rounded"
      ? "max-w-[1200px] border rounded-full bg-white/5 [&&]:px-6 border-gray-700"
      : layout === "minimal"
      ? "border-b border-gray-700/50"
      : "text-white";

  const handleLogout = () => {
    dispatch(clearUser());
    supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <nav className={`${layout === "default" ? "bg-blue-500" : ""}`}>
      <Container
        className={`flex justify-between items-center py-4 ${
          isAuthenticated ? "max-w-none" : ""
        } ${styles} `}
      >
        <div>
          <Link href="/" className="text-2xl font-semibold">
            <p className="leading-11">Real-Time Notes</p>
          </Link>
        </div>
        <div className="flex gap-6 font-medium items-center">
          {!isAuthenticated ? (
            navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:underline"
              >
                {link.label}
              </Link>
            ))
          ) : (
            <>
              {authLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:underline"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                onClick={handleLogout}
                variant="outlined"
                className="bg-white"
              >
                Logout
              </Button>
            </>
          )}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
