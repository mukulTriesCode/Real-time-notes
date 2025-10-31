import useAuthRedirect from "@/hooks/useAuthRedirect";
import useSession from "@/hooks/useSession";
import React, { use } from "react";

const SessionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useSession();
  useAuthRedirect();

  return <>{children}</>;
};

export default SessionProvider;
