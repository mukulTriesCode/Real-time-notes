import useSession from "@/hooks/useSession";
import React from "react";

const SessionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useSession();

  return <>{children}</>;
};

export default SessionProvider;
