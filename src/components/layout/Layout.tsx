"use client";
import React from "react";
import Navbar from "./Navbar";
import { useAppSelector } from "@/redux/hooks";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAppSelector((state) => state.auth);
  const isAuthenticated = Boolean(user?.id);
  return (
    <>
      {!isAuthenticated && <Navbar layout="default" />}
      <main className="min-h-[calc(100dvh-76px)]">{children}</main>
    </>
  );
};

export default Layout;
