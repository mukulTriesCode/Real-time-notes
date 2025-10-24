import Link from "next/link";
import React from "react";
import Container from "./common/Container";

const Navbar: React.FC = () => {
  return (
    <nav className="py-8">
      <Container className="max-w-[1200px] flex justify-between items-center py-4 [&&]:px-6 border rounded-full border-gray-700 bg-white/5">
        <div>
          <Link href="/" className="text-2xl font-semibold">
            <p className="text-xl">Real-Time Notes</p>
          </Link>
        </div>
        <div className="flex gap-6">
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
