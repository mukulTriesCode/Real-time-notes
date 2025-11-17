"use client";
import React from "react";
import AppProvider from "./AppProvider";
import SessionProvider from "./SessionProvider";
import type { ChildrenProps } from "@/types";

const Providers: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <AppProvider>
      <SessionProvider>{children}</SessionProvider>
    </AppProvider>
  );
};

export default Providers;
