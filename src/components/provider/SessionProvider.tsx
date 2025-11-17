import useAuthRedirect from "@/hooks/useAuthRedirect";
import useSession from "@/hooks/useSession";
import type { ChildrenProps } from "@/types";
import React from "react";

const SessionProvider: React.FC<ChildrenProps> = ({ children }) => {
  useSession();
  useAuthRedirect();

  return <>{children}</>;
};

export default SessionProvider;
