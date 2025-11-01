"use client";
import React from "react";
import Navbar from "./Navbar";
import AppProvider from "../provider/Provider";
import SessionProvider from "../provider/SessionProvider";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AppProvider>
      <SessionProvider>
        <Navbar layout="default" />
        <main className="min-h-[calc(100dvh-76px)]">{children}</main>
      </SessionProvider>
    </AppProvider>
  );
};

export default Layout;
