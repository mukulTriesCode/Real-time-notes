"use client";
import React from "react";
import Navbar from "./Navbar";
import AppProvider from "./Provider";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AppProvider>
      <Navbar layout="default" />
      <main>{children}</main>
    </AppProvider>
  );
};

export default Layout;
