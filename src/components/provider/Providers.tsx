"use client";
import React from "react";
import AppProvider from "./AppProvider";
import SessionProvider from "./SessionProvider";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AppProvider>
      <SessionProvider>{children}</SessionProvider>
    </AppProvider>
  );
};

export default Providers;
