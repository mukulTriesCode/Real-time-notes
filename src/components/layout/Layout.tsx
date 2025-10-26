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
        <main>{children}</main>
      </SessionProvider>
    </AppProvider>
  );
};

export default Layout;
