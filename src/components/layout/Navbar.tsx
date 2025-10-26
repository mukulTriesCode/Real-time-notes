import Link from "next/link";
import React from "react";
import Container from "./Container";

const Navbar: React.FC<{ layout: "default" | "minimal" | "rounded" }> = ({
  layout = "default",
}) => {
  const styles =
    layout === "rounded"
      ? "max-w-[1200px] border rounded-full bg-white/5 [&&]:px-6 border-gray-700"
      : layout === "minimal"
      ? "border-b border-gray-700/50"
      : "text-white";
  return (
    <nav className={`mb-4 ${layout=== "default" ? "bg-blue-500" : ""}`}>
      <Container
        className={`flex justify-between items-center py-4 ${styles} `}
      >
        <div>
          <Link href="/" className="text-2xl font-semibold">
            <p className="text-xl">Real-Time Notes</p>
          </Link>
        </div>
        <div className="flex gap-6 font-medium">
          <Link href="/login" className="hover:underline">
            Login
          </Link>
          <Link href="/signup" className="hover:underline">
            Sign Up
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
